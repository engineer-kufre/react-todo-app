import React, {Component} from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy milk'},
      {id: 2, content: 'play music'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random() * 10;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
