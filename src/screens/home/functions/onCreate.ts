// Modules
import { useContext, useEffect } from 'react';

// Contexts
import { ContractContext } from '../../../contexts/contract-context';

// Hooks
import useGet from './get';
import useTriggers from './triggers';

export default function useOnCreate () {

  useTriggers();
  const { startGetItems } = useGet();
  const { contractInstance } = useContext(ContractContext);

  function onCreate () {
    if (contractInstance == null) return;
    startGetItems();
  }

  useEffect(() => {onCreate()}, [contractInstance]);

}
