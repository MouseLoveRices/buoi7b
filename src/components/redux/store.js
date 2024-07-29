import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import useReducer  from "./userSlice";
import studentReducer from "./studentSlices"
import listReducer from "./listSlice"

const store = configureStore({
    reducer:{
        count:countSlice,// count trong la name trong countSlice 
        user: useReducer, // userReducer co the dat ten tuy y
        student: studentReducer,
        listAnimal: listReducer
    }
})
export default store