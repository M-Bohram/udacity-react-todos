import { useState } from 'react'

import Todos from './components/Todos'
import TodoForm from './components/TodoForm'


const App = () => {
  const [todos, setTodos] = useState([])
const [id, setId] = useState(0)
const [currentComp, setCurrentComp] = useState("todoform")

  const onAddTodo = (todoTitle) => {
    setTodos([...todos, { id , title: todoTitle}])
    setId(id + 1)
  }

  const handleComponentChange = (comp) => {
    setCurrentComp(comp)
  }

  return (
    <div className="App">
      <button onClick={() => handleComponentChange("todos")}>Todos</button>
      <button onClick={() => handleComponentChange("todoform")}>TodoForm</button>
      { currentComp === "todos" && <Todos todos={todos} /> }
      { currentComp === "todoform" && <TodoForm onAddTodo={onAddTodo} /> }
    </div>
  );
};

export default App;
