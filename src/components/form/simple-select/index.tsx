// Modules
import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// Types
import { OptionData } from './types';

type Props = {
  value?:number;
  onChange?:(e:any) => void;
  label:string;
  name:string;
  disabled?:boolean;
  options?:OptionData[];
  actionButton?:React.ReactNode;
  hasDefaultOption?:boolean;
}

const firstOption = { label:'-', id:0 }

export default function SimpleSelect (props:Props) {

  const { value = 0, onChange = () => {}, label, name, disabled = false, options = [], actionButton, hasDefaultOption = true } = props;
  const [ savedOptions, setSavedOptions ] = useState<OptionData[]>([]);

  function handleOptions () {
    const extraOptions = (hasDefaultOption) ? [firstOption] : []
    setSavedOptions([...extraOptions, ...options]);
  }

  useEffect(handleOptions, [options])

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        onChange={onChange}
        name={name}
        value={value}
        label={label}
        disabled={disabled}
        variant='filled'
        fullWidth 
        size='small'
        endAdornment={actionButton}
      >
        {savedOptions.map(({ id, label }, key) => <MenuItem value={id} key={key}>{label}</MenuItem>)}
      </Select>
    </FormControl>
  )
}