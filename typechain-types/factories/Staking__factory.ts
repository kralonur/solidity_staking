/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
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
      {
        internalType: "uint256",
        name: "_dailyReward",
        type: "uint256",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
        components: [
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
        internalType: "struct Staking.StakeHolder",
        name: "",
        type: "tuple",
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
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_dailyReward",
        type: "uint256",
      },
    ],
    name: "setParameters",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b5060405162002c7938038062002c798339818101604052810190620000379190620003c1565b620000576200004b620002c460201b60201c565b620002cc60201b60201c565b6200008b7f4c6b793b6df88c77130edc1346e1f883ec7f6e463b071bb1bc1e3543e333d86460001b6200039060201b60201c565b620000bf7f88d780e795dd8d9aec6018fc5700b4c21edb7f0273d8f92e86263af56bf46f1e60001b6200039060201b60201c565b620000f37f6fa58759ee1b1eea6660200b0ce9f3d33336372c52793b2470eb2cce7309621e60001b6200039060201b60201c565b82600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001687fab263803cd20c591cde79d6c4396a51eacef3c7064eaad925efb54cc174aa1c360001b6200039060201b60201c565b6200019c7f9cd68490227950d12aa0cb75097ba483e3d9b8047f52e1534742ec640c4a6dfd60001b6200039060201b60201c565b81600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620002117fa5459487e6912bcdc210ea8fdeab2fd3f707e277596bf98a835ae960cb7bb14a60001b6200039060201b60201c565b620002457f15b7bdb48342f443db0664d5416350489b03f6d3252bf907462c8e5d6840281a60001b6200039060201b60201c565b80600381905550620002807f76e34c448d6f144e711e1eb348ab2085d2f0151f6568b7d3afa59c18318af0bb60001b6200039060201b60201c565b620002b47f441e010e3c2e6ceaeaf50261439772445653913084ad1c5df6c7d58deeef4cd860001b6200039060201b60201c565b4260048190555050505062000489565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b50565b600081519050620003a48162000455565b92915050565b600081519050620003bb816200046f565b92915050565b600080600060608486031215620003d757600080fd5b6000620003e78682870162000393565b9350506020620003fa8682870162000393565b92505060406200040d86828701620003aa565b9150509250925092565b600062000424826200042b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b620004608162000417565b81146200046c57600080fd5b50565b6200047a816200044b565b81146200048657600080fd5b50565b6127e080620004996000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063817b1cd2116100ad578063c964ad4511610071578063c964ad45146102c0578063d3b5dc3b146102de578063e07ae092146102fc578063e93b05401461031a578063f2fde38b1461033657610121565b8063817b1cd21461021a5780638790c5ee146102385780638da5cb5b14610268578063a694fc3a14610286578063c8f33c91146102a257610121565b80636e66f6e9116100f45780636e66f6e91461019a578063715018a6146101b857806374dc243a146101c25780637a1cff77146101f25780637dc30ede146101fc57610121565b8063033c10ac146101265780632e17de7814610144578063372500ab146101605780634861662a1461016a575b600080fd5b61012e610352565b60405161013b919061238d565b60405180910390f35b61015e60048036038101906101599190612000565b610358565b005b6101686108a9565b005b610184600480360381019061017f9190612000565b610c0a565b604051610191919061238d565b60405180910390f35b6101a2610dc3565b6040516101af9190612275565b60405180910390f35b6101c0610de9565b005b6101dc60048036038101906101d79190611fae565b610e71565b6040516101e99190612372565b60405180910390f35b6101fa611034565b005b6102046111c1565b6040516102119190612275565b60405180910390f35b6102226111e7565b60405161022f919061238d565b60405180910390f35b610252600480360381019061024d9190611fae565b6111ed565b60405161025f919061238d565b60405180910390f35b610270611468565b60405161027d91906121fa565b60405180910390f35b6102a0600480360381019061029b9190612000565b611491565b005b6102aa611848565b6040516102b7919061238d565b60405180910390f35b6102c861184e565b6040516102d5919061238d565b60405180910390f35b6102e6611854565b6040516102f3919061238d565b60405180910390f35b610304611860565b604051610311919061238d565b60405180910390f35b610334600480360381019061032f9190612000565b611866565b005b610350600480360381019061034b9190611fae565b611970565b005b60055481565b6103847f1f1f740e768d8113d31f5f2ab1d69858c945a04493af267a86e011b5ad53061960001b611a68565b6103b07f4a9f4854d60a32eb5d02ca87f6a72269a3592301c0de78a54ef826ef80c17e9560001b611a68565b6103dc7f0544614365a471df4bff1458f95ac10d21c10f2b5b9bd62e2275d26e21f8b5fb60001b611a68565b6000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905061044b7fc2b9fe98e94150eea5a4eb9dc72b1e1b62195a86fda403c6cbda40775ee67ea960001b611a68565b6104777fc7c3fbc6dd8cc1cd46af639400884108388967f82a91de8c277f419c340f5df760001b611a68565b6104a37fc936d0e598a8b1b7fb183880773d36318a2e8b9ceab722a06efeb59504e2ab8960001b611a68565b80600001548211156104ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e1906122d2565b60405180910390fd5b6105167f5ee5a4bda254aa6ac4d183a517a8f3eb160c7f753432b322ba38a0d6a8d4152260001b611a68565b6105427f8fc7cf77a878d2188266a30a274957498115f0e12578d0cb884fba201c8f61fd60001b611a68565b61056e7f72501345fc45c5362f25cf99fe589595528c8935be8d6c99248e8a7275b29f1760001b611a68565b610576611034565b6105a27f353d8eb0b2e3081b259b31c21ad391c5a777e437bcec14f8b6b29b5050f6ea2f60001b611a68565b6105ce7fbd8705e428d0e0ba7e26be3739ecce161989a81b9b255c4934c00cdb881a064760001b611a68565b806002015481600001546005546105e59190612461565b6105ef91906124bb565b81600101600082825461060291906123da565b925050819055506106357f7ed28a5abaaaaaee9516b94b4a29424416dc1fd6692283fd1e4a51480119a39360001b611a68565b6106617fc398146da64dc82ae87306a1313f43541d724f94b3d02b4cd6c26dce97c8eb3360001b611a68565b8181600001600082825461067591906124bb565b925050819055506106a87fb21be95ee23170179737a57fd5037852caca4f535614389ffc3c3a17afe7729e60001b611a68565b6106d47f9b147013c6ae2c4e9c8522515c0c96cc2871c6e8db003215a2788c62655908d560001b611a68565b6106e18160000154611a6b565b81600201819055506107157f0abbf99f89005c600418a4b895a56a7ae2a2673be9b4aef234be2b483ebd46aa60001b611a68565b6107417f6683c5b1483eefaef56c796adff197696e21ac3fecc4683acdc78ffa8c66ce8260001b611a68565b816001600082825461075391906124bb565b925050819055506107867f59f0f319db7afe5313165cf5e29b32a4bc570daaf2d900b8946cd154abee65d560001b611a68565b6107b27f41844902efaecf5047dcf05e950beddb068257045549188f71bc56ab6f7fc92a60001b611a68565b6107ff3383600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611b069092919063ffffffff16565b61082b7f85d926758e4e08e0f7f84328801bf346044227f4d3e41ec14b37f8e9218f7a0e60001b611a68565b6108577f87177cef0acecf0d9dbec211c678db1a880c0925c02b3f3299486f316343479660001b611a68565b3373ffffffffffffffffffffffffffffffffffffffff167f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd8360405161089d919061238d565b60405180910390a25050565b6108d57f8ce667b76d49e87678fb899b44377436eb21acc8203977732cd66c156233872860001b611a68565b6109017f5b9120c00ccb58839c60988378fd07b612b0555aed8ddc1dfe4b41b048e1167760001b611a68565b61092d7f4863e7c6cac31680b205ad3e683a70ff18e03b2e892e2a684d90ca53aec2408060001b611a68565b610935611034565b6109617fb839e91f8c11b3aee4060642f8821c8ab69704e1d997035dd02668f8a3c0b14b60001b611a68565b61098d7fcb47f0d6f2b53629f61374fb63defab7b0e87f6d09326e2ae34c1e2901c1199d60001b611a68565b6000600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506109fc7f6887434dd8224c9316332d45f78f8e2dffd9ef01713909ac4971f7ff93172fdc60001b611a68565b610a287f323f9b2f3f043d0cfd99c945c9d705b926c7c83dca298dba164f64f8d1a3a0f860001b611a68565b6000610a33336111ed565b9050610a617fd73dc8909d975f803cf6d16510a4d580119370062501a4761ebe4b00f74266bf60001b611a68565b610a8d7f08313d93b86dca7c155e5ec242ffb5fedd32f30a62229298a9912ca9cb2b611860001b611a68565b610ada3382600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611b069092919063ffffffff16565b610b067fbb2e89da28f310a68469d19985dbb760b31bb79a3e01b7409446618c1c35692c60001b611a68565b610b327f113a117fc9a5e8b63d9781f3f3b2e40b8648cb871db4066e50987617b90bc55960001b611a68565b670de0b6b3a764000081610b469190612461565b826002016000828254610b5991906123da565b92505081905550610b8c7f98478d8ef83ebb46acd0792702de50d4cbb5f077f8049849786a575572a5fc3460001b611a68565b610bb87f52da1064afc4e4a22b3196b00677d7a5a5141a036e7d26bddbbffbc1f309bb7360001b611a68565b3373ffffffffffffffffffffffffffffffffffffffff167f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d482604051610bfe919061238d565b60405180910390a25050565b6000610c387f70af24e810b35449fe0cbd00db3d135a7fc8f90319214cd15fe355179468965660001b611a68565b610c647f4bec895ef09d9c29285789e36a7527568abfdaea54032072d84e912b91edb7df60001b611a68565b610c907fa801a6b64fb86cfe35509eaff1e76c78e26c9cfb15672d1583a1bab9c8a1914d60001b611a68565b60006001541415610cfc57610cc77f344758980dfd3598195a71770d658b1228e310b6071e6af54185b0d3d3d2917c60001b611a68565b610cf37fc021a3d6bc18ba9ea02adf23b1a184479eb47bd41f5bc95342018953b39a6d3c60001b611a68565b60009050610dbe565b610d287feb4c18ac71e3c4cead478d7ded93bd277790356596bbdd51772d93c245ef83a760001b611a68565b610d547fddd097da70863b2803dfdffae1137ca2716fd821106ba0d4d6926a05096dec5a60001b611a68565b610d807fd82795fa7c4a3c65dd05f5350bc28fca7d4bea3f12564e021be809ebeb98d19360001b611a68565b81600154670de0b6b3a7640000600354610d9a9190612461565b610da49190612430565b610dae9190612461565b600554610dbb91906123da565b90505b919050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610df1611b8c565b73ffffffffffffffffffffffffffffffffffffffff16610e0f611468565b73ffffffffffffffffffffffffffffffffffffffff1614610e65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5c90612312565b60405180910390fd5b610e6f6000611b94565b565b610e79611f4e565b610ea57fbe28e148a3afd72c096e4c9c15a924613a6eb3f839c98132d196cd6cfecc856d60001b611a68565b610ed17f8b8d68e1a8be0816ea725f0fa79bec6e781761ccc7fa1e40de5a63497c2203b760001b611a68565b610efd7feeaa920e2d16ac0bb8884acd803733af2cd946f6b3342092af99885077e077cf60001b611a68565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820154815250509050610f957f80eef9bc25afa0024e4da648fbe7c0bcdbde3c3d98b57b57df5fe260a5bf4c4e60001b611a68565b610fc17f9df7e7169b154e1b3fa715e6b182493c5ba3b25100731b4eaa0b8117ffb6d9e560001b611a68565b610fca836111ed565b816020018181525050610fff7f99d00d5247467eeac6cc2bf97bd80c8ad48f2b36c006805caa62b29e3997a87860001b611a68565b61102b7f31fea369c4fbd401ec60e4825712c45566e61abbeb36b8777b2861552665699b60001b611a68565b80915050919050565b6110607fba0a3fc76a5e6717ea375721cc88865eb258f453ca6b0db37479a6e3b073ad1460001b611a68565b61108c7f7ae39f94546e137e17ea2a5bb2f01ebd2ebd4b17310dfe43aed6598777c86f9d60001b611a68565b6110b87f50b15b415079c0ef08b62a662516e1d24864b11d607748ae9850c5aa6b6161c260001b611a68565b600062015180600454426110cc91906124bb565b6110d69190612430565b90506111047f7a4de458633db90b15e17dd7b8f800c5526fe2e99fd2e31215ef952a2c2bc74660001b611a68565b6111307fa876de96473e15fa2f8378a0378eb7ddd766c01a482f511bd3f5efe4afe2df2c60001b611a68565b620151808161113f9190612461565b6004600082825461115091906123da565b925050819055506111837fea95b617b40fe75f007ea1b9596bd601ecd056bcba1a18eb5460eeceef5b0f5960001b611a68565b6111af7fc1420b13f75fe3925485face62bbf0bb782227ecf4a2051c515da1dc009c4f4f60001b611a68565b6111b881610c0a565b60058190555050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b600061121b7fc4a0f2c043049107926b338f314d3989a1335325f8e2adca48bf05989166a7a860001b611a68565b6112477fe554650e03eb5bb79bf16ae4dc6b9bf5dd5f7c6e1316af155a36f702aeb73f2a60001b611a68565b6112737f33041d4ba61bf77372429db168c5ae4b6fcd1d26df49c83b5b0ae377da8dd5b060001b611a68565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506112e27f9bc3cfe88fca5aa83d730abde5f84ed1ae38678e7dc736e602d397794b057d6760001b611a68565b61130e7f900c0cab32929135e3007a057b5a3aadaaa2b5762fbefdf115eada8473fbd98660001b611a68565b6000620151806004544261132291906124bb565b61132c9190612430565b905061135a7f80588ff7525fcaae50447916d0698d697df49a843d2e88599cbfb3b813c8c1b560001b611a68565b6113867f964abfd6978c5af84326444d04d33b26bf708fee23fca066842136e2eef31c0360001b611a68565b600081600154670de0b6b3a76400006003546113a29190612461565b6113ac9190612430565b6113b69190612461565b6005546113c391906123da565b90506113f17f9643466c060f6c62cff65a4fd04c55d1978481ddf08636f9b4405d44d533873e60001b611a68565b61141d7f7612d1bfd956a8f03bc810a390ddfb408c7d9310d7370dc1bad554511161545560001b611a68565b670de0b6b3a7640000836001015484600201548560000154846114409190612461565b61144a91906124bb565b61145491906123da565b61145e9190612430565b9350505050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6114bd7fa977c646bd2a80b65887afe661d3b8797b4569077bf98ccfe9b8a886e8b503bd60001b611a68565b6114e97ffa0104244c2d44156be0f8368aadac4dac3c9b2955b9c585eec04d333ced630160001b611a68565b6115157f6df9a8c636730dbc1e1496e319d1bbe764ede793f5031c7dabd2cace87810fd960001b611a68565b611564333083600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611c58909392919063ffffffff16565b6115907f25784820855685ad182014e4502d5fbe547ac462b336f4f8aae1de9a6d5caf2860001b611a68565b6115bc7f8b13ab56efd846f94af7a1b2865d98f82e55151123cab16fbe67e61a5fc8258c60001b611a68565b6115c4611034565b6115f07fcd54d5151cb4dfa6eb6795bc5a0c270cdddb8ea390fd3aeab18ace78847f844d60001b611a68565b61161c7f720dc7d5766f201ed90fcdaa94921e938f69f6a3017928313c20e3ff20fe0ecc60001b611a68565b806001600082825461162e91906123da565b925050819055506116617ffb223c0c8c0a20f7545d069d2cf2224f23cd0492e7577181f48c20bb7770961360001b611a68565b61168d7fedfe14bdc170d2494d63698b21003218bfd0cb3bdf685c5232c5334ae126b2f560001b611a68565b61169681611a6b565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008282546116e791906123da565b9250508190555061171a7ff232c352c9866ddd22e7b0f2f42c15bc422c820064f568a425d4fc7309c766a960001b611a68565b6117467fa4e87031542fae70db2567712a3767545c58d55fd8b8c23ef6fe7e1df956cb5260001b611a68565b80600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825461179891906123da565b925050819055506117cb7fd651a363508cec02ce70fe3dcfea961507e555ded825c755f6c5d5a7e80a391660001b611a68565b6117f77f01999061f8f73960d9a5e5c1a0bfa231fc4be015d88a2e64f2a1518578100d4160001b611a68565b3373ffffffffffffffffffffffffffffffffffffffff167febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a8260405161183d919061238d565b60405180910390a250565b60045481565b60035481565b670de0b6b3a764000081565b60025481565b61186e611b8c565b73ffffffffffffffffffffffffffffffffffffffff1661188c611468565b73ffffffffffffffffffffffffffffffffffffffff16146118e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118d990612312565b60405180910390fd5b61190e7f39e4e294e33dd0577de9235e519a36dca569f73c1d6cfd7af6b2e7bfaeb51d5960001b611a68565b61193a7fa2bb96f266529f244884fd2f9bd0f7c26fd6738c0f5dbc0ccaebb225c247f19060001b611a68565b6119667ffb44ccca68ec17a33eef43dea8cfd336099c7bd25c8dfb7e06a88a372151770f60001b611a68565b8060038190555050565b611978611b8c565b73ffffffffffffffffffffffffffffffffffffffff16611996611468565b73ffffffffffffffffffffffffffffffffffffffff16146119ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119e390612312565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611a5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a53906122b2565b60405180910390fd5b611a6581611b94565b50565b50565b6000611a997f3c4156d19bfdca333b489da2eb4e370a84c224b54a3bed9fbe8b61404644fd8060001b611a68565b611ac57ff7f96d6e0349155d09a8dab6c03684e3725fb53fc9c76eb348df54a8142cfa0160001b611a68565b611af17feb891607b310909cf8dff4aa13d32e72fd9bdeffd0f4a99ff962e5991955edd560001b611a68565b60055482611aff9190612461565b9050919050565b611b878363a9059cbb60e01b8484604051602401611b2592919061224c565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611ce1565b505050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611cdb846323b872dd60e01b858585604051602401611c7993929190612215565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611ce1565b50505050565b6000611d43826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611da89092919063ffffffff16565b9050600081511115611da35780806020019051810190611d639190611fd7565b611da2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d9990612352565b60405180910390fd5b5b505050565b6060611db78484600085611dc0565b90509392505050565b606082471015611e05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dfc906122f2565b60405180910390fd5b611e0e85611ed4565b611e4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e4490612332565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e7691906121e3565b60006040518083038185875af1925050503d8060008114611eb3576040519150601f19603f3d011682016040523d82523d6000602084013e611eb8565b606091505b5091509150611ec8828286611ee7565b92505050949350505050565b600080823b905060008111915050919050565b60608315611ef757829050611f47565b600083511115611f0a5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f3e9190612290565b60405180910390fd5b9392505050565b60405180606001604052806000815260200160008152602001600081525090565b600081359050611f7e81612765565b92915050565b600081519050611f938161277c565b92915050565b600081359050611fa881612793565b92915050565b600060208284031215611fc057600080fd5b6000611fce84828501611f6f565b91505092915050565b600060208284031215611fe957600080fd5b6000611ff784828501611f84565b91505092915050565b60006020828403121561201257600080fd5b600061202084828501611f99565b91505092915050565b612032816124ef565b82525050565b6000612043826123a8565b61204d81856123be565b935061205d81856020860161255b565b80840191505092915050565b61207281612537565b82525050565b6000612083826123b3565b61208d81856123c9565b935061209d81856020860161255b565b6120a6816125ec565b840191505092915050565b60006120be6026836123c9565b91506120c9826125fd565b604082019050919050565b60006120e16020836123c9565b91506120ec8261264c565b602082019050919050565b60006121046026836123c9565b915061210f82612675565b604082019050919050565b60006121276020836123c9565b9150612132826126c4565b602082019050919050565b600061214a601d836123c9565b9150612155826126ed565b602082019050919050565b600061216d602a836123c9565b915061217882612716565b604082019050919050565b60608201600082015161219960008501826121c5565b5060208201516121ac60208501826121c5565b5060408201516121bf60408501826121c5565b50505050565b6121ce8161252d565b82525050565b6121dd8161252d565b82525050565b60006121ef8284612038565b915081905092915050565b600060208201905061220f6000830184612029565b92915050565b600060608201905061222a6000830186612029565b6122376020830185612029565b61224460408301846121d4565b949350505050565b60006040820190506122616000830185612029565b61226e60208301846121d4565b9392505050565b600060208201905061228a6000830184612069565b92915050565b600060208201905081810360008301526122aa8184612078565b905092915050565b600060208201905081810360008301526122cb816120b1565b9050919050565b600060208201905081810360008301526122eb816120d4565b9050919050565b6000602082019050818103600083015261230b816120f7565b9050919050565b6000602082019050818103600083015261232b8161211a565b9050919050565b6000602082019050818103600083015261234b8161213d565b9050919050565b6000602082019050818103600083015261236b81612160565b9050919050565b60006060820190506123876000830184612183565b92915050565b60006020820190506123a260008301846121d4565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006123e58261252d565b91506123f08361252d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156124255761242461258e565b5b828201905092915050565b600061243b8261252d565b91506124468361252d565b925082612456576124556125bd565b5b828204905092915050565b600061246c8261252d565b91506124778361252d565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156124b0576124af61258e565b5b828202905092915050565b60006124c68261252d565b91506124d18361252d565b9250828210156124e4576124e361258e565b5b828203905092915050565b60006124fa8261250d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061254282612549565b9050919050565b60006125548261250d565b9050919050565b60005b8381101561257957808201518184015260208101905061255e565b83811115612588576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f416d6f756e74206578636565647320746865207374616b656420616d6f756e74600082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b61276e816124ef565b811461277957600080fd5b50565b61278581612501565b811461279057600080fd5b50565b61279c8161252d565b81146127a757600080fd5b5056fea2646970667358221220f0d291233967d898711b34a3dd80b89a617a4a426d0dcf7598f9f2ed5c38e72764736f6c63430008040033";

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
    _dailyReward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(
      addressTokenStaking,
      addressTokenReward,
      _dailyReward,
      overrides || {}
    ) as Promise<Staking>;
  }
  getDeployTransaction(
    addressTokenStaking: string,
    addressTokenReward: string,
    _dailyReward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressTokenStaking,
      addressTokenReward,
      _dailyReward,
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
