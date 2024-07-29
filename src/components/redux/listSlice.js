import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    listAnimal:[
        {id:1,name:"Con Nice",checked:false},
        {id:2,name:"Con Who",checked:true},
        {id:3,name:"Con Meo",checked:false},
        {id:4,name:"Con Boa",checked:false},
        {id:5,name:"Con Heo",checked:false}      
    ]   
}
const listSlice = createSlice({
    name:"listAnimal",
    initialState,
    reducers:{
        addAnimal(state,action){
            state.listAnimal = [...state.listAnimal,{id:6,name:action.payload,checked:true}]
        },
        deleteAnimal(state,action){
            state.listAnimal = state.listAnimal.filter(item=>item.id !== action.payload )
        }
    }
})

export const {addAnimal,deleteAnimal} = listSlice.actions
export default listSlice.reducer