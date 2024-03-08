import "./App.css";
import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

// React.createElement("div", { className: "App" }, React.createElement(TodoWrapper));

export default App;

// import statements needed for the components
// component function declaration it can accept props as a params
// inside the component function state and logic for the component exists
// and finally returns the JSX for the component
// export the function as a component
