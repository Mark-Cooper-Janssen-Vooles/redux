import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';

//creates redux store
const store = createStore(( state = {count: 0}, action ) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      }
    case "DECREMENT":
      return {
        count: state.count - 1
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
//should log every single time the store changes
store.subscribe(() => {
  //shows redux store
  console.log(store.getState())
});

//dispatch allows us to send off an action object, and the store can do something with this info. 
//when we do store.dispatch, the store function runs again.
store.dispatch(
  {
    type: "INCREMENT"
  }
);

store.dispatch(
  {
    type: "DECREMENT"
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

function App() {

  console.log("redux 101");
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
