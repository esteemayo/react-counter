import { useState } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleIncrement = (counter) => {
    const newCounters = [...counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    setCounters(newCounters);
  };

  const handleDecrement = (counter) => {
    const newCounters = [...counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value--;
    setCounters(newCounters);
  };

  const handleReset = () => {
    const counter = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(counter);
  };

  const handleDelete = (counterId) => {
    const updCounter = counters.filter((c) => c.id !== counterId);
    setCounters(updCounter);
  };

  return (
    <>
      <NavBar totalCounters={counters.filter((c) => c.value > 0).length} />
      <menu className="container">
        <Counters
          counters={counters}
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </menu>
    </>
  );
}

export default App;
