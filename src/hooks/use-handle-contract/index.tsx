// Modules
import Web3 from 'web3';
import { useContext, useEffect } from 'react';

// Contexts
import { DialogsContext } from '../../contexts/dialogs-context';
import { ContractContext } from '../../contexts/contract-context';

export default function useHandleContract () {

  const { setIsNoEthereumDialogShowing } = useContext(DialogsContext);
  const { setAccount, setContractInstance } = useContext(ContractContext);

  useEffect(() => {getContractInstance()}, []);

  async function getContractInstance () {
    // @ts-ignore
    const eth = window.ethereum;
    if (!eth) setIsNoEthereumDialogShowing(true);
    else {
      eth.request({ method:'eth_requestAccounts' });
      const web3 = new Web3(eth);
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      const res = await fetch("/BlockchainContract.json");
      const blockchainContractJson = await res.json();
      const deployedNetwork = blockchainContractJson.networks[5777];
      const abi = blockchainContractJson.abi;
      const instance = new web3.eth.Contract(abi, deployedNetwork && deployedNetwork.address);
      setContractInstance(instance);
    }
  }

  return {
    getContractInstance
  }
}
