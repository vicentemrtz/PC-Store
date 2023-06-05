export default function useHandleStrings () {
  
  function parseStringWithoutAccents (chain:string) {
    const parsedChain = chain
      .split('')
      .map((e) => {
        switch (e) {
          case 'á': 
          case 'Á': 
            return 'a';
          case 'é':   
          case 'É':   
            return 'e';
          case 'í': 
          case 'Í': 
            return 'i';
          case 'ó': 
          case 'Ó': 
            return 'o';
          case 'ú': 
          case 'Ú': 
            return 'u';
          default: return e;
        }
      });
    return parsedChain.join('');
  }

  function validateStringContainsOnlyNumbers (chain:string) {
    const filteredChain = chain
      .split('')
      .filter((e) => (
        e !== '1' && 
        e !== '2' && 
        e !== '3' && 
        e !== '4' && 
        e !== '5' && 
        e !== '6' && 
        e !== '7' && 
        e !== '8' && 
        e !== '9' && 
        e !== '0' && 
        e !== '.'
      ));
    return filteredChain.length == 0
  }

  function validateStringContainsOnlyOneDot (chain:string) {
    const filteredChain = chain.split('').filter((e) => e === '.');
    return filteredChain.length <= 1;
  }

  return {
    parseStringWithoutAccents,
    validateStringContainsOnlyNumbers,
    validateStringContainsOnlyOneDot
  }

}
