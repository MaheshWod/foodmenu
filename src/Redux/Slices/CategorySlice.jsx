import { createSlice } from "@reduxjs/toolkit";
// import reducer from "./CartSlices";


const CategorySice = createSlice({
    name:"category",
    initialState:{
        category:"All",
    },
    reducers:{
        setCategory:(state,action)=>{
            state.category = action.payload;
        }
    }
})
export const { setCategory } = CategorySice.actions;

export default CategorySice.reducer;