import {configureStore} from '@reduxjs/toolkit';
import carReducer from "../features/car/carSlice"
// smth heredsdf

export default configureStore({
    reducer:{
        car:carReducer
    },
})