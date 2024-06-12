
import AddTODO from "./components/AddTODO";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <>
      <AppName/>
      <div className="container">
       <AddTODO/>
       <TodoItem/>
      </div>
    </>
  );
}

export default App;
