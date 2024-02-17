import {configureStore} from "@reduxjs/toolkit";
import CartSlices from "./slices/CartSlices";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";
const appStore = configureStore({
    reducer: {
        cart: CartSlices,
        category: CategorySlice,
        search: SearchSlice,
        
    },
});
export default appStore;
