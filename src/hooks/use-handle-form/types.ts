export type UseHandleForm = {
  form: any;
  setForm: React.Dispatch<any>;
  handleOnChangeCheck(e: OnChangeEvent): void;
  handleOnChange(e: OnChangeEvent): void;
  handleOnChangeJustNumbers(e: OnChangeEvent): void;
  handleOnChangeMaxLengthJustNumbers(e: OnChangeEvent, maxLength: number): void
  cleanForm: () => void;
  initialState:any;
}

export type OnChangeEvent = React.ChangeEvent<HTMLInputElement>;