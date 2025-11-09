import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState(undefined);

  function addTodos() {
    try {
      const newTodo = document.getElementById("newTodo").value;

      console.info(newTodo)
      setTodos(todos => [...todos, { id: nanoid(), text: newTodo }]);

      axios.post("https://super-duper-space-guacamole-97gvqqw75jpvcxjrg-4000.app.github.dev/api/todos", {
        newTodo
      })
    }
    catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  useEffect(() => {
    axios
      .get("https://super-duper-space-guacamole-97gvqqw75jpvcxjrg-4000.app.github.dev/api/todos")
      .then(res => setTodos(res.data));
  }, []);

  if (!todos) return <h1>"Loading..."</h1>;

  return (
    <>

      <ul>
        <li>
          <label htmlFor="newTodo">I should </label>
          <input type="text" id="newTodo" name="newTodo"></input>
          <button type="button" onClick={addTodos}>Add</button>
        </li>
        {todos.map((t) => <li key={t.id}>{t.text}</li>)}
      </ul>
    </>
  );


}

export default App;
