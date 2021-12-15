import { Component } from "react";

import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

class App extends Component {
  state = {
    id: 0,
    todos: [],
  };

  onAddTodo = (todoTitle) => {
    this.setState({
      todos: [...this.state.todos, { id: this.state.id, title: todoTitle }],
      id: this.state.id + 1,
    }); 
  };

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
        <TodoForm onAddTodo={this.onAddTodo} />
      </div>
    );
  }
}

export default App;
