import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import "./styles.css";

// Redux Store
import configureStore from "./shared/redux/configureStore";

// Configuring Redux Store
const store = configureStore(window.initialState);

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
