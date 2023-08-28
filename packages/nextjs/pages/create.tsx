"use client"
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { Router } from "next/router";

export default function Create() {

  const [nameData, setNameData] = useState({
      daoName: '',
      commits: 0,
      createProposal: false,
      eligibleForCredit: false,
      eligibleToVote: false,
    
    
  });
      const [createProposal, setCreateProposal] = useState(false);
    const [voteForProposal, setVoteForProposal] = useState(false);
  const [eligibleForCredit, setEligibleForCredit] = useState(false);
     const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event:any) => {
        setSelectedOption(event.target.value);
    };

    const handleCreateProposalChange = () => {
        setCreateProposal(!createProposal);
    };

    const handleVoteForProposalChange = () => {
        setVoteForProposal(!voteForProposal);
    };

    const handleEligibleForCreditChange = () => {
        setEligibleForCredit(!eligibleForCredit);
    };



const deployContract=async(event:any)=>{
  event.preventDefault();
   
      const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer =await provider.getSigner();

      const factory = await new ethers.ContractFactory([
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_daoName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_numberOfCommits",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_createProposal",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_voteForProposal",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_eligibleForCredit",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "createProposal",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "daoName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "eligibleForCredit",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_proposalId",
          "type": "uint256"
        }
      ],
      "name": "executeProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "hasVoted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "numberOfCommits",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        }
      ],
      "name": "proposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "proposals",
      "outputs": [
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "executed",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_proposalId",
          "type": "uint256"
        }
      ],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "voteForProposal",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],"0x60806040523480156200001157600080fd5b5060405162000f1e38038062000f1e8339810160408190526200003491620000b3565b600062000042868262000259565b506001939093556002805461ffff191692151561ff00191692909217610100911515919091021762ff0000191662010000921515929092029190911790555062000325565b634e487b7160e01b600052604160045260246000fd5b80518015158114620000ae57600080fd5b919050565b600080600080600060a08688031215620000cc57600080fd5b85516001600160401b0380821115620000e457600080fd5b818801915088601f830112620000f957600080fd5b8151818111156200010e576200010e62000087565b604051601f8201601f19908116603f0116810190838211818310171562000139576200013962000087565b81604052828152602093508b848487010111156200015657600080fd5b600091505b828210156200017a57848201840151818301850152908301906200015b565b600084848301015280995050505080880151955050506200019e604087016200009d565b9250620001ae606087016200009d565b9150620001be608087016200009d565b90509295509295909350565b600181811c90821680620001df57607f821691505b6020821081036200020057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200025457600081815260208120601f850160051c810160208610156200022f5750805b601f850160051c820191505b8181101562000250578281556001016200023b565b5050505b505050565b81516001600160401b0381111562000275576200027562000087565b6200028d81620002868454620001ca565b8462000206565b602080601f831160018114620002c55760008415620002ac5750858301515b600019600386901b1c1916600185901b17855562000250565b600085815260208120601f198616915b82811015620002f657888601518255948401946001909101908401620002d5565b5085821015620003155787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610be980620003356000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80633bd915e4116100665780633bd915e414610139578063489769361461014c5780636aa67c54146101615780636dba795f14610178578063d19b1fef1461018a57600080fd5b80630121b93f146100a3578063013cf08b146100b857806309eef43e146100e65780630d61b51914610119578063180fd87f1461012c575b600080fd5b6100b66100b13660046107c9565b61019d565b005b6100cb6100c63660046107c9565b61032f565b6040516100dd96959493929190610828565b60405180910390f35b6101096100f436600461087e565b60046020526000908152604090205460ff1681565b60405190151581526020016100dd565b6100b66101273660046107c9565b61049d565b6002546101099060ff1681565b6002546101099062010000900460ff1681565b6101546105f6565b6040516100dd91906108ae565b61016a60015481565b6040519081526020016100dd565b60025461010990610100900460ff1681565b6100b6610198366004610964565b610684565b600254610100900460ff166102055760405162461bcd60e51b8152602060048201526024808201527f566f74696e6720666f722070726f706f73616c73206973206e6f7420616c6c6f6044820152633bb2b21760e11b60648201526084015b60405180910390fd5b3360009081526004602052604090205460ff16156102655760405162461bcd60e51b815260206004820152601760248201527f596f75206861766520616c726561647920766f7465642e00000000000000000060448201526064016101fc565b60035481106102ad5760405162461bcd60e51b815260206004820152601460248201527324b73b30b634b210383937b837b9b0b61024a21760611b60448201526064016101fc565b6000600382815481106102c2576102c26109c8565b60009182526020909120600690910201600581015490915060ff16156102fa5760405162461bcd60e51b81526004016101fc906109de565b60048101805490600061030c83610a21565b9091555050336000908152600460205260409020805460ff191660011790555050565b6003818154811061033f57600080fd5b906000526020600020906006020160009150905080600001805461036290610a48565b80601f016020809104026020016040519081016040528092919081815260200182805461038e90610a48565b80156103db5780601f106103b0576101008083540402835291602001916103db565b820191906000526020600020905b8154815290600101906020018083116103be57829003601f168201915b5050505060018301546002840154600385018054949592946001600160a01b0390921693509061040a90610a48565b80601f016020809104026020016040519081016040528092919081815260200182805461043690610a48565b80156104835780601f1061045857610100808354040283529160200191610483565b820191906000526020600020905b81548152906001019060200180831161046657829003601f168201915b50505050600483015460059093015491929160ff16905086565b60035481106104e55760405162461bcd60e51b815260206004820152601460248201527324b73b30b634b210383937b837b9b0b61024a21760611b60448201526064016101fc565b6000600382815481106104fa576104fa6109c8565b60009182526020909120600690910201600581015490915060ff16156105325760405162461bcd60e51b81526004016101fc906109de565b60026001546105419190610a82565b8160040154116105895760405162461bcd60e51b815260206004820152601360248201527224b739bab33334b1b4b2b73a103b37ba32b99760691b60448201526064016101fc565b60028101546001600160a01b031633146105e55760405162461bcd60e51b815260206004820152601d60248201527f4f6e6c79207468652063726561746f722063616e20657865637574652e00000060448201526064016101fc565b600501805460ff1916600117905550565b6000805461060390610a48565b80601f016020809104026020016040519081016040528092919081815260200182805461062f90610a48565b801561067c5780601f106106515761010080835404028352916020019161067c565b820191906000526020600020905b81548152906001019060200180831161065f57829003601f168201915b505050505081565b60025460ff166106e15760405162461bcd60e51b815260206004820152602260248201527f4372656174696e672070726f706f73616c73206973206e6f7420616c6c6f7765604482015261321760f11b60648201526084016101fc565b600380546040805160c0810182528581526020810183905233918101919091526060810184905260006080820181905260a08201819052600183018455929092528151909190600683027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0190819061075a9082610af3565b506020820151600182015560408201516002820180546001600160a01b0319166001600160a01b039092169190911790556060820151600382019061079f9082610af3565b506080820151600482015560a0909101516005909101805460ff1916911515919091179055505050565b6000602082840312156107db57600080fd5b5035919050565b6000815180845260005b81811015610808576020818501810151868301820152016107ec565b506000602082860101526020601f19601f83011685010191505092915050565b60c08152600061083b60c08301896107e2565b602083018890526001600160a01b0387166040840152828103606084015261086381876107e2565b6080840195909552505090151560a090910152949350505050565b60006020828403121561089057600080fd5b81356001600160a01b03811681146108a757600080fd5b9392505050565b6020815260006108a760208301846107e2565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126108e857600080fd5b813567ffffffffffffffff80821115610903576109036108c1565b604051601f8301601f19908116603f0116810190828211818310171561092b5761092b6108c1565b8160405283815286602085880101111561094457600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561097757600080fd5b823567ffffffffffffffff8082111561098f57600080fd5b61099b868387016108d7565b935060208501359150808211156109b157600080fd5b506109be858286016108d7565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b60208082526023908201527f50726f706f73616c2068617320616c7265616479206265656e2065786563757460408201526232b21760e91b606082015260800190565b600060018201610a4157634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680610a5c57607f821691505b602082108103610a7c57634e487b7160e01b600052602260045260246000fd5b50919050565b600082610a9f57634e487b7160e01b600052601260045260246000fd5b500490565b601f821115610aee57600081815260208120601f850160051c81016020861015610acb5750805b601f850160051c820191505b81811015610aea57828155600101610ad7565b5050505b505050565b815167ffffffffffffffff811115610b0d57610b0d6108c1565b610b2181610b1b8454610a48565b84610aa4565b602080601f831160018114610b565760008415610b3e5750858301515b600019600386901b1c1916600185901b178555610aea565b600085815260208120601f198616915b82811015610b8557888601518255948401946001909101908401610b66565b5085821015610ba35787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea26469706673582212208348d857e31b9bdba1c34c588addcd6d9027a71e5617d3135fe5e7f1a023888464736f6c63430008110033", signer);
      console.log("this")
   console.log(createProposal,voteForProposal,eligibleForCredit,nameData.commits,nameData.daoName)
        const deployedContract = await factory.deploy(
          nameData.daoName,
          nameData.commits,
          createProposal,
          voteForProposal,
          eligibleForCredit
        );

        await deployedContract.deployed();
        console.log('Contract deployed at address:', deployedContract.address);
      
    
}
  

  const handleInputChange = (event:any) => {
    const { name, value } = event.target;
    setNameData((prevNameData) => ({
      ...prevNameData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
     <h1 style={{display:"flex",justifyContent:"center",justifyItems:"center",fontSize:"30px"}}>Create an Entry Restricted Dao</h1>
        <form     onSubmit={deployContract} style={{ display: "flex", justifyContent: "center", justifyItems: "center" }}>
          
          <div >
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1" style={{border: '1px solid #000000',
    borderRadius: '10px', // Adjust this value to control the roundness
    padding: '10px'}}>
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Dao Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="daoName"
                    id="first-name"
                    value={nameData.daoName}
                    autoComplete="given-name"
                    onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="commits" className="block text-sm font-medium leading-6 text-gray-900">
               Number of Commits
              </label>
              <div className="mt-2">
                <input
                   type="number" value={nameData.commits} onChange={handleInputChange}
                  name="commits"
                    id="commits"
                    placeholder="10"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  
              </div>
              </div>
              <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Choose Entry Restriction
              </label>
              <div className="mt-2">
                <select
            
                    value={selectedOption} onChange={handleOptionChange}
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="github">Github</option>
                  <option value="twitter">Twitter</option>
                  <option value="email">Email</option>
                </select>
              </div>
            </div>

                 <div className="sm:col-span-6">
              <label htmlFor="commits" className="block text-sm font-medium leading-6 text-gray-900">
               Allow users to do the following once they are verified
              </label>
              <div className="mt-2">
               <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="createProposal"
                          type="checkbox"
                          checked={createProposal}
                          onChange={handleCreateProposalChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-1">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Create Proposals
                    </label>
                   
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                          type="checkbox"
                          checked={eligibleForCredit}
                          onChange={handleEligibleForCreditChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-1">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Eligible to borrow/lend from other DAO users
                    </label>
                  
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                          type="checkbox"
                          checked={voteForProposal}
                          onChange={handleVoteForProposalChange} 
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-1">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Vote for proposals
                    </label>
                   
                  </div>
                </div>
              </div>
              </div>
            </div>


            <button
                type="submit"
            
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Contract
            </button>
            </div>
            </div>
        </form>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
