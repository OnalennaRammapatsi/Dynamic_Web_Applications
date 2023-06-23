// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Reducer function
function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + STEP_AMOUNT;
    case DECREMENT:
      return state - STEP_AMOUNT;
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

  // Dispatch function
  function dispatch(action) {
    state = reducer(state, action); // Update the state by calling the reducer with the current state and action
    subscribers.forEach((subscriber) => subscriber(state)); // Notify subscribers with the updated state
  }

  // Subscribe function
  function subscribe(subscriber) {
    subscribers.push(subscriber); // Add the subscriber to the array
  }

  return {
    dispatch,
    subscribe,
  };
}

// Usage
const store = createStore(reducer);

// Subscribe to state changes and log them to the console
store.subscribe((state) => {
  console.log('State:', state);
});

// Dispatch actions
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: RESET });
