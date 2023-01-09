import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
};

const ReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, { age: 22 });
  return (
    <div>
      <br />
      <br />
      <br />
      <h3>Use Reducer Hook:</h3>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <p>Hello!You are {state.age}.</p>
    </div>
  );
};

export default ReducerDemo;
