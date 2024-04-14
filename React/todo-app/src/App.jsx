import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    const todoName = prompt("Nombre de la tarea: ")
    setList([...list, { name: todoName, completed: false }])
    setCount(count + 1)
  }

  function deleteTodo(index, element) {
    if(!element.completed) setCount(count - 1)
    setList(list.filter((_, i) => i !== index))
  }

  const checkTodo = (index) => {
    const updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    if(!updatedList[index].completed) setCount(count + 1);
    else setCount(count - 1);
  };

  return (
    <>
      <div className="container center">
        <h1 className="center title">TODO App</h1>
        <div className="flow-right controls">
          <span>Item count: <span id="item-count">{list.length}</span></span>
          <span>Unchecked count: <span id="unchecked-count">{count}</span></span>
        </div>
        <button className="button center" onClick={addTodo}>Agregar Tarea</button>
        <ul id="todo-list" className="todo-list">
          {list.map((element, index) => (
            <li className="todo-container" key={index}>
              <input type="checkbox" className="todo-checkbox" checked={element.completed} onChange={() => checkTodo(index)} />
              <span className="todo-item">{element.name}</span>
              <button className="button todo-delete" onClick={() => deleteTodo(index, element)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
