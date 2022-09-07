import React from 'react'
import { useParams } from 'react-router-dom'
import useSuperHero from '../hooks/useSuperHero';

const RQSingleSuperhero = () => {
    const {heroId}=useParams();
    
    const {isLoading, data, isError, error}= useSuperHero(heroId);
    
    
if(isLoading){
    return <h2>Loading........................</h2>
}

if(isError){
  return <h2>{error.message}</h2>
}
  return (
    <div>RQ Single Superhero Page

        {data? 
        <div style={{display:"flex", gap:"20px", padding:"5px", margin:"5px", fontWeight:"bold",border:"1px solid black", justifyContent:"center"}}>
           <p style={{fontSize:"120px",  height:"100%",margin:"0px"}}>{data.data.id}</p>  
           <div style={{display:"flex", flexDirection:"column", gap:"10px", justifyContent:"center", alignItems:"center", fontSize:"20px"}}>
           <p>{data.data.name}</p> 
           <p>{data.data.alterEgo}</p> 
            </div>   
        </div> :null}
    </div>
  )
}

export default RQSingleSuperhero