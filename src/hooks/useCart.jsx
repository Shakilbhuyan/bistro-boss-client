import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'

export const useCart = ()=>{
   const {user} = useContext(AuthContext);
// use tanstack query
   const {refetch, data : cart = []} = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async ()=>{
        const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)

        return response.json();
    },
  });

  return [cart, refetch]
}