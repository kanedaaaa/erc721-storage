import { expect } from "chai";
import { ethers } from "hardhat";

describe("Happy Path", () => {
  let Storage: any;

  beforeEach(async () => {
    Storage = await ethers.getContractFactory("Storage");
  });

  it("Test", () => {
    console.log("Works");
  });
});
