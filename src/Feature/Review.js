import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    reviewObj : []
}

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        addReview: (state,action)=>{
            state.reviewObj.push(action.payload)
        }
    }
})

export const {addReview} = reviewSlice.actions;
export default reviewSlice.reducer;