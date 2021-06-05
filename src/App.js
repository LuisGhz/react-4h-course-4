import { useReducer } from 'react';
import './App.css';
import ComponentA from 'components/ComponentA';
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

  const [status, dispatch] = useReducer(reducer, { ...initialState })
  return (
    <div className="App">
      <ComponentA />
    </div>
  );
}

export default App;
