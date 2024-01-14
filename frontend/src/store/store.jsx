import { configureStore } from "@reduxjs/toolkit";
// import goalReducer from "./slice";

const store = configureStore({ 
    // reducer: { goals: goalReducer } });
    reducer: {},
});

export default store;