import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios'

const FetchData=(pageNumber)=>{
    return axios.get(`http://localhost:4000/superheroes?_limit=2&_page=${pageNumber}`)
  }

export const useSuperheroes = (pageNumber) => {

  return  useQuery(["mySuperhero",pageNumber],()=> FetchData(pageNumber))
 
}

