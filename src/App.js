import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import { HomePage } from "./pages/";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
