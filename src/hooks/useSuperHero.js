import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const FetchSingleSuperHeroData=(heroId)=>{
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
  }

const useSuperHero = (heroId) => {
  return useQuery(`singleSuperhero ${heroId}`, ()=>FetchSingleSuperHeroData(heroId))
}

export default useSuperHero