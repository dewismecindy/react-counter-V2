import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStopwatch,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";

library.add(faStopwatch, faPlus, faMinus);

function App() {
  const [counter, setCounter] = useState([0]);

  return (
    <div className="App">
      <Header />
      <main>
        <section className="button">
          {counter.length < 3 && (
            <input
              type="submit"
              value="Add counter"
              onClick={() => {
                const counterReapeat2 = [...counter];
                counterReapeat2.push(0);
                setCounter(counterReapeat2);
              }}
            />
          )}

          {counter.length > 2 && (
            <input
              type="submit"
              value="Reset"
              onClick={() => {
                const counterReapeat2 = [...counter];
                for (let i = 0; i < counterReapeat2.length; i++) {
                  counterReapeat2.pop();
                }
                setCounter(counterReapeat2);
              }}
            />
          )}
        </section>
        <section>
          <div className="counters">
            {counter.map((element, index) => {
              return (
                <Counter
                  index={index}
                  counter={counter}
                  setCounter={setCounter}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
