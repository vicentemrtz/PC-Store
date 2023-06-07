// Modules
import { useNavigate } from 'react-router-dom'

export default function useFunctions () {

  const navigate = useNavigate();

  function goToItemDetails (id:string) {
    navigate(`/item-details/${id}`)
  }

  return {
    goToItemDetails
  }
  
}
