import React from "react";
import styles from "./ReduxCounter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counterSlice";

const ReduxCounter = () => {
  // useSelector라는 훅을 통해 redux store에 있는 상태값을 가져옴
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // 리덕스 스토어에 상태값 변경을 위해 액션을 호출하는 훅
  const dispatch = useDispatch();

  //
  const { increment, decrement, multiply, toggle } = counterActions;

  const increaseHandler = (e) => {
    // redux store에 접근해서 상태값을 변경시켜야 함
    // 리덕스에서는 상태값 변경을 위해 액션함수를 호출해야 함.
    // 액션 함수는 리덕스 스토어 내부에 있는 리듀서가 가지고 있음.

    // dispatch에는 인자로 어떤 변경을 할지 type과 변경에 필요한
    // payload를 전송
    dispatch(increment());
  };

  const decreaseHandler = (e) => {
    dispatch(decrement());
  };

  const multiplyHandler = (e) => {
    dispatch(multiply(2));
  };

  const toggleHandler = (e) => {
    dispatch(toggle());
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>

      {show && <div className={styles.value}>{counter}</div>}

      <div>
        <button onClick={increaseHandler}>Increment</button>
        <button onClick={decreaseHandler}>Decrement</button>
        <button onClick={multiplyHandler}>IncrementDouble</button>
      </div>

      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default ReduxCounter;
