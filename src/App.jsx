import "./styles/custom.css";
import { useState } from "react";
import SingleTodo from "./components/SingleTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const [input, setInput] = useState("");

  // function that handles addition of new todo
  const handleTodo = (e) => {
    e.preventDefault();
    //get the input
    // spread todo variable and append an id, and the new todo
    const randomNumber = Math.floor(Math.random() * 1000);
    setTodo({ ...todo, id: randomNumber, todo: input });
    setTodos([todo, ...todos]);
  };

  return (
    <div className="App">
      <form onSubmit={(e) => handleTodo(e)}>
        <input
          required
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
      <SingleTodo />
    </div>
  );
}

export default App;
