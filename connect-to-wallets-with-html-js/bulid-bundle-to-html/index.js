const { ethers } = require('ethers');
const { abi } = require('./abi');

async function connect() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.log(error);
    }
    document.getElementById('connectButton').innerHTML = 'Connected';
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    console.log(accounts);
  } else {
    document.getElementById('connectButton').innerHTML =
      'Please install MetaMask';
  }
}

async function mint() {
  if (typeof window.ethereum !== 'undefined') {
    const contractAddress = '0x9AB1BD1ACf0F2f685Cc5dfE2f665465170Ea3569';
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      await contract.safeMint();
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById('mintButton').innerHTML = 'Please install MetaMask';
  }
}

module.exports = { connect, mint };
