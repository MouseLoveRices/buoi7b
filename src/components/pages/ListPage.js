import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAnimal, deleteAnimal } from '../redux/listSlice'
import InputForListPage from './InputForListPage'

export default function ListPage() {
    const [flag,setFlag]=useState("")
    const dispatch = useDispatch()
    const listAnimal = useSelector(state=>state.listAnimal.listAnimal)
    const handle_add=(text)=>{
        dispatch(addAnimal(text))
    }
    const filterAnimal=(list,flag)=>{
        if(flag === "CHECKED"){
            return list.filter(item=>item.checked)
        }else if(flag === "NOCHECKED"){
            return list.filter(item=>!item.checked)
        }else{
            return list
        }
    }
    return (
    <div>
        <h1>---This is List Animal---</h1>
        <InputForListPage handle_add={handle_add}/>
        {
            filterAnimal(listAnimal,flag).map((item,index)=>(
                <tr key={index}>
                    <td>{item.name}</td>
                    
                    <td><button onClick={()=>dispatch(deleteAnimal(item.id))}>Delete</button></td>                   
                </tr>
            ))
        }
        <button onClick={()=>setFlag("CHECKED")}>checked</button>
        <button onClick={()=>setFlag("NOCHECKED")}>no checked</button>
        <button onClick={()=>setFlag("CLEAR")}>clear</button>
    </div>
  )
}
