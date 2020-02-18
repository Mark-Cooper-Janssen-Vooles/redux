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

watch for changes to redux store state:
````js
//should log every single time the store changes (best way to do things when state changes)
const unsubscribe = store.subscribe(() => {
  //shows redux store
  console.log(store.getState())
});

//will unsubscribe, wont see anything else.
unsubscribe();
````

to pass dynamic info alongside action objects: 
````js
const store = createStore(( state = {count: 0}, action ) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
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
    type: "INCREMENT",
    incrementBy: 5
  }
);

````