// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Reducer function
function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    case RESET:
      return 0;
    default:
      return state;
  }
}

// Store
function createStore(reducer) {
  let state = reducer(undefined, {}); // Initialize state with reducer's default value
  const subscribers = []; // Array to hold the subscriptions

    console.log('State:', state);
  
  // Dispatch function
  function dispatch(action) {
    state = reducer(state, action); // Update the state by calling the reducer with the current state and action
    subscribers.forEach((subscriber) => subscriber(state)); // Notify subscribers with the updated state
  }

  // Subscribe function
  function subscribe(subscriber) {
    subscribers.push(subscriber); // Add the subscriber to the array
  }



  const newStore = {
    dispatch,
    subscribe,
  };
  return newStore
}

// Usage
const STEP_AMOUNT = 1; // Set the step amount for incrementing and decrementing
const store = createStore(reducer);

// Subscribe to state changes and log them to the console
store.subscribe((state) => {
  console.log('State:', state);
});

// Dispatch actions
store.dispatch({ type: INCREMENT, payload: STEP_AMOUNT });
store.dispatch({ type: INCREMENT, payload: STEP_AMOUNT });
store.dispatch({ type: DECREMENT, payload: STEP_AMOUNT });
store.dispatch({ type: RESET });
