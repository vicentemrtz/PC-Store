// Modules
import { useContext, useEffect } from 'react';

// Contexts
import { ContractContext } from '../../../contexts/contract-context';

// Hooks
import useGet from './get';

export default function useOnCreate () {
  
  const { contractInstance, account } = useContext(ContractContext);
  const { startGetMyShoppings } = useGet();

  function onCreate () {
    if (contractInstance == null || account == null) return
    startGetMyShoppings();
  }

  useEffect(onCreate, [contractInstance, account]);

}
