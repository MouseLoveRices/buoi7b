import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    student:{
        name: "Jayce",
        math: 8,
        chems: 9,
        avg: 0
    },
    checked: true
}
const studentSlice = createSlice({
    name :"student",
    initialState,
    reducers:{
        calcAvg(state){
            state.student.avg = (state.student.math + state.student.chems)/2
        },
        reChecked(state){
            state.checked = !state.checked
        }
    }
})
export const {reChecked,calcAvg} = studentSlice.actions
export default studentSlice.reducer