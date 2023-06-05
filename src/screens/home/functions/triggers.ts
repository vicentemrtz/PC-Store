// Modules
import { useContext, useEffect } from 'react';

// Contexts
import { FormContext } from '../contexts/form';

// Hooks
import useFilters from './filters';

export default function useTriggers () {
  
  const { startFilter } = useFilters();
  const { filterForm } = useContext(FormContext);

  useEffect(startFilter, [filterForm.form]);

}
