/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ParserDelegate } from "./ParserDelegate";

export class ParserDelegateFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ParserDelegate> {
    return super.deploy(overrides) as Promise<ParserDelegate>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ParserDelegate {
    return super.attach(address) as ParserDelegate;
  }
  connect(signer: Signer): ParserDelegateFactory {
    return super.connect(signer) as ParserDelegateFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ParserDelegate {
    return new Contract(address, _abi, signerOrProvider) as ParserDelegate;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "_rawTx",
        type: "bytes"
      }
    ],
    name: "extractInputLength",
    outputs: [
      {
        internalType: "uint256",
        name: "numInputs",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lenInputs",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "_rawTx",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "extractOutputAtIndex",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "_rawTx",
        type: "bytes"
      }
    ],
    name: "extractOutputLength",
    outputs: [
      {
        internalType: "uint256",
        name: "numOutputs",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lenOutputs",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "_rawTx",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "extractOutputScriptAtIndex",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "_rawTx",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "extractOutputValueAtIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e9a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633347750d1461005c57806345e11599146101325780636bc233511461027057806374348058146103495780638bd3277a1461041f575b600080fd5b6101156004803603602081101561007257600080fd5b810190808035906020019064010000000081111561008f57600080fd5b8201836020820111156100a157600080fd5b803590602001918460018302840111640100000000831117156100c357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061055d565b604051808381526020018281526020019250505060405180910390f35b6101f56004803603604081101561014857600080fd5b810190808035906020019064010000000081111561016557600080fd5b82018360208201111561017757600080fd5b8035906020019184600183028401116401000000008311171561019957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050610572565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561023557808201518184015260208101905061021a565b50505050905090810190601f1680156102625780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103336004803603604081101561028657600080fd5b81019080803590602001906401000000008111156102a357600080fd5b8201836020820111156102b557600080fd5b803590602001918460018302840111640100000000831117156102d757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050610593565b6040518082815260200191505060405180910390f35b6104026004803603602081101561035f57600080fd5b810190808035906020019064010000000081111561037c57600080fd5b82018360208201111561038e57600080fd5b803590602001918460018302840111640100000000831117156103b057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506105bf565b604051808381526020018281526020019250505060405180910390f35b6104e26004803603604081101561043557600080fd5b810190808035906020019064010000000081111561045257600080fd5b82018360208201111561046457600080fd5b8035906020019184600183028401116401000000008311171561048657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506105d4565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610522578082015181840152602081019050610507565b50505050905090810190601f16801561054f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60008061056983610617565b91509150915091565b60608061057f84846105d4565b905061058a816107cd565b91505092915050565b600060606105a184846105d4565b90506105ac81610855565b67ffffffffffffffff1691505092915050565b6000806105cb83610867565b91509150915091565b606060006105e184610617565b91505061060e836106008384885103886109619092919063ffffffff16565b610a5190919063ffffffff16565b91505092915050565b600080600083519050600060049050606061063e826002886109619092919063ffffffff16565b9050600060f81b8160008151811061065257fe5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480156106c85750600160f81b8160018151811061069957fe5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b156106d4576002820191505b60006106f56106f0848587038a6109619092919063ffffffff16565b610c6e565b60ff169050600081141561070857600190505b600061072761072285848b6109619092919063ffffffff16565b610d07565b9050818401935060008090505b818110156107bc57602085019450600485019450600061076961076487888a038d6109619092919063ffffffff16565b610c6e565b60ff169050600081141561077c57600190505b600061079b61079688848e6109619092919063ffffffff16565b610d07565b90508187019650808701965060048701965050508080600101915050610734565b508084965096505050505050915091565b606060008251905060006008905060006107fc6107f783848603886109619092919063ffffffff16565b610c6e565b60ff169050600081141561080f57600190505b600061082e6108298484896109619092919063ffffffff16565b610d07565b9050818301925061084a8382886109619092919063ffffffff16565b945050505050919050565b600061086082610d5f565b9050919050565b6000806000835190506000809050600061089661089183848603896109619092919063ffffffff16565b610c6e565b60ff16905060008114156108a957600190505b60006108c86108c384848a6109619092919063ffffffff16565b610d07565b9050818301925060008090505b818110156109515760088401935060006109046108ff868789038c6109619092919063ffffffff16565b610c6e565b60ff169050600081141561091757600190505b600061093661093187848d6109619092919063ffffffff16565b610d07565b905081860195508086019550505080806001019150506108d5565b5080839550955050505050915091565b6060600082141561098357604051806020016040528060008152509050610a4a565b60008284019050838111801561099a575080855110155b610a0c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f536c696365206f7574206f6620626f756e64730000000000000000000000000081525060200191505060405180910390fd5b604051915082604083010160405282825283850182038460208701018481015b80821015610a4557815183830152602082019150610a2c565b505050505b9392505050565b606060008351905060008090506000610a7f610a7a83848603896109619092919063ffffffff16565b610c6e565b60ff1690506000811415610a9257600190505b6000610ab1610aac84848a6109619092919063ffffffff16565b610d07565b9050858110156040518060400160405280600e81526020017f496e76616c6964206f757470757400000000000000000000000000000000000081525090610b93576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b58578082015181840152602081019050610b3d565b50505050905090810190601f168015610b855780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508183019250600083905060008090505b82811015610c4f576008850194506000610bd3610bce87888a038d6109619092919063ffffffff16565b610c6e565b60ff1690506000811415610be657600190505b6000610c05610c0088848e6109619092919063ffffffff16565b610d07565b90508187019650808701965089831415610c3d57610c2e84888d6109619092919063ffffffff16565b98505050505050505050610c68565b86935050508080600101915050610ba4565b5060405180602001604052806000815250955050505050505b92915050565b600060ff82600081518110610c7f57fe5b602001015160f81c60f81b60f81c60ff161415610c9f5760089050610d02565b60fe82600081518110610cae57fe5b602001015160f81c60f81b60f81c60ff161415610cce5760049050610d02565b60fd82600081518110610cdd57fe5b602001015160f81c60f81b60f81c60ff161415610cfd5760029050610d02565b600090505b919050565b60008060008090505b8351811015610d55576001810184510360080260020a848281518110610d3257fe5b602001015160f81c60f81b60f81c60ff1602820191508080600101915050610d10565b5080915050919050565b60006060610d6c83610d8d565b90506060610d7982610dad565b9050610d8481610d07565b92505050919050565b6060610da660006008846109619092919063ffffffff16565b9050919050565b60608082516040519080825280601f01601f191660200182016040528015610de45781602001600182028038833980820191505090505b50905060008090505b8351811015610e5b57838181518110610e0257fe5b602001015160f81c60f81b826001838751030381518110610e1f57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050610ded565b508091505091905056fea265627a7a72315820ef9dfe456c3661abaa4bc255f5d798d25fb1c74f654f14cdde519ae9b646858f64736f6c634300050f0032";
