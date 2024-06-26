import { createSlice } from "@reduxjs/toolkit";


 const initialState = {
    name: "omar",
    value:0,
 }


const counterSlice = createSlice({
    name:"Counter",
    initialState,
    reducers:{
        addOne(state) {
            state.value += 1 ; 
        },
        muniOne(state) {
            state.value -= 1 ; 
        },
        changeName(state , action) {
            state.name = action.payload ;
        },
    }
})

export const {addOne , muniOne , changeName} = counterSlice.actions;
export default counterSlice.reducer;