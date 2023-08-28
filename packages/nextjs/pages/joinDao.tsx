"use client"
import { useEffect, useState } from "react"
import { useEnsAvatar, useEnsName } from 'wagmi'
import Web3Modal from 'web3modal'
import {ethers} from 'ethers'
import { Router } from "next/router";
import { namehash } from "viem"

export default  function joinDao() {
    const spruceDaoAbi =[
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
				"internalType": "address payable",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "lend",
		"outputs": [],
		"stateMutability": "payable",
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
]
 
    
    const [eligibleForCredit, setEligibleForCredit] = useState(true);
        const [createProposal, setCreateProposal] = useState(false);
    const [voteForProposal, setVoteForProposal] = useState(false)
    
      const address = ['0xe872aB4c7e41eE9CDa5E45D73Fc53a6108f0aedE','0x85134cC0A528a9aF0E7C7c7A2Df707E6ddF16180','0xc59e2441bD6b8b47E207E4cD40EbD0CD35c85aaF']
    const handleCreateProposalChange = () => {
        setCreateProposal(true);
        setEligibleForCredit(false);
       
    };


    const handleVoteForProposalChange = async (event:any) => {
     setVoteForProposal(!voteForProposal);
       setEligibleForCredit(false);
         setCreateProposal(false)
    };

    const handleEligibleForCreditChange =async (event:any) => {
         setEligibleForCredit(true);
        setCreateProposal(false);
        setVoteForProposal(false)
        
    };
    

    const createproposal = async (event: any) => {
        event.preventDefault();
              const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            console.log("hey")
            const provider = new ethers.providers.Web3Provider(connection);
             console.log("hi")
        const signer = await provider.getSigner();
           let contract = new ethers.Contract(
      '0x37F9e87c6599Dc455a0181CB9438fE0f4a5C54b4',
      spruceDaoAbi,
      signer
    );
        let txn = await contract.proposal('Arbitrum Ambassador Program','Arbitrum Ambassador Program');
        console.log(txn)
    }
        async function lend () {
         const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            console.log("hey")
            const provider = new ethers.providers.Web3Provider(connection);
             console.log("hi")
        const signer = await provider.getSigner();
           let contract = new ethers.Contract(
      '0x37F9e87c6599Dc455a0181CB9438fE0f4a5C54b4',
      spruceDaoAbi,
      signer
    );
            const options = { value: ethers.utils.parseEther("0.01") }
        let txn = await contract.lend('0xc59e2441bD6b8b47E207E4cD40EbD0CD35c85aaF',1,options );
        console.log(txn)
    }

    return (
        <div >
      <div style={{margin:"20px",display:"flex", alignItems:"center", justifyContent:"center"}}>
            <button
                onClick={handleCreateProposalChange}
             style={{marginRight:"30px"}}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Proposals
            </button>
            <button
                  onClick={handleVoteForProposalChange}
              style={{marginRight:"30px"}}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Vote for Proposals
            </button>
                 <button
                   onClick={handleEligibleForCreditChange}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Lend/Borrow Money 
            </button>
           
            </div>
            <div style={ {margin:"75px"}}>
             {eligibleForCredit &&  (<> <ul role="list" className="divide-y divide-gray-600">
      {address.map((person) => (
        <li key={person} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
                  <img className="h-24 w-24 flex-none rounded-full bg-gray-50" src={useEnsAvatar({ name: useEnsName({ address: person, chainId: 5 })?.data   , chainId: 5 })?.data||undefined} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{ useEnsName({ address : person, chainId: 5 })?.data}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
           
            
              <div className="mt-1 flex items-center gap-x-1.5">
          
                 <button
                onClick={lend}
             style={{marginRight:"30px"}}
              className="rounded-md bg-green-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Lend
                      </button>
                           <button
               
             style={{marginRight:"30px"}}
              className="rounded-md bg-red-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
               Borrow
            </button>
              </div>
            
          </div>
        </li>
      ))}
    </ul>  <form   onSubmit={createproposal} style={{marginTop:"700px", display: "flex", justifyContent: "center", justifyItems: "center" }}>
          
          <div >
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1" style={{border: '1px solid #000000',
    borderRadius: '10px', // Adjust this value to control the roundness
    padding: '10px'}}>
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
               Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="daoName"
                    id="first-name"
                
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
                                </div>
                                  <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
               Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="daoName"
                    id="first-name"
                
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>



            <button
                type="submit"
            
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Proposal 
            </button>
            </div>
            </div>
        </form></>)}</div></div>
  )
}

