// Modules
import { useState } from "react";

export default function useSubmit () {

  const [ isLoadingLogin, setIsLoadingLogin ] = useState(false);
  
  function startSubmitLogin () {

  }

  return {
    startSubmitLogin,
    isLoadingLogin
  }

}
