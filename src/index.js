import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { FoodProvider } from "./contexts/FoodContext";
import { UserProvider } from "./contexts/UserContext";
import { CategoryProvider } from "./contexts/CategoryContext";

ReactDOM.render(
  <React.StrictMode>
    <FoodProvider>
      <UserProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </UserProvider>
    </FoodProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
