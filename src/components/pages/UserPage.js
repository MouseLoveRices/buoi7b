import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAge, changeName } from '../redux/userSlice'

export default function UserPage() {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user.user)
  return (
    <div>
      <h1>This is user page</h1>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <button onClick={()=>dispatch(changeName("Con Boa"))}>Change Name</button>
      <button onClick={()=>dispatch(changeAge(10))}>Change Age</button>
    </div>
  )
}
