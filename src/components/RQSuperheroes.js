
import React,{useState} from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import {useSuperheroes} from '../hooks/useSuperheroes'


const RQSuperheroes = () => {
const [pageNumber, setPageNumber]=useState(Number(1))
const {isLoading, data, isError, error}=  useSuperheroes(pageNumber);




if(isLoading){
    return <h2>Loading........................</h2>
}

if(isError){
  return <h2>{error.message}</h2>
}
  return (
    <div>RQ-Superheroes Page

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