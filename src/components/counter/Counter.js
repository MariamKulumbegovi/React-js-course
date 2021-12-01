import { useState } from 'react';
import PropTypes from 'prop-types';
import CounterTitle from './CounterTitle';
export const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const addNumber = () => {
    setCount(count + 1);
  };
  const subtractNumber = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const handleClick = value => {
    setCount(value + count);
  };

  return (
    <div className="container">
      <div className="is-flex is-align-items-center is-justify-content-space-around ">
        <CounterTitle/>
        <div>
          <h1>Counter - {count}</h1>
        </div>
        <div className="m3 ">
          <button className="button is-danger" onClick={addNumber}>
            +
          </button>
          <button className="button is-warning" onClick={subtractNumber}>
            -
          </button>
          <button className="button " onClick={() => handleClick(2)}>
            +2
          </button>
          <button className="button is-dark " onClick={() => handleClick(-2)}>
            -2
          </button>
          <button className="button is-link" onClick={reset}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0,
};
Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
};
