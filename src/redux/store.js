import cartReducer from "./reducer/cartReducer";
import apiReducer from "./reducer/apiReducer";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//     cart: cartReducer,
//     wishList: wishListReducer,
//     api: apiReducer
// })

export default configureStore({
    reducer: {
        cart: cartReducer,
        api: apiReducer
    },
});


// const store = createStore(rootReducer);

// export default store;


// export default configureStore({
//     reducer: {
//       cart: cartReducer,
//       },
//   });