import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import useAxiosSecure from './useAxiosSecure';

export const useCart = ()=>{
   const {user, loading} = useContext(AuthContext);
   // const token = localStorage.getItem('access-token')
   const [axiosSecure] = useAxiosSecure();
// use tanstack query
   const {refetch, data : cart = []} = useQuery({
    queryKey: ['cart', user?.email],
    enabled : !loading,
   //  queryFn: async ()=>{
   //      const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {headers: {
   //       authorization : `bearer ${token}`
   //      }})

   //      return response.json();
   //  },
    queryFn: async ()=>{
        const response = await axiosSecure(`/carts?email=${user?.email}`)
        return response.data;
    },
  });

  return [cart, refetch]
}