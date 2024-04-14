import React from 'react'
import { useState, useEffect } from 'react'

export default function TaskList(list) {
  const [newList, setList] = useState([])

  useEffect(() => {
    setList(list.arrayProp)
  }, [list.arrayProp])

  
  function deleteTodo(index){
    setList(newList.filter((_, i) => i !== index))
  }
 
  const checkTodo = (index) => {
    const updatedList = [...list.arrayProp];
    updatedList[index].completed = !updatedList[index].completed;
    setList(updatedList);
  };

  return (
    <div>
        <ul id="todo-list" className="todo-list">
        {newList.map((element, index) => (
          <li className="todo-container" key={index}>
            <input type="checkbox" className="todo-checkbox" checked={element.completed} onChange={() => checkTodo(index)}/>
            <span className="todo-item">{element.name}</span>
            <button className="button todo-delete" onClick={() => deleteTodo(index)}>Eliminar</button>
          </li>
          ))}
        </ul>
    </div>
  )
}
