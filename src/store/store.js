import { configureStore  } from "@reduxjs/toolkit";
import reviewReducer from '../Feature/Review'


export const store = configureStore({
    reducer:{
        Review: reviewReducer
    }
})