import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name : "Cart",
    initialState : {
        cart:[],
    },
    reducers: {
        addToCart: (state, action)=>{
            const existItem = state.cart.find((item) => item.id === action.payload.id);
            if(existItem){
                state.cart = state.cart.map((item)=>item.id===action.payload.id?{...item, qty: item.qty +1}:item)
            }
            else{
            state.cart.push(action.payload);
            }
        },
        removeToCart: (state, action)=>{
            state.cart= state.cart.filter((item)=>item.id !==action.payload.id)
        },
        incrementQty: (state,action)=>{
            state.cart = state.cart.map((item)=>item.id===action.payload.id ? {...item, qty: item.qty+1}:item)
        },
        decrementQty: (state,action)=>{
            state.cart =state.cart.map((item)=>item.id===action.payload.id?{...item,qty:item.qty-1}:item)
        }
    },
})
export const{addToCart,removeToCart,incrementQty,decrementQty} = cartSlice.actions;
export default cartSlice.reducer;
