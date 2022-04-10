import Web3 from 'web3';
import contracts from '../contractsABIs/contracts';

const infuraEndpoint = import.meta.env.VITE_INFURA_ENDPOINT_URL;

console.log(infuraEndpoint);

const web3Object = new Web3(infuraEndpoint);

const ethereumInUsd = () => {
  const contractData = contracts.find((contract) => contract.name === 'eth-usd').data;
  const contract = web3Object.eth.Contract(contractData.ABI, contractData.address);

  console.log(contract.methods);
};

export default ethereumInUsd;
