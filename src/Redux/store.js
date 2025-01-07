

import { configureStore } from '@reduxjs/toolkit';
import CartSlices from './Slices/CartSlices'
import CategorySices from './Slices/CategorySlice'
import SearchSlice from './Slices/SearchSlice'
const Store = configureStore({
    reducer:{
        cart: CartSlices,
        category:CategorySices,
        search:SearchSlice
    }
})

export default Store