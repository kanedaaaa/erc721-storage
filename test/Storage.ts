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

    const [ owner, user, user2 ] = await ethers.getSigners();
    
    return { storage, token, owner, user, user2 };
  }

  it("Store single token", async () => {
    const { storage, token, owner, user } = await deploy(); 

    await token.connect(owner).mint(10, user.address);
    await token.connect(user).setApprovalForAll(storage.address, true);
    await storage.connect(user).store(token.address, [0]);

    const info = await storage.getUser(token.address, user.address, 0);
    
    /// 0 is stored token, and 2 is total amount stored
    expect(Number(info[0][0])).to.equal(0);
    expect(Number(info[2])).to.equal(1);
  });
});
