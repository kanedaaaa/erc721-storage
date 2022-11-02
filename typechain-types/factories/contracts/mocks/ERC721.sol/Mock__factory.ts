/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Mock,
  MockInterface,
} from "../../../../contracts/mocks/ERC721.sol/Mock";

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
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getId",
    outputs: [
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
    inputs: [],
    name: "incrementId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600a553480156200001657600080fd5b506040518060400160405280600a81526020017f436f6c6c656374696f6e000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f434f4c4c0000000000000000000000000000000000000000000000000000000081525081600090805190602001906200009b929190620000bd565b508060019080519060200190620000b4929190620000bd565b505050620001d2565b828054620000cb906200019c565b90600052602060002090601f016020900481019282620000ef57600085556200013b565b82601f106200010a57805160ff19168380011785556200013b565b828001600101855582156200013b579182015b828111156200013a5782518255916020019190600101906200011d565b5b5090506200014a91906200014e565b5090565b5b80821115620001695760008160009055506001016200014f565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001b557607f821691505b60208210811415620001cc57620001cb6200016d565b5b50919050565b612d6e80620001e26000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80635d1ca631116100ad578063a22cb46511610071578063a22cb4651461032e578063b88d4fde1461034a578063bda208d114610366578063c87b56dd14610370578063e985e9c5146103a057610121565b80635d1ca631146102765780636352211e1461029457806370a08231146102c457806394bf804d146102f457806395d89b411461031057610121565b806318160ddd116100f457806318160ddd146101c057806323b872dd146101de5780632f745c59146101fa57806342842e0e1461022a5780634f6ccce71461024657610121565b806301ffc9a71461012657806306fdde0314610156578063081812fc14610174578063095ea7b3146101a4575b600080fd5b610140600480360381019061013b9190611d3a565b6103d0565b60405161014d9190611d82565b60405180910390f35b61015e61044a565b60405161016b9190611e36565b60405180910390f35b61018e60048036038101906101899190611e8e565b6104dc565b60405161019b9190611efc565b60405180910390f35b6101be60048036038101906101b99190611f43565b610522565b005b6101c861063a565b6040516101d59190611f92565b60405180910390f35b6101f860048036038101906101f39190611fad565b610647565b005b610214600480360381019061020f9190611f43565b6106a7565b6040516102219190611f92565b60405180910390f35b610244600480360381019061023f9190611fad565b61074c565b005b610260600480360381019061025b9190611e8e565b61076c565b60405161026d9190611f92565b60405180910390f35b61027e6107dd565b60405161028b9190611f92565b60405180910390f35b6102ae60048036038101906102a99190611e8e565b6107e7565b6040516102bb9190611efc565b60405180910390f35b6102de60048036038101906102d99190612000565b610899565b6040516102eb9190611f92565b60405180910390f35b61030e6004803603810190610309919061202d565b610951565b005b61031861098b565b6040516103259190611e36565b60405180910390f35b61034860048036038101906103439190612099565b610a1d565b005b610364600480360381019061035f919061220e565b610a33565b005b61036e610a95565b005b61038a60048036038101906103859190611e8e565b610aaf565b6040516103979190611e36565b60405180910390f35b6103ba60048036038101906103b59190612291565b610b17565b6040516103c79190611d82565b60405180910390f35b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610443575061044282610bab565b5b9050919050565b60606000805461045990612300565b80601f016020809104026020016040519081016040528092919081815260200182805461048590612300565b80156104d25780601f106104a7576101008083540402835291602001916104d2565b820191906000526020600020905b8154815290600101906020018083116104b557829003601f168201915b5050505050905090565b60006104e782610c8d565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061052d826107e7565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561059e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610595906123a4565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105bd610cd8565b73ffffffffffffffffffffffffffffffffffffffff1614806105ec57506105eb816105e6610cd8565b610b17565b5b61062b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062290612436565b60405180910390fd5b6106358383610ce0565b505050565b6000600880549050905090565b610658610652610cd8565b82610d99565b610697576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068e906124c8565b60405180910390fd5b6106a2838383610e2e565b505050565b60006106b283610899565b82106106f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ea9061255a565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b61076783838360405180602001604052806000815250610a33565b505050565b600061077661063a565b82106107b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ae906125ec565b60405180910390fd5b600882815481106107cb576107ca61260c565b5b90600052602060002001549050919050565b6000600a54905090565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610890576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088790612687565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561090a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090190612719565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60005b828110156109865761096d8261096861063a565b611095565b610975610a95565b8061097f90612768565b9050610954565b505050565b60606001805461099a90612300565b80601f01602080910402602001604051908101604052809291908181526020018280546109c690612300565b8015610a135780601f106109e857610100808354040283529160200191610a13565b820191906000526020600020905b8154815290600101906020018083116109f657829003601f168201915b5050505050905090565b610a2f610a28610cd8565b83836110b3565b5050565b610a44610a3e610cd8565b83610d99565b610a83576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7a906124c8565b60405180910390fd5b610a8f84848484611220565b50505050565b600a6000815480929190610aa890612768565b9190505550565b6060610aba82610c8d565b6000610ac461127c565b90506000815111610ae45760405180602001604052806000815250610b0f565b80610aee84611293565b604051602001610aff9291906127ed565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610c7657507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610c865750610c85826113f4565b5b9050919050565b610c968161145e565b610cd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ccc90612687565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d53836107e7565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610da5836107e7565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610de75750610de68185610b17565b5b80610e2557508373ffffffffffffffffffffffffffffffffffffffff16610e0d846104dc565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e4e826107e7565b73ffffffffffffffffffffffffffffffffffffffff1614610ea4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9b90612883565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0b90612915565b60405180910390fd5b610f1f8383836114ca565b610f2a600082610ce0565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f7a9190612935565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fd19190612969565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110908383836115de565b505050565b6110af8282604051806020016040528060008152506115e3565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611122576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111990612a0b565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112139190611d82565b60405180910390a3505050565b61122b848484610e2e565b6112378484848461163e565b611276576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126d90612a9d565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156112db576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506113ef565b600082905060005b6000821461130d5780806112f690612768565b915050600a826113069190612aec565b91506112e3565b60008167ffffffffffffffff811115611329576113286120e3565b5b6040519080825280601f01601f19166020018201604052801561135b5781602001600182028036833780820191505090505b5090505b600085146113e8576001826113749190612935565b9150600a856113839190612b1d565b603061138f9190612969565b60f81b8183815181106113a5576113a461260c565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856113e19190612aec565b945061135f565b8093505050505b919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6114d58383836117c6565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561151857611513816117cb565b611557565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611556576115558382611814565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561159a5761159581611981565b6115d9565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146115d8576115d78282611a52565b5b5b505050565b505050565b6115ed8383611ad1565b6115fa600084848461163e565b611639576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161163090612a9d565b60405180910390fd5b505050565b600061165f8473ffffffffffffffffffffffffffffffffffffffff16611cab565b156117b9578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611688610cd8565b8786866040518563ffffffff1660e01b81526004016116aa9493929190612ba3565b6020604051808303816000875af19250505080156116e657506040513d601f19601f820116820180604052508101906116e39190612c04565b60015b611769573d8060008114611716576040519150601f19603f3d011682016040523d82523d6000602084013e61171b565b606091505b50600081511415611761576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161175890612a9d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506117be565b600190505b949350505050565b505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b6000600161182184610899565b61182b9190612935565b9050600060076000848152602001908152602001600020549050818114611910576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b600060016008805490506119959190612935565b90506000600960008481526020019081526020016000205490506000600883815481106119c5576119c461260c565b5b9060005260206000200154905080600883815481106119e7576119e661260c565b5b906000526020600020018190555081600960008381526020019081526020016000208190555060096000858152602001908152602001600020600090556008805480611a3657611a35612c31565b5b6001900381819060005260206000200160009055905550505050565b6000611a5d83610899565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b3890612cac565b60405180910390fd5b611b4a8161145e565b15611b8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8190612d18565b60405180910390fd5b611b96600083836114ca565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611be69190612969565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611ca7600083836115de565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611d1781611ce2565b8114611d2257600080fd5b50565b600081359050611d3481611d0e565b92915050565b600060208284031215611d5057611d4f611cd8565b5b6000611d5e84828501611d25565b91505092915050565b60008115159050919050565b611d7c81611d67565b82525050565b6000602082019050611d976000830184611d73565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611dd7578082015181840152602081019050611dbc565b83811115611de6576000848401525b50505050565b6000601f19601f8301169050919050565b6000611e0882611d9d565b611e128185611da8565b9350611e22818560208601611db9565b611e2b81611dec565b840191505092915050565b60006020820190508181036000830152611e508184611dfd565b905092915050565b6000819050919050565b611e6b81611e58565b8114611e7657600080fd5b50565b600081359050611e8881611e62565b92915050565b600060208284031215611ea457611ea3611cd8565b5b6000611eb284828501611e79565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611ee682611ebb565b9050919050565b611ef681611edb565b82525050565b6000602082019050611f116000830184611eed565b92915050565b611f2081611edb565b8114611f2b57600080fd5b50565b600081359050611f3d81611f17565b92915050565b60008060408385031215611f5a57611f59611cd8565b5b6000611f6885828601611f2e565b9250506020611f7985828601611e79565b9150509250929050565b611f8c81611e58565b82525050565b6000602082019050611fa76000830184611f83565b92915050565b600080600060608486031215611fc657611fc5611cd8565b5b6000611fd486828701611f2e565b9350506020611fe586828701611f2e565b9250506040611ff686828701611e79565b9150509250925092565b60006020828403121561201657612015611cd8565b5b600061202484828501611f2e565b91505092915050565b6000806040838503121561204457612043611cd8565b5b600061205285828601611e79565b925050602061206385828601611f2e565b9150509250929050565b61207681611d67565b811461208157600080fd5b50565b6000813590506120938161206d565b92915050565b600080604083850312156120b0576120af611cd8565b5b60006120be85828601611f2e565b92505060206120cf85828601612084565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61211b82611dec565b810181811067ffffffffffffffff8211171561213a576121396120e3565b5b80604052505050565b600061214d611cce565b90506121598282612112565b919050565b600067ffffffffffffffff821115612179576121786120e3565b5b61218282611dec565b9050602081019050919050565b82818337600083830152505050565b60006121b16121ac8461215e565b612143565b9050828152602081018484840111156121cd576121cc6120de565b5b6121d884828561218f565b509392505050565b600082601f8301126121f5576121f46120d9565b5b813561220584826020860161219e565b91505092915050565b6000806000806080858703121561222857612227611cd8565b5b600061223687828801611f2e565b945050602061224787828801611f2e565b935050604061225887828801611e79565b925050606085013567ffffffffffffffff81111561227957612278611cdd565b5b612285878288016121e0565b91505092959194509250565b600080604083850312156122a8576122a7611cd8565b5b60006122b685828601611f2e565b92505060206122c785828601611f2e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061231857607f821691505b6020821081141561232c5761232b6122d1565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061238e602183611da8565b915061239982612332565b604082019050919050565b600060208201905081810360008301526123bd81612381565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000612420603e83611da8565b915061242b826123c4565b604082019050919050565b6000602082019050818103600083015261244f81612413565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b60006124b2602e83611da8565b91506124bd82612456565b604082019050919050565b600060208201905081810360008301526124e1816124a5565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b6000612544602b83611da8565b915061254f826124e8565b604082019050919050565b6000602082019050818103600083015261257381612537565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b60006125d6602c83611da8565b91506125e18261257a565b604082019050919050565b60006020820190508181036000830152612605816125c9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612671601883611da8565b915061267c8261263b565b602082019050919050565b600060208201905081810360008301526126a081612664565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612703602983611da8565b915061270e826126a7565b604082019050919050565b60006020820190508181036000830152612732816126f6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061277382611e58565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156127a6576127a5612739565b5b600182019050919050565b600081905092915050565b60006127c782611d9d565b6127d181856127b1565b93506127e1818560208601611db9565b80840191505092915050565b60006127f982856127bc565b915061280582846127bc565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061286d602583611da8565b915061287882612811565b604082019050919050565b6000602082019050818103600083015261289c81612860565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006128ff602483611da8565b915061290a826128a3565b604082019050919050565b6000602082019050818103600083015261292e816128f2565b9050919050565b600061294082611e58565b915061294b83611e58565b92508282101561295e5761295d612739565b5b828203905092915050565b600061297482611e58565b915061297f83611e58565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156129b4576129b3612739565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006129f5601983611da8565b9150612a00826129bf565b602082019050919050565b60006020820190508181036000830152612a24816129e8565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612a87603283611da8565b9150612a9282612a2b565b604082019050919050565b60006020820190508181036000830152612ab681612a7a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612af782611e58565b9150612b0283611e58565b925082612b1257612b11612abd565b5b828204905092915050565b6000612b2882611e58565b9150612b3383611e58565b925082612b4357612b42612abd565b5b828206905092915050565b600081519050919050565b600082825260208201905092915050565b6000612b7582612b4e565b612b7f8185612b59565b9350612b8f818560208601611db9565b612b9881611dec565b840191505092915050565b6000608082019050612bb86000830187611eed565b612bc56020830186611eed565b612bd26040830185611f83565b8181036060830152612be48184612b6a565b905095945050505050565b600081519050612bfe81611d0e565b92915050565b600060208284031215612c1a57612c19611cd8565b5b6000612c2884828501612bef565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612c96602083611da8565b9150612ca182612c60565b602082019050919050565b60006020820190508181036000830152612cc581612c89565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612d02601c83611da8565b9150612d0d82612ccc565b602082019050919050565b60006020820190508181036000830152612d3181612cf5565b905091905056fea2646970667358221220f55561547934f0dca26350f91dd631947f3b0d29dff473139d8df698bc4c497e64736f6c634300080b0033";

type MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Mock__factory extends ContractFactory {
  constructor(...args: MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Mock> {
    return super.deploy(overrides || {}) as Promise<Mock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Mock {
    return super.attach(address) as Mock;
  }
  override connect(signer: Signer): Mock__factory {
    return super.connect(signer) as Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockInterface {
    return new utils.Interface(_abi) as MockInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Mock {
    return new Contract(address, _abi, signerOrProvider) as Mock;
  }
}
