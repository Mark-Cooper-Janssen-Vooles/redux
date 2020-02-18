import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';

//creates redux store
const store = createStore(( state = {count: 0}, action ) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      }
    case "DECREMENT":
      const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      }
    case "SET":
      return {
        count: action.count
      }
    case "RESET":
      return {
        count: 0
      }
    default:
      return state;
  }
});

//watch for changes to redux store state:
//should log every single time the store changes (best way to do things when state changes)
const unsubscribe = store.subscribe(() => {
  //shows redux store
  console.log(store.getState())
});

//dispatch allows us to send off an action object, and the store can do something with this info. 
//when we do store.dispatch, the store function runs again.
store.dispatch(
  {
    type: "INCREMENT",
    incrementBy: 5
  }
);

//will unsubscribe, wont see anything else.
// unsubscribe();

store.dispatch(
  {
    type: "DECREMENT",
    decrementBy: 10
  }
);

store.dispatch(
  {
    type: "RESET"
  }
);

store.dispatch(
  {
    type: "DECREMENT"
  }
);

store.dispatch({
  type: "SET",
  count: 101
})

function App() {

  console.log("redux 101");
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
