//SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

/**
 * NFT Storage contract.
 * Can store any NFT from any contract.
 *
 * @author kata
 */

import "./libs/Array.sol";

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Storage {
    using Array for uint256[];

    /**
     * @notice User info
     * storedTokens: NFT contract address => ID of stored NFT.
     * timestamps: mapping (contract address => token id => timestamp in unix format).
     * amountStored: Total amount of NFTs stored across every collection.
     */
    struct User {
        mapping(address => uint256[]) storedTokens;
        mapping(address => mapping(uint256 => bool)) isStored;
        mapping(address => mapping(uint256 => uint256)) timestamps;
        uint256 amountStored;
    }

    /** @notice User address => User struct */
    mapping(address => User) private owners;

    event Store(address _contract, uint256[] _id, address _staker);
    event Withdraw(address _contract, uint256[] _id, address _unstaker);

    constructor() {}

    /**
     * @notice External function that wraps internal _store for code clarity.
     * @param _contract: Address of NFT contract.
     * @param _id: Array of NFT ID's.
     */
    function store(address _contract, uint256[] memory _id) external payable {
        if (_id.length != 1) {
            for (uint256 i = 0; i < _id.length; ++i) {
                _store(_contract, _id[i], msg.sender);
            }
        } else {
            _store(_contract, _id[0], msg.sender);
        }

        emit Store(_contract, _id, msg.sender);
    }

    /**
     * @notice External function that wraps internal _withdraw for code clarity.
     * @param _contract: Address of NFT contract.
     * @param _id: Array of NFT ID's.
     */
    function withdraw(address _contract, uint256[] memory _id) external {
        if (_id.length != 1) {
            for (uint256 i = 0; i < _id.length; ++i) {
                _withdraw(_contract, _id[i], msg.sender);
            }
        } else {
            _withdraw(_contract, _id[0], msg.sender);
        }

        emit Withdraw(_contract, _id, msg.sender);
    }

    /**
     * @notice Store tokens in contract.
     *
     * See {store()} for params.
     */
    function _store(
        address _contract,
        uint256 _id,
        address _user
    ) internal {
        User storage user = owners[_user];

        IERC721(_contract).transferFrom(_user, address(this), _id);

        user.amountStored += 1;
        user.timestamps[_contract][_id] = block.timestamp;
        user.storedTokens[_contract].push(_id);
        user.isStored[_contract][_id] = true;
    }

    // TEST STOP //

    /**
     * @notice Withdraw tokens from contract
     * 
     * See {store()} for params.
    */
    function _withdraw(
        address _contract,
        uint256 _id,
        address _user
    ) internal {
        User storage user = owners[_user];

        require(user.isStored[_contract][_id], "withdraw._withdraw: ERROR, User doesn't owns the given token");
        
        user.isStored[_contract][_id] = false;
        user.storedTokens[_contract].removeElement(_id);
        delete user.timestamps[_contract][_id];
        user.amountStored = 0;

        if (user.amountStored == 0) {
            delete owners[_user];
        }

        IERC721(_contract).transferFrom(address(this), _user, _id);
    }

    function getUser(address _contract, address _user, uint256 _id) public view returns (
        uint256[] memory,
        uint256,
        uint256
    ) {
        // forced to use storage caz of nested mapping
        User storage user = owners[_user];
    
        return (
            user.storedTokens[_contract],
            user.timestamps[_contract][_id],
            user.amountStored
        );
    }
}
