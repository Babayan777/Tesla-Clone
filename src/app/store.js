import {configureStore} from '@reduxjs/toolkit';
import carReducer from "../features/car/carSlice"
// smth here

export default configureStore({
    reducer:{
        car:carReducer
    },
})