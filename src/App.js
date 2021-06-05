import { useReducer, createContext } from 'react';
import { Button, ButtonGroup, Badge } from 'reactstrap';
import './App.css';
import ComponentA from 'components/ComponentA';

export const CounterContext = createContext();
const initialState = {
  counter: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
      case 'decrement':
      return { ...state, counter: state.counter - 1 };
    case 'reset':
      return {...initialState};
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, { ...initialState });

  return (
    <div className="App">
      <ButtonGroup>
        <Button color="primary" outline >
          App Counter <Badge color="secondary">{ state.counter }</Badge>
        </Button>
      </ButtonGroup>
      <p></p>
      <CounterContext.Provider value={{ counter: state, dispatch }} >
        <ComponentA />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
