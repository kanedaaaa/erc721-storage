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
        mapping(address => mapping(uint256 => uint256)) timestamps;
        uint256 amountStored;
    }

    /** @notice User address => User struct */
    mapping(address => User) public owners;

    event Store(address _contract, uint256[] _id, address _staker);
    event Withdraw(address _contract, uint256[] _id, address _unstaker);

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
     * @param _user: msg.sender.
     *
     * See {store()} for other params.
     *
     * With IERC721 `transferFrom`, Contract will request msg.sender's
     * token ID's, Then increment User info accordingly.
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
    }

    // TEST STOP //

    function _withdraw(
        address _contract,
        uint256 _id,
        address _user
    ) internal {}
}
