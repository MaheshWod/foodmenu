import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {

            const existingItem = state.cart.find((item)=>item.id === action.payload.id)
            // yasle first ma id or cart ma vayako all the data lai find garxa ra existingItem ma rakhaxa, yadi existingItem match vayo vane
            if(existingItem){
                state.cart = state.cart.map((item)=>(item.id === action.payload.id ? {...item, qty : item.qty + 1 } : item))
            }

            else{

                state.cart.push(action.payload);
            }

        },
        // addToCart: (state, action) => {
        //     const existingItem = state.cart.find((item) => item.id === action.payload.id);
        //     if (existingItem) {
        //         existingItem.qty += 1; // Directly modify the qty
        //     } else {
        //         state.cart.push({ ...action.payload, qty: 1 }); // Add qty property for new items
        //     }
        // },

        // incrementQty : (state,action) =>{
        //     state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item, qty:item + 1 } : item)
        // },
        // decrementQty : (state,action) =>{
        //     state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item, qty:item + 1 } : item)
        // },
        incrementQty: (state, action) => {
            state.cart = state.cart.map((item) =>
                item.id === action.payload.id
                    ? { ...item, qty: item.qty + 1 } // Increment qty
                    : item
            );
        },
        decrementQty: (state, action) => {
            state.cart = state.cart.map((item) =>
                item.id === action.payload.id
                    ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } // Decrement qty, ensuring it doesn't go below 1
                    : item
            );
        },
        removeCart: (state,action)=>{
            state.cart = state.cart.filter ((items)=>items.id !== action.payload.id)
        },
        clearCart: (state) => {
            state.cart = [];
          },
    },
});

export const { addToCart,removeCart,incrementQty,decrementQty,clearCart } = CartSlice.actions;

export default CartSlice.reducer;
