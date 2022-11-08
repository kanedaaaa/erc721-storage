import { expect } from "chai";
import { ethers } from "hardhat";

import { SameContractTwoUsers } from "./Helpers";

describe("Happy Path", () => {
  const deploy = async () => {
    const Array = await ethers.getContractFactory("Array");
    const array = await Array.deploy();
    await array.deployed();

    const Storage = await ethers.getContractFactory("Storage", {
      libraries: {
        Array: array.address
      }
    });
    const storage = await Storage.deploy();
    await storage.deployed();

    const Token = await ethers.getContractFactory("Mock");
    const token = await Token.deploy();
    await token.deployed();

    const Token1 = await ethers.getContractFactory("Mock");
    const token2 = await Token.deploy();
    await token2.deployed();

    const [ owner, user, user2 ] = await ethers.getSigners();
    
    return { storage, token, token2, owner, user, user2 };
  }

  it("Store: Single token, Single user, Same contract", async () => {
    const { storage, token, owner, user } = await deploy(); 

    await token.connect(owner).mint(10, user.address);
    await token.connect(user).setApprovalForAll(storage.address, true);
    await storage.connect(user).store(token.address, [0]);

    const info = await storage.getUser(token.address, user.address, 0);
    
    //0 is stored token, and 2 is total amount stored
    expect(Number(info[0])).to.equal(0);
    expect(Number(info[2])).to.equal(1);
  });

  it("Store: Multiple tokens, Single user, Same contract", async () => {
    const { storage, token, owner, user } = await deploy(); 

    await token.connect(owner).mint(10, user.address);
    await token.connect(user).setApprovalForAll(storage.address, true);
    await storage.connect(user).store(token.address, [0, 1, 2, 3]);

    const info = await storage.getUser(token.address, user.address, 999);
    
    expect(Number(info[0][0])).to.equal(0);
    expect(Number(info[0][1])).to.equal(1);
    expect(Number(info[2])).to.equal(4);
  });

  it("Store: Single token, Multiple users, Same contract", async () => {
    const { storage, token, owner, user, user2 } = await deploy(); 

    await SameContractTwoUsers(storage, token, owner, user, user2, [4], [8], 5, 10);

    const userInfo = await storage.getUser(token.address, user.address, 0);
    const user2Info = await storage.getUser(token.address, user2.address, 0);

    expect(Number(userInfo[0])).to.equal(4);
    expect(Number(user2Info[0])).to.equal(8);
  });

  it("Store: Multiple tokens, Multiple users, Same contract", async () => {
    const { storage, token, owner, user, user2 } = await deploy(); 

    await SameContractTwoUsers(storage, token, owner, user, user2, [0, 1], [3, 4], 2, 4);

    const userInfo = await storage.getUser(token.address, user.address, 0);
    const user2Info = await storage.getUser(token.address, user2.address, 0);

    expect(Number(userInfo[0][0])).to.equal(0);
    expect(Number(userInfo[0][1])).to.equal(1);

    expect(Number(user2Info[0][0])).to.equal(3);
    expect(Number(user2Info[0][1])).to.equal(4);
  });

  it("Store: Single token, Single user, Multiple contracts", async () => {
  });

  it("Store: Multiple token, Single user, Multiple contracts", async () => {
  });

  it("Store: Single token, Multiple users, Multiple contracts", async () => {
  });

  it("Store: Multiple token, Multiple users, Multiple contracts", async () => {
  });
});
