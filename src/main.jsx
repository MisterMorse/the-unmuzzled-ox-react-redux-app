import { createRoot } from "react-dom/client"
import { Provider } from "react-redux";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.jsx"
import store from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={ store }>
    <App />
  </Provider>,
)
