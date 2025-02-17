import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    user:{
        name:"Con Nice",
        age:20
    },
}
const userSlice = createSlice({
        name :"user",
        initialState,
        reducers:{
            changeName(state,action){
                state.user.name = action.payload
            },
            changeAge(state,action){
                state.user.age = action.payload
            }
        }
})
export const {changeName,changeAge} = userSlice.actions
export default userSlice.reducer