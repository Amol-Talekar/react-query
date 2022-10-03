import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { request } from '../utils/axios-utils';


//?_limit=2&_page=${pageNumber}
const FetchData=(pageNumber)=>{
    //return axios.get(`http://localhost:4000/superheroes`)
    return request({url:`/superheroes`})
  }

const addSuperhero=(hero)=>{
  //return axios.post("http://localhost:4000/superheroes",hero)
  return request({url:`/superheroes`,method:"post", data:hero})
}
export const useSuperheroes = (pageNumber) => {

  return  useQuery(["mySuperhero",pageNumber],()=> FetchData(pageNumber))
 
}

export const useAddSuperhero=()=>{
  const queryClient=useQueryClient();
   return useMutation(addSuperhero,{
    onSuccess:()=>{
      queryClient.invalidateQueries("mySuperhero")
    }
   })
}