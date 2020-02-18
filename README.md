Notes:

## Redux

"yarn add redux"

creates redux store:
````js
const store = createStore(( state = {count: 10} ) => {
  return state;
});
````

shows redux store:
````js
console.log(store.getState())
````

dispatch allows us to send off an action object, and the store can do something with this info. 
when we do store.dispatch, the store function runs again.
````js
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

store.dispatch(
  {
    type: "INCREMENT"
  }
);
````

