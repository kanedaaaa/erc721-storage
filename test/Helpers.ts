import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Mock, Storage } from "../typechain-types";

const SingleContract = async (
  two: boolean,
  storage: Storage,
  token: Mock,
  owner: SignerWithAddress,
  user: SignerWithAddress,
  user2: SignerWithAddress,
  userTokensArr: number[],
  user2TokensArr: number[],
  userTokensTotal: number,
  user2TokensTotal: number
): Promise<void> => {
  if (two) {
    await token.connect(owner).mint(userTokensTotal, user.address);
    await token.connect(user).setApprovalForAll(storage.address, true);

    await token.connect(owner).mint(user2TokensTotal, user2.address);
    await token.connect(user2).setApprovalForAll(storage.address, true);

    await storage.connect(user).store(token.address, userTokensArr);
    await storage.connect(user2).store(token.address, user2TokensArr);
  } else {
    await token.connect(owner).mint(userTokensTotal, user.address);
    await token.connect(user).setApprovalForAll(storage.address, true);
    await storage.connect(user).store(token.address, userTokensArr);
  }
};

export { SingleContract };
