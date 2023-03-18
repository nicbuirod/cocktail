import React from "react";
import { Provider } from "react-redux";
import "./App.scss";
import store from "./store";

import { CustomRouter } from "./router";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CustomRouter />
      </div>
    </Provider>
  );
}

export default App;
