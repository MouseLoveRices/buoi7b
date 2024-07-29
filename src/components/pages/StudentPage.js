import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reChecked,calcAvg } from '../redux/studentSlices'

export default function StudentPage() {
    const dispatch = useDispatch(0)
    const student = useSelector(state=>state.student.student)
    const checked = useSelector(state=>state.student.checked)
  return (
    <div>
        <h1>This is student page</h1>
        <h2>Name student: {student.name}</h2>
        <h2>Math: {student.math}</h2>
        <h2>chems: {student.chems}</h2>
        <h2>avg: {student.avg}</h2>
        <h2>checked: {checked?"true":"false"}</h2>
        <button onClick={()=>dispatch(reChecked())}>reChecked</button>
        <button onClick={()=>dispatch(calcAvg())}>Calc avg</button>
    </div>
  )
}
