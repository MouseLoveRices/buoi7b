import React from 'react'
import { useSelector,useDispatch} from "react-redux"
import { countUp, countDown } from '../redux/countSlice'

export default function MainPage() {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.count.value)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>dispatch(countUp())}>Count Up</button>
      <button onClick={()=>dispatch(countDown())}>Count Down</button>
    </div>
  )
}
