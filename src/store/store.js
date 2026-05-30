import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name:'cart',
  initialState:{ items:[] },
  reducers:{
    addToCart:(state,{payload})=>{ const item=state.items.find(i=>i.id===payload.id); item ? item.quantity+=payload.quantity||1 : state.items.push({...payload,quantity:payload.quantity||1}); },
    removeFromCart:(state,{payload})=>{ state.items=state.items.filter(i=>i.id!==payload); },
    increase:(state,{payload})=>{ const item=state.items.find(i=>i.id===payload); if(item) item.quantity+=1; },
    decrease:(state,{payload})=>{ const item=state.items.find(i=>i.id===payload); if(item && item.quantity>1) item.quantity-=1; },
    clearCart:(state)=>{ state.items=[]; }
  }
});

export const {addToCart,removeFromCart,increase,decrease,clearCart}=cartSlice.actions;
export const store=configureStore({reducer:{cart:cartSlice.reducer}});
