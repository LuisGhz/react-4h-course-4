import { useReducer } from 'react';
import { Button, ButtonGroup, Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  counter1: 0,
  counter2: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment1':
      return { ...state, counter1: state.counter1 + 1 };
      case 'decrement1':
      return { ...state, counter1: state.counter1 - 1 };
    case 'increment2':
      return { ...state, counter2: state.counter2 + 1 };
      case 'decrement2':
      return { ...state, counter2: state.counter2 - 1 };
    case 'reset':
      return {...initialState};
    default:
      return state;
  }
}

const Counter = () => {

  const [count, dispatch] = useReducer(reducer, {...initialState});

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline >
          Counter1 <Badge color="secondary">{ count.counter1 }</Badge>
        </Button>
        <Button color="primary" outline >
          Counter2 <Badge color="secondary">{ count.counter2 }</Badge>
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={ () => dispatch({type: 'increment1'}) } > Increment 1 </Button>
        <Button color="dark" onClick={ () => dispatch({type: 'decrement1'}) } > Decrement 1 </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={ () => dispatch({type: 'increment2'}) } > Increment 2 </Button>
        <Button color="dark" onClick={ () => dispatch({type: 'decrement2'}) } > Decrement 2 </Button>
      </ButtonGroup>
      <p></p>
      <Button color="danger" onClick={ () => dispatch({type: 'reset'}) } > Reset </Button>
    </div>
  );
}

export default Counter;