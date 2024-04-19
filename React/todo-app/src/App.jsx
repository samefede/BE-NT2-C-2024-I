import { useState } from 'react'
import './App.css'
import Todo from './components/Todo';
import Counters from './components/Counters';

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    const todoName = prompt("Nombre de la tarea: ")
    setTodos([...todos,
    {
      id: new Date().getTime(),
      name: todoName,
      completed: false
    }
    ])
    setCount(count + 1)
  }

  function deleteTodo(todoId) {
    const newTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(newTodos)
  }

  const checkTodo = (todoId) => {
    const newTodos = todos.map(todo => {
      return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    })

    setTodos(newTodos)
  };

  return (
    <>
      <div className="container center">
        <h1 className="center title">TODO App</h1>
        <Counters todos={todos} />
        <button className="button center" onClick={addTodo}>Agregar Tarea</button>
        <ul id="todo-list" className="todo-list">
          {
            todos.map(todo => <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} checkTodo={checkTodo} />)
          }
        </ul>
      </div>
    </>
  )
}

export default App
