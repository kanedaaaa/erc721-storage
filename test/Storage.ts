import { expect } from "chai";
import { ethers } from "hardhat";

describe("Happy Path", () => {
  const deploy = async () => {
    const Storage = await ethers.getContractFactory("Storage");
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

  it("Store: single token", async () => {
    const { storage, token, owner, user } = await deploy(); 

    await token.connect(owner).mint(10, user.address);
    await token.connect(user).setApprovalForAll(storage.address, true);
    await storage.connect(user).store(token.address, [0]);

    const info = await storage.getUser(token.address, user.address, 0);
    
    //0 is stored token, and 2 is total amount stored
    expect(Number(info[0])).to.equal(0);
    expect(Number(info[2])).to.equal(1);
  });

  it("Store: Multiple tokens", async () => {
    const { storage, token, owner, user } = await deploy(); 

    await token.connect(owner).mint(10, user.address);
    await token.connect(user).setApprovalForAll(storage.address, true);
    await storage.connect(user).store(token.address, [0, 1, 2, 3]);

    const info = await storage.getUser(token.address, user.address, 999);
    
    expect(Number(info[0][0])).to.equal(0);
    expect(Number(info[0][1])).to.equal(1);
    expect(Number(info[2])).to.equal(4);
  });

  it("Store: Single token, Multiple users", async () => {
    const { storage, token, token2, owner, user, user2 } = await deploy(); 
    
    await token.connect(owner).mint(5, user.address);
    await token.connect(user).setApprovalForAll(storage.address, true);

    await token.connect(owner).mint(10, user2.address);
    await token.connect(user2).setApprovalForAll(storage.address, true);

    await storage.connect(user).store(token.address, [4]);
    await storage.connect(user2).store(token.address, [8]);

    const userInfo = await storage.getUser(token.address, user.address, 0);
    const user2Info = await storage.getUser(token.address, user2.address, 0);

    expect(Number(userInfo[0])).to.equal(4);
    expect(Number(user2Info[0])).to.equal(8);
  });
});
