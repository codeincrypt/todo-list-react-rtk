import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Todo from "./page/Todo";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Todo />
      </BrowserRouter>
    </Provider>
  );
}

export default App;