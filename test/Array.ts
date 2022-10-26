import { expect } from "chai";
import { ethers } from "hardhat";

describe("Array lib test", () => {
  const deploy = async () => {
    const Array = await ethers.getContractFactory("Array");
    const array = await Array.deploy();
    await array.deployed();

    const Array_Test = await ethers.getContractFactory("Array_Test", {
      libraries: {
        Array: array.address,
      },
    });
    const array_test = await Array_Test.deploy();
    await array_test.deployed();

    return array_test;
  };

  it("Array: Works as intended", async () => {
    const array_test = await deploy();
    const target = 513;

    await array_test.testArr();
    const answ = await array_test.viewArr();

    for (let x of answ) {
      expect(Number(x) !== target).to.equal(true);
    }
  });
});
