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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "stakeHolder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "stakeHolder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "stakeHolder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Unstake",
    type: "event",
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
  "0x6080604052670de0b6b3a764000060646200001b91906200013a565b6002553480156200002b57600080fd5b506040516200188f3803806200188f8339818101604052810190620000519190620000f9565b81600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600381905550505062000222565b600081519050620000f38162000208565b92915050565b600080604083850312156200010d57600080fd5b60006200011d85828601620000e2565b92505060206200013085828601620000e2565b9150509250929050565b60006200014782620001cf565b91506200015483620001cf565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000190576200018f620001d9565b5b828202905092915050565b6000620001a882620001af565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b62000213816200019b565b81146200021f57600080fd5b50565b61165d80620002326000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80637dc30ede11610097578063c8f33c9111610066578063c8f33c9114610250578063c964ad451461026e578063d3b5dc3b1461028c578063e07ae092146102aa576100f5565b80637dc30ede146101c8578063817b1cd2146101e65780638790c5ee14610204578063a694fc3a14610234576100f5565b80634861662a116100d35780634861662a1461013e5780636e66f6e91461016e57806374dc243a1461018c5780637a1cff77146101be576100f5565b8063033c10ac146100fa5780632e17de7814610118578063372500ab14610134575b600080fd5b6101026102c8565b60405161010f919061124b565b60405180910390f35b610132600480360381019061012d9190610f8d565b6102ce565b005b61013c610482565b005b61015860048036038101906101539190610f8d565b6105a7565b604051610165919061124b565b60405180910390f35b6101766105ff565b6040516101839190611150565b60405180910390f35b6101a660048036038101906101a19190610f3b565b610625565b6040516101b593929190611266565b60405180910390f35b6101c66106b2565b005b6101d061070b565b6040516101dd9190611150565b60405180910390f35b6101ee610731565b6040516101fb919061124b565b60405180910390f35b61021e60048036038101906102199190610f3b565b610737565b60405161022b919061124b565b60405180910390f35b61024e60048036038101906102499190610f8d565b610870565b005b6102586109ea565b604051610265919061124b565b60405180910390f35b6102766109f0565b604051610283919061124b565b60405180910390f35b6102946109f6565b6040516102a1919061124b565b60405180910390f35b6102b2610a02565b6040516102bf919061124b565b60405180910390f35b60045481565b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060000154821115610358576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034f906111cb565b60405180910390fd5b6103606106b2565b806002015481600001546004546103779190611356565b61038191906113b0565b81600101600082825461039491906112cf565b92505081905550818160000160008282546103af91906113b0565b925050819055506103c38160000154610a08565b8160020181905550816000808282546103dc91906113b0565b925050819055506104303383600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610a1f9092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff167f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd83604051610476919061124b565b60405180910390a25050565b61048a6106b2565b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060006104d833610737565b90506105273382600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610a1f9092919063ffffffff16565b670de0b6b3a76400008161053b9190611356565b82600201600082825461054e91906112cf565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d48260405161059b919061124b565b60405180910390a25050565b60008060005414156105bc57600090506105fa565b81600054670de0b6b3a76400006002546105d69190611356565b6105e09190611325565b6105ea9190611356565b6004546105f791906112cf565b90505b919050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600080600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820154815250509050806000015181602001518260400151935093509350509193909250565b600062015180600354426106c691906113b0565b6106d09190611325565b905062015180816106e19190611356565b600360008282546106f291906112cf565b92505081905550610702816105a7565b60048190555050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60005481565b600080600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000620151806003544261078f91906113b0565b6107999190611325565b90506107a481610aa5565b600081600054670de0b6b3a76400006002546107c09190611356565b6107ca9190611325565b6107d49190611356565b6004546107e191906112cf565b90506108256040518060400160405280601681526020017f4f6c645470733a2025732c204e65775470733a2025730000000000000000000081525060045483610b3e565b670de0b6b3a7640000836001015484600201548560000154846108489190611356565b61085291906113b0565b61085c91906112cf565b6108669190611325565b9350505050919050565b6108bf333083600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610bdd909392919063ffffffff16565b6108c76106b2565b806000808282546108d891906112cf565b925050819055506108e881610a08565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201600082825461093991906112cf565b9250508190555080600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825461099291906112cf565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a826040516109df919061124b565b60405180910390a250565b60035481565b60025481565b670de0b6b3a764000081565b60015481565b600060045482610a189190611356565b9050919050565b610aa08363a9059cbb60e01b8484604051602401610a3e929190611127565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610c66565b505050565b610b3b81604051602401610ab9919061124b565b6040516020818303038152906040527ff5b1bba9000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d2d565b50565b610bd8838383604051602401610b569392919061118d565b6040516020818303038152906040527f969cdd03000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d2d565b505050565b610c60846323b872dd60e01b858585604051602401610bfe939291906110f0565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610c66565b50505050565b6000610cc8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610d569092919063ffffffff16565b9050600081511115610d285780806020019051810190610ce89190610f64565b610d27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1e9061122b565b60405180910390fd5b5b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6060610d658484600085610d6e565b90509392505050565b606082471015610db3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610daa906111eb565b60405180910390fd5b610dbc85610e82565b610dfb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df29061120b565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610e2491906110d9565b60006040518083038185875af1925050503d8060008114610e61576040519150601f19603f3d011682016040523d82523d6000602084013e610e66565b606091505b5091509150610e76828286610e95565b92505050949350505050565b600080823b905060008111915050919050565b60608315610ea557829050610ef5565b600083511115610eb85782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eec919061116b565b60405180910390fd5b9392505050565b600081359050610f0b816115e2565b92915050565b600081519050610f20816115f9565b92915050565b600081359050610f3581611610565b92915050565b600060208284031215610f4d57600080fd5b6000610f5b84828501610efc565b91505092915050565b600060208284031215610f7657600080fd5b6000610f8484828501610f11565b91505092915050565b600060208284031215610f9f57600080fd5b6000610fad84828501610f26565b91505092915050565b610fbf816113e4565b82525050565b6000610fd08261129d565b610fda81856112b3565b9350610fea818560208601611450565b80840191505092915050565b610fff8161142c565b82525050565b6000611010826112a8565b61101a81856112be565b935061102a818560208601611450565b611033816114e1565b840191505092915050565b600061104b6020836112be565b9150611056826114f2565b602082019050919050565b600061106e6026836112be565b91506110798261151b565b604082019050919050565b6000611091601d836112be565b915061109c8261156a565b602082019050919050565b60006110b4602a836112be565b91506110bf82611593565b604082019050919050565b6110d381611422565b82525050565b60006110e58284610fc5565b915081905092915050565b60006060820190506111056000830186610fb6565b6111126020830185610fb6565b61111f60408301846110ca565b949350505050565b600060408201905061113c6000830185610fb6565b61114960208301846110ca565b9392505050565b60006020820190506111656000830184610ff6565b92915050565b600060208201905081810360008301526111858184611005565b905092915050565b600060608201905081810360008301526111a78186611005565b90506111b660208301856110ca565b6111c360408301846110ca565b949350505050565b600060208201905081810360008301526111e48161103e565b9050919050565b6000602082019050818103600083015261120481611061565b9050919050565b6000602082019050818103600083015261122481611084565b9050919050565b60006020820190508181036000830152611244816110a7565b9050919050565b600060208201905061126060008301846110ca565b92915050565b600060608201905061127b60008301866110ca565b61128860208301856110ca565b61129560408301846110ca565b949350505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006112da82611422565b91506112e583611422565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561131a57611319611483565b5b828201905092915050565b600061133082611422565b915061133b83611422565b92508261134b5761134a6114b2565b5b828204905092915050565b600061136182611422565b915061136c83611422565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156113a5576113a4611483565b5b828202905092915050565b60006113bb82611422565b91506113c683611422565b9250828210156113d9576113d8611483565b5b828203905092915050565b60006113ef82611402565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006114378261143e565b9050919050565b600061144982611402565b9050919050565b60005b8381101561146e578082015181840152602081019050611453565b8381111561147d576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f416d6f756e74206578636565647320746865207374616b656420616d6f756e74600082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6115eb816113e4565b81146115f657600080fd5b50565b611602816113f6565b811461160d57600080fd5b50565b61161981611422565b811461162457600080fd5b5056fea2646970667358221220f2da5a304fd54cb1cb46532867a2bfbfb0331fe36bd7d193a90af998537c055c64736f6c63430008040033";

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
