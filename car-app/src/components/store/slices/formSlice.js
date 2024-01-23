import {createSlice} from '@reduxjs/toolkit'
const formSlice =createSlice({
    name:'form',
    initialState:{
        name:'',
        cost:0
    },
    reducers:{
        changeName(state,action){
            this.name=action.payload

        },
        changeCost(state,action){
            this.cost=action.payload

        }
    }

})