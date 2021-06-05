import { useContext } from 'react';
import { Button, ButtonGroup, Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CounterContext } from 'App';
import ComponentC from './ComponentC';

const ComponentB = () => {
  const { counter, dispatch } = useContext(CounterContext);
  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline >
          ComponentB Counter <Badge color="secondary">{ counter.counter }</Badge>
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={ () => dispatch({type: 'increment'}) } > Increment 1 </Button>
        <Button color="dark" onClick={ () => dispatch({type: 'decrement'}) } > Decrement 1 </Button>
        <Button color="danger" onClick={ () => dispatch({type: 'reset'}) } > Reset </Button>
      </ButtonGroup>
      <p></p>
      <ComponentC />
    </div>

  );
}

export default ComponentB;
