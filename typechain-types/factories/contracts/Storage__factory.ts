/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Storage, StorageInterface } from "../../contracts/Storage";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_id",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_staker",
        type: "address",
      },
    ],
    name: "Store",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_id",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_unstaker",
        type: "address",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getUser",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_id",
        type: "uint256[]",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_id",
        type: "uint256[]",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002b675214e04490648f3060c01b61003060201b60201c565b610033565b50565b610dac806100426000396000f3fe6080604052600436106100345760003560e01c8063429e674b146100395780638293744b14610055578063e77d35a31461007e575b600080fd5b610053600480360381019061004e9190610a3b565b6100bd565b005b34801561006157600080fd5b5061007c60048036038101906100779190610a3b565b610278565b005b34801561008a57600080fd5b506100a560048036038101906100a09190610a97565b610432565b6040516100b493929190610bb7565b60405180910390f35b6100d1673a9477063482d4b460c01b6105d8565b6100e5676da565437f3e99cb60c01b6105d8565b6100f967702ba6f799b0c11260c01b6105d8565b60018151146101ae576101166722707d8e0fa07cd560c01b6105d8565b61012a67e0970740933c0e5160c01b6105d8565b61013e67c8c0e20d7856718360c01b6105d8565b60005b81518110156101a85761015e67e4a335536b14609860c01b6105d8565b61017267e46439376927225a60c01b6105d8565b6101978383838151811061018957610188610bf5565b5b6020026020010151336105db565b806101a190610c53565b9050610141565b50610211565b6101c267772303456853477960c01b6105d8565b6101d6678542bf283e1818e860c01b6105d8565b6101ea671fcaff1f4054c1c360c01b6105d8565b610210828260008151811061020257610201610bf5565b5b6020026020010151336105db565b5b6102256778771bd469318a4260c01b6105d8565b61023967530f746a5c95799260c01b6105d8565b7fb1f4342da638c10de9fb8ddd511ae5d3019e7db9fe63f8b58b0e7b73f23b7a9082823360405161026c93929190610cab565b60405180910390a15050565b61028c673ce32c1673c73b9560c01b6105d8565b6102a06792f1155e5c3f629060c01b6105d8565b6102b36664cc212f9255e360c01b6105d8565b6001815114610368576102d06767590ac68d42ef4660c01b6105d8565b6102e467f798c2c7e67d4b5660c01b6105d8565b6102f8673829c87ea9643a3c60c01b6105d8565b60005b81518110156103625761031867baa3f910b7a59fc760c01b6105d8565b61032c67536d86857f56687860c01b6105d8565b6103518383838151811061034357610342610bf5565b5b602002602001015133610821565b8061035b90610c53565b90506102fb565b506103cb565b61037c6712b31ce8f019581460c01b6105d8565b610390675a18ac06b7bf760960c01b6105d8565b6103a467be1582ad8e21a46d60c01b6105d8565b6103ca82826000815181106103bc576103bb610bf5565b5b602002602001015133610821565b5b6103df677f9cead12b03c56f60c01b6105d8565b6103f3674a6363b16693642b60c01b6105d8565b7f2914fb8a46e50bef641e8ad5afbe361259bec877a37b20211e5fab6268f46da382823360405161042693929190610cab565b60405180910390a15050565b606060008061044b67fe19dc8923de122960c01b6105d8565b61045f67df136159abfb22a060c01b6105d8565b61047367a5e860f85e85f78360c01b6105d8565b60008060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506104c967ee3baf9b38b726d960c01b6105d8565b6104dd674df34b27ac9e754b60c01b6105d8565b8060000160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208160010160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878152602001908152602001600020548260020154828054806020026020016040519081016040528092919081815260200182805480156105c157602002820191906000526020600020905b8154815260200190600101908083116105ad575b505050505092509350935093505093509350939050565b50565b6105ef675022c51302acfd4b60c01b6105d8565b6106036731024cd07215d47460c01b6105d8565b61061767c3db35ed0263b75b60c01b6105d8565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905061066d67b009315a907f1e2460c01b6105d8565b61068167a64aca2b02b1cc3060c01b6105d8565b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd8330866040518463ffffffff1660e01b81526004016106be93929190610ce9565b600060405180830381600087803b1580156106d857600080fd5b505af11580156106ec573d6000803e3d6000fd5b5050505061070467ad434f185779e65e60c01b6105d8565b60018160020160008282546107199190610d20565b92505081905550610734671c0ca7b52e2efb8e60c01b6105d8565b428160010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008581526020019081526020016000208190555061079f6777211bd6c1d2a6d960c01b6105d8565b6107b3679e322077b806a1b060c01b6105d8565b8060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083908060018154018082558091505060019003906000526020600020016000909190919091505550505050565b6108356723aeb0f759328d6860c01b6105d8565b505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108798261084e565b9050919050565b6108898161086e565b811461089457600080fd5b50565b6000813590506108a681610880565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108fa826108b1565b810181811067ffffffffffffffff82111715610919576109186108c2565b5b80604052505050565b600061092c61083a565b905061093882826108f1565b919050565b600067ffffffffffffffff821115610958576109576108c2565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6109818161096e565b811461098c57600080fd5b50565b60008135905061099e81610978565b92915050565b60006109b76109b28461093d565b610922565b905080838252602082019050602084028301858111156109da576109d9610969565b5b835b81811015610a0357806109ef888261098f565b8452602084019350506020810190506109dc565b5050509392505050565b600082601f830112610a2257610a216108ac565b5b8135610a328482602086016109a4565b91505092915050565b60008060408385031215610a5257610a51610844565b5b6000610a6085828601610897565b925050602083013567ffffffffffffffff811115610a8157610a80610849565b5b610a8d85828601610a0d565b9150509250929050565b600080600060608486031215610ab057610aaf610844565b5b6000610abe86828701610897565b9350506020610acf86828701610897565b9250506040610ae08682870161098f565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610b1f8161096e565b82525050565b6000610b318383610b16565b60208301905092915050565b6000602082019050919050565b6000610b5582610aea565b610b5f8185610af5565b9350610b6a83610b06565b8060005b83811015610b9b578151610b828882610b25565b9750610b8d83610b3d565b925050600181019050610b6e565b5085935050505092915050565b610bb18161096e565b82525050565b60006060820190508181036000830152610bd18186610b4a565b9050610be06020830185610ba8565b610bed6040830184610ba8565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c5e8261096e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c9157610c90610c24565b5b600182019050919050565b610ca58161086e565b82525050565b6000606082019050610cc06000830186610c9c565b8181036020830152610cd28185610b4a565b9050610ce16040830184610c9c565b949350505050565b6000606082019050610cfe6000830186610c9c565b610d0b6020830185610c9c565b610d186040830184610ba8565b949350505050565b6000610d2b8261096e565b9150610d368361096e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d6b57610d6a610c24565b5b82820190509291505056fea2646970667358221220327fd3ed1ff5fac9901326f27959a578544340d1602db827a4b03d2b1634246364736f6c634300080b0033";

type StorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Storage__factory extends ContractFactory {
  constructor(...args: StorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Storage> {
    return super.deploy(overrides || {}) as Promise<Storage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Storage {
    return super.attach(address) as Storage;
  }
  override connect(signer: Signer): Storage__factory {
    return super.connect(signer) as Storage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StorageInterface {
    return new utils.Interface(_abi) as StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Storage {
    return new Contract(address, _abi, signerOrProvider) as Storage;
  }
}
