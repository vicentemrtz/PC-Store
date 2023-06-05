// Modules
import { useContext, useEffect } from 'react'

// Contexts
import { FormContext } from '../contexts/form'

export default function useTriggers () {

  const { buyForm } = useContext(FormContext);
  const { form, setForm } = buyForm;
  
  function handleTotal () {
    const { amount, price } = form;
    if (!amount || !price) return;
    const total = Number(amount) * Number(price);
    setForm({ ...form, total });
  }

  useEffect(handleTotal, [form]);

}
