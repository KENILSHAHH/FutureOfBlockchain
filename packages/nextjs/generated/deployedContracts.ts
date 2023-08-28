const contracts = {
  5: [
    {
      chainId: "5",
      name: "goerli",
      contracts: {
        YourContract: {
          address: "0x5d23c6bfB54b76511dE38a3c5770306620f35074",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_newValue",
                  type: "uint256",
                },
              ],
              name: "changeStateVariable",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getStateVariable",
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
              name: "stateVariable",
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
          ],
        },
      },
    },
  ],
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        YourContract: {
          address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_newValue",
                  type: "uint256",
                },
              ],
              name: "changeStateVariable",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getStateVariable",
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
              name: "stateVariable",
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
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
