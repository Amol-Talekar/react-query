import axios from 'axios';
import React,{useState, useEffect} from 'react'

const Superheroes = () => {
    const [isLoading,setIsLoading]=useState(true);
    const [superheroData,setSuperheroData]=useState();

useEffect(()=>{
    const FetChDataFunction =async()=>{
        const result= await axios.get("http://localhost:4000/superheroes");
        setSuperheroData(result.data)
        setIsLoading(false)
    }

    FetChDataFunction()
},[])

if(isLoading){
    return <h2>Loading..........</h2>
}
  return (
    <div>This is traditional Superheroes Page

        {superheroData&&superheroData.map((item,index)=>
        <div style={{border:"1px solid black", margin:"10px", fontSize:"20px"}} key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.alterEgo}</p>
        </div>
        )}
    </div>
  )
}

export default Superheroes