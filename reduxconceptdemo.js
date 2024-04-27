const redux = require("redux");

const reducer = (state = { counter: 0 }, action) => {
  if (action.type == "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
};

const store = redux.createStore(reducer);

// console.log(store.getState());

const subscriber = () => {
  const latestValue = store.getState();
  console.log(latestValue);
};

store.subscribe(subscriber);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });

