
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {useSuperheroes, useAddSuperhero} from '../hooks/useSuperheroes';
import './RQSuperheroes.css';


const RQSuperheroes = () => {
const [pageNumber, setPageNumber]=useState(Number(1));
const [inputId, setInputId]=useState(Number(0))
const [inputName, setInputName]=useState("");
const [inputAlterEgo, setInputAlterEgo]=useState("")


const {isLoading, data, isError, error}=  useSuperheroes(pageNumber);

const {mutate}= useAddSuperhero();

const handleAddSuperhero=()=>{
  console.log(inputId, typeof(inputId), inputName,inputAlterEgo);
  const hero={id:inputId, name:inputName, alterEgo:inputAlterEgo};
  mutate(hero)
}



if(isLoading){
    return <h2>Loading........................</h2>
}

if(isError){
  return <h2>{error.message}</h2>
}
  return (
    <div>RQ-Superheroes Page
      <div className='inputBox'>
        <input type="number" placeholder='Enter Superhero ID' onChange={(e)=>((setInputId(e.target.valueAsNumber)))} />
        <input value={inputName} placeholder='Enter Superhero Name' onChange={(e)=>setInputName(e.target.value)} />
        <input value={inputAlterEgo} placeholder='Enter Superhero AlterEgo' onChange={(e)=>setInputAlterEgo(e.target.value)} />
        <button onClick={handleAddSuperhero}>Submit</button>
      </div>

      <div>
      {data&&data.data.map((item)=>
          <div style={{border:"1px solid red", margin:"10px", fontSize:"20px",padding:"5px"}} key={item.id}>
            
            <Link to={`/rqsuperheroes/${item.id}`}>{item.name}</Link>
            
          </div>
      )}
      </div>

      <div>
        <button onClick={()=>setPageNumber(prev=>prev-1)} disabled={pageNumber===Number(1)}>Prev</button>
        <button onClick={()=>setPageNumber(prev=>prev+1)} disabled={pageNumber===Number(5)}>Next</button>
      </div>
    </div>
  )
}

export default RQSuperheroes