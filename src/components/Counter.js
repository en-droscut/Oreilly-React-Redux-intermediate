// import { Component } from 'react';
// import { connect } from 'react-redux';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from "../store/counter"

const Counter = () => {
  const dispatch = useDispatch();
  // selector to select one of the props
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    // dispatch({ type: 'increase', amount: 10});
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  }

  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle'});
    dispatch(counterActions.toggleCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && 
        <div className={classes.value}>
          {counter}
        </div>
      }

        <div>
          <button onClick={decrementHandler}>-</button>
          <button onClick={increaseHandler}>+10</button>
          <button onClick={incrementHandler}>+</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (<main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>+</button>
//         <button onClick={this.decrementHandler.bind(this)}>-</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>);
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type:'increment'}),
//     decrement: () => dispatch({type:'decrement'}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
