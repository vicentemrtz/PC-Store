// Components
import UserContextContainer from './user-context';
import DialogsContextContainer from './dialogs-context';
import ContractContextContainer from './contract-context';

export default function MainContext ({ children }:any) {
  return (
    <ContractContextContainer>
      <UserContextContainer>
        <DialogsContextContainer>
          {children}
        </DialogsContextContainer>
      </UserContextContainer>
    </ContractContextContainer>
  )
}