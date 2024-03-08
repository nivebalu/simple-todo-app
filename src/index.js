import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 
<input type="text">
  <p id="text">
    text<a href="google.com">google</a>
  </p>
</input> 
*/

// React.createElement(
//   "input",
//   { type: "text" },
//   React.createElement(
//     "p",
//     { id: "text" },
//     "text",
//     React.createElement("a", { href: "google.com" }, "google", null)
//   )
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
