// Modules
import { useContext, useEffect } from "react";

// Hooks
import useGet from "./get";
import useTriggers from "./triggers";

// Contexts
import { ContractContext } from "../../../contexts/contract-context";

export default function useOnCreate () {

  const { startGetItemDetails } = useGet();
  const { contractInstance } = useContext(ContractContext);

  function onCreate () {
    if (contractInstance == null) return;
    startGetItemDetails();
  }

  useTriggers();
  useEffect(onCreate, [contractInstance]);

}
