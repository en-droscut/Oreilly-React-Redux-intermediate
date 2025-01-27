// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './counter';

//1. Create the reducer method which contains the logic
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     }
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     }
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     }
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     }
//   }

//   return state;
// }

//2. Initialise the "store"
// const store = createStore(counterReducer);

const store = configureStore({
  // reducer: counterSlice.reducer, // only one state
  reducer: { // if we have more reducers
    counter: counterReducer,
    auth: authReducer,
  }
});


//3. Export the "store"
export default store;

//Go to components/Counter.js