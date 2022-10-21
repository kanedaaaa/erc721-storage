//SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

/**
 * NFT Storage contract.
 * Can store any NFT from any contract. 
 *
 * @author kata
 */

import "./libs/Array.sol";

contract Storage {    
    using Array for uint256[];
    
    /**
     * @notice User info
     * storedTokens: NFT contract address => ID of stored NFT.
     * amountStored: Total amount of NFTs stored across every collection.
     */
    struct User {
        mapping(address => uint256[]) storedTokens;
        uint256 amountStored;
    }

    /** @notice Two way mapping to check User info, And see if msg.sender is owner. */
    mapping(address => User) public owners;
    mapping(address => bool) public isOwner;

    event Store(address _contract, uint256[] _id, address _staker);
    event Withdraw(address _contract, uint256[] _id, address _unstaker);

    /**
     * @notice External function that wraps internal _store for code clarity.
     * @param _contract: Address of NFT contract
     * @param _id: Array of NFT ID's 
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
     * @param _contract: Address of NFT contract
     * @param _id: Array of NFT ID's 
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

    function _store(address _contract, uint256 _id, address _user) internal {

    }

    function _withdraw(address _contract, uint256 _id, address _user) internal {
    }
}