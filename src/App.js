import React, { useState } from "react";

import Counter from "./optimizing/components/Counter/Counter";
import Header from "./optimizing/components/Header";
import { log } from "./optimizing/log";
import ConfigureCounter from "./optimizing/components/Counter/ConfigureCounter";
import ReduxCounter from "./redux-practice/components/ReduxCounter";

const App = () => {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  const setCountHandler = (number) => {
    setChosenCount(number);
  };

  return (
    <>
      {/* <Header />
      <main>
        <ConfigureCounter onSet={setCountHandler} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main> */}
      <ReduxCounter />
    </>
  );
};

export default App;
