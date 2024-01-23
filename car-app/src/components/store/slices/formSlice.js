import {createSlice} from '@reduxjs/toolkit'
const formSlice =createSlice({
    name:'form',
    initialState:{
        name:'',
        cost:0
    },
    reducer:{
        changeName(state,action){
            this.name=action.payload

        },
        changeCost(state,action){
            this.cost=action.payload

        }
    }

})
export const {changeName , changeCost} = formSlice.actions;
export const formReducer=formSlice.reducer;