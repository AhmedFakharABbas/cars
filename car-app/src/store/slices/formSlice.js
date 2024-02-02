import {createSlice} from '@reduxjs/toolkit'
const formSlice =createSlice({
    name:'form',
    initialState:{
        name:'',
        cost:0
    },
    reducers:{
        changeName(state,action){
            state.name=action.payload

        },
        changeCost(state,action){
            state.cost=action.payload

        }
    }

})
export const {changeName , changeCost} = formSlice.actions;
export const formReducer=formSlice.reducer;