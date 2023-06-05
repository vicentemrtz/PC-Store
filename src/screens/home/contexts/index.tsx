// Containers
import FormContextContainer from './form';
import ValuesContextContainer from './values';

export default function HomeContextContainer ({ children }:any) {
  return (
    <ValuesContextContainer>
      <FormContextContainer>
        {children}
      </FormContextContainer>
    </ValuesContextContainer>
  )
}
