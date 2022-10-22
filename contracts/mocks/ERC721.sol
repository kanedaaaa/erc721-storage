// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Mock is ERC721Enumerable {
    constructor() ERC721 ("Collection", "COLL") {}

    uint256 count = 0;
    
    function mint(uint256 _amount, address _user) public {
        for (uint256 i; i<_amount; ++i) {
            _safeMint(_user, totalSupply());
            incrementId();
        }
    }

    function getId() public view returns (uint256) {
        return count;
    }

    function incrementId() public {
        count++;
    }
} 