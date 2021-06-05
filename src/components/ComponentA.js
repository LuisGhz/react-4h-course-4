import { useContext } from 'react';
import { Button, ButtonGroup, Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CounterContext } from 'App';

const ComponentA = () => {
  const { counter, dispatch } = useContext(CounterContext);
  return (
    <div>
      <ButtonGroup>
        <Button color="primary" outline >
          ComponentA Counter <Badge color="secondary">{ counter.counter }</Badge>
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={ () => dispatch({type: 'increment'}) } > Increment 1 </Button>
        <Button color="dark" onClick={ () => dispatch({type: 'decrement'}) } > Decrement 1 </Button>
        <Button color="danger" onClick={ () => dispatch({type: 'reset'}) } > Reset </Button>
      </ButtonGroup>
    </div>
  );
}

export default ComponentA;
