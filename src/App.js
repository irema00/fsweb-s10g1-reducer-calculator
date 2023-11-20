import React from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

import { useReducer } from "react";
import reducer, { initialState } from "../src/reducers/index";

import { addOne, applyNumber, changeOperation } from "./actions/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const eventHandler = () => {
  //   return dispatch(addOne());
  // };

  const eventHandler = (number) => {
    return dispatch(applyNumber(number));
  };

  const operationHandler = (operation) => {
    return dispatch(changeOperation(operation));
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                /*onClick={eventHandler}*/ onClick={() => eventHandler(1)}
              />
              <CalcButton value={2} onClick={() => eventHandler(2)} />
              <CalcButton value={3} onClick={() => eventHandler(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => eventHandler(4)} />
              <CalcButton value={5} onClick={() => eventHandler(5)} />
              <CalcButton value={6} onClick={() => eventHandler(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => eventHandler(7)} />
              <CalcButton value={8} onClick={() => eventHandler(8)} />
              <CalcButton value={9} onClick={() => eventHandler(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operationHandler("+")} />
              <CalcButton value={"*"} onClick={() => operationHandler("*")} />
              <CalcButton value={"-"} onClick={() => operationHandler("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
