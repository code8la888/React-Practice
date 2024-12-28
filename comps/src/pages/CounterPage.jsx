import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
const ICREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set_value_to_add";
const SUBMIt_FORM = "submit_form";

const reducer = (state, action) => {
  switch (action.type) {
    case ICREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SUBMIt_FORM:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: ICREMENT_COUNT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: SUBMIt_FORM,
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        ></input>
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
