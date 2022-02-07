/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Staking, StakingInterface } from "../Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressTokenStaking",
        type: "address",
      },
      {
        internalType: "address",
        name: "addressTokenReward",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "stakeHolderAddress",
        type: "address",
      },
    ],
    name: "calculateAvailableRewards",
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
        name: "dayCount",
        type: "uint256",
      },
    ],
    name: "calculateTps",
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
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dailyReward",
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
        name: "stakeHolderAddress",
        type: "address",
      },
    ],
    name: "getStakeHolder",
    outputs: [
      {
        internalType: "uint256",
        name: "staked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardMissed",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
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
    name: "precision",
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
    name: "rewardProduced",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenReward",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenStaking",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStaked",
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
    name: "tps",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateValues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052670de0b6b3a764000060646200001b91906200013a565b6002553480156200002b57600080fd5b5060405162001342380380620013428339818101604052810190620000519190620000f9565b81600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600381905550505062000222565b600081519050620000f38162000208565b92915050565b600080604083850312156200010d57600080fd5b60006200011d85828601620000e2565b92505060206200013085828601620000e2565b9150509250929050565b60006200014782620001cf565b91506200015483620001cf565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000190576200018f620001d9565b5b828202905092915050565b6000620001a882620001af565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b62000213816200019b565b81146200021f57600080fd5b50565b61111080620002326000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80637dc30ede11610097578063c8f33c9111610066578063c8f33c9114610250578063c964ad451461026e578063d3b5dc3b1461028c578063e07ae092146102aa576100f5565b80637dc30ede146101c8578063817b1cd2146101e65780638790c5ee14610204578063a694fc3a14610234576100f5565b80634861662a116100d35780634861662a1461013e5780636e66f6e91461016e57806374dc243a1461018c5780637a1cff77146101be576100f5565b8063033c10ac146100fa5780632e17de7814610118578063372500ab14610134575b600080fd5b6101026102c8565b60405161010f9190610ddb565b60405180910390f35b610132600480360381019061012d9190610c50565b6102ce565b005b61013c610497565b005b61015860048036038101906101539190610c50565b6105d1565b6040516101659190610ddb565b60405180910390f35b610176610629565b6040516101839190610d62565b60405180910390f35b6101a660048036038101906101a19190610bfe565b61064f565b6040516101b593929190610df6565b60405180910390f35b6101c66106dc565b005b6101d0610735565b6040516101dd9190610d62565b60405180910390f35b6101ee61075b565b6040516101fb9190610ddb565b60405180910390f35b61021e60048036038101906102199190610bfe565b610761565b60405161022b9190610ddb565b60405180910390f35b61024e60048036038101906102499190610c50565b61089a565b005b610258610a29565b6040516102659190610ddb565b60405180910390f35b610276610a2f565b6040516102839190610ddb565b60405180910390f35b610294610a35565b6040516102a19190610ddb565b60405180910390f35b6102b2610a41565b6040516102bf9190610ddb565b60405180910390f35b60045481565b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060000154821115610358576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034f90610dbb565b60405180910390fd5b6103606106dc565b806002015481600001546004546103779190610ed0565b6103819190610f2a565b8160010160008282546103949190610e49565b92505081905550818160000160008282546103af9190610f2a565b925050819055506103c38160000154610a47565b8160020181905550816000808282546103dc9190610f2a565b92505081905550600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401610440929190610d39565b602060405180830381600087803b15801561045a57600080fd5b505af115801561046e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104929190610c27565b505050565b61049f6106dc565b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060006104ed33610761565b9050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161054c929190610d39565b602060405180830381600087803b15801561056657600080fd5b505af115801561057a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059e9190610c27565b50670de0b6b3a7640000816105b39190610ed0565b8260020160008282546105c69190610e49565b925050819055505050565b60008060005414156105e65760009050610624565b81600054670de0b6b3a76400006002546106009190610ed0565b61060a9190610e9f565b6106149190610ed0565b6004546106219190610e49565b90505b919050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600080600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820154815250509050806000015181602001518260400151935093509350509193909250565b600062015180600354426106f09190610f2a565b6106fa9190610e9f565b9050620151808161070b9190610ed0565b6003600082825461071c9190610e49565b9250508190555061072c816105d1565b60048190555050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60005481565b600080600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600062015180600354426107b99190610f2a565b6107c39190610e9f565b90506107ce81610a5e565b600081600054670de0b6b3a76400006002546107ea9190610ed0565b6107f49190610e9f565b6107fe9190610ed0565b60045461080b9190610e49565b905061084f6040518060400160405280601681526020017f4f6c645470733a2025732c204e65775470733a2025730000000000000000000081525060045483610af7565b670de0b6b3a7640000836001015484600201548560000154846108729190610ed0565b61087c9190610f2a565b6108869190610e49565b6108909190610e9f565b9350505050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b81526004016108f993929190610d02565b602060405180830381600087803b15801561091357600080fd5b505af1158015610927573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094b9190610c27565b506109546106dc565b806000808282546109659190610e49565b9250508190555061097581610a47565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008282546109c69190610e49565b9250508190555080600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610a1f9190610e49565b9250508190555050565b60035481565b60025481565b670de0b6b3a764000081565b60015481565b600060045482610a579190610ed0565b9050919050565b610af481604051602401610a729190610ddb565b6040516020818303038152906040527ff5b1bba9000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b96565b50565b610b91838383604051602401610b0f93929190610d7d565b6040516020818303038152906040527f969cdd03000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b96565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081359050610bce81611095565b92915050565b600081519050610be3816110ac565b92915050565b600081359050610bf8816110c3565b92915050565b600060208284031215610c1057600080fd5b6000610c1e84828501610bbf565b91505092915050565b600060208284031215610c3957600080fd5b6000610c4784828501610bd4565b91505092915050565b600060208284031215610c6257600080fd5b6000610c7084828501610be9565b91505092915050565b610c8281610f5e565b82525050565b610c9181610fa6565b82525050565b6000610ca282610e2d565b610cac8185610e38565b9350610cbc818560208601610fca565b610cc58161105b565b840191505092915050565b6000610cdd602083610e38565b9150610ce88261106c565b602082019050919050565b610cfc81610f9c565b82525050565b6000606082019050610d176000830186610c79565b610d246020830185610c79565b610d316040830184610cf3565b949350505050565b6000604082019050610d4e6000830185610c79565b610d5b6020830184610cf3565b9392505050565b6000602082019050610d776000830184610c88565b92915050565b60006060820190508181036000830152610d978186610c97565b9050610da66020830185610cf3565b610db36040830184610cf3565b949350505050565b60006020820190508181036000830152610dd481610cd0565b9050919050565b6000602082019050610df06000830184610cf3565b92915050565b6000606082019050610e0b6000830186610cf3565b610e186020830185610cf3565b610e256040830184610cf3565b949350505050565b600081519050919050565b600082825260208201905092915050565b6000610e5482610f9c565b9150610e5f83610f9c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e9457610e93610ffd565b5b828201905092915050565b6000610eaa82610f9c565b9150610eb583610f9c565b925082610ec557610ec461102c565b5b828204905092915050565b6000610edb82610f9c565b9150610ee683610f9c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610f1f57610f1e610ffd565b5b828202905092915050565b6000610f3582610f9c565b9150610f4083610f9c565b925082821015610f5357610f52610ffd565b5b828203905092915050565b6000610f6982610f7c565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610fb182610fb8565b9050919050565b6000610fc382610f7c565b9050919050565b60005b83811015610fe8578082015181840152602081019050610fcd565b83811115610ff7576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f416d6f756e74206578636565647320746865207374616b656420616d6f756e74600082015250565b61109e81610f5e565b81146110a957600080fd5b50565b6110b581610f70565b81146110c057600080fd5b50565b6110cc81610f9c565b81146110d757600080fd5b5056fea26469706673582212203977815a12178a78baf70bf7162b372d1368dc329c37c73a3d587fbc3d7dc15064736f6c63430008040033";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Staking";
  }

  deploy(
    addressTokenStaking: string,
    addressTokenReward: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(
      addressTokenStaking,
      addressTokenReward,
      overrides || {}
    ) as Promise<Staking>;
  }
  getDeployTransaction(
    addressTokenStaking: string,
    addressTokenReward: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressTokenStaking,
      addressTokenReward,
      overrides || {}
    );
  }
  attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }
  static readonly contractName: "Staking";
  public readonly contractName: "Staking";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
