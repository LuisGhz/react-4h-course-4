import { useReducer } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
  return (
    <div>
      <ButtonGroup>
        <Button color="dark" > Left </Button>
        <Button color="dark" > Center </Button>
        <Button color="danger" > Right </Button>
      </ButtonGroup>
    </div>
  );
}

export default Counter;