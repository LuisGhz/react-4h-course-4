import { useReducer } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  counter1: 0,
  counter2: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter1: ++state.counter1 };
      case 'decrement':
      return { ...state, counter1: --state.counter1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>{ count.counter1 }</div>
      <ButtonGroup>
        <Button color="dark" onClick={ () => dispatch({type: 'increment'}) } > Increment </Button>
        <Button color="dark" onClick={ () => dispatch({type: 'decrement'}) } > Decrement </Button>
        <Button color="danger" onClick={ () => dispatch({type: 'reset'}) } > Reset </Button>
      </ButtonGroup>
    </div>
  );
}

export default Counter;