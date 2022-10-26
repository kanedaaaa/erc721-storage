pragma solidity ^0.8.11;

import "../libs/Array.sol";

contract Array_Test {
    using Array for uint256[];
    uint256[] arr = [1, 20, 30, 513, 1923];
    uint256 target = 513;

    function testArr() public {
        arr.removeElement(target);
    }

    function viewArr() public view returns (uint256[] memory) {
        return arr;
    }
}