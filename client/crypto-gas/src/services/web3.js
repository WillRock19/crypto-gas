import Web3 from 'web3';
import contracts from '../contractsABIs/contracts';

const infuraEndpoint = import.meta.env.VITE_ETHEREUM_NETWORK_ENDPOINT;
const web3 = new Web3(infuraEndpoint);

const obterEthEmDolar = () => {
  const contractData = contracts.find((contract) => contract.name === 'eth-usd').data;
  const contract = new web3.eth.Contract(contractData.ABI, contractData.address);

  return contract.methods.latestAnswer().call();
};

export default obterEthEmDolar;
