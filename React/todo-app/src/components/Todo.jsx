import React from 'react'

export default function Todo({ todo, key, deleteTodo, checkTodo }) {
  return (
    <li className="todo-container" key={key}>
      <input type="checkbox" className="todo-checkbox" checked={todo.completed} onChange={() => checkTodo(todo.id)} />
      <span className="todo-item">{todo.name}</span>
      <button className="button todo-delete" onClick={() => deleteTodo(todo.id)}>Eliminar</button>
    </li>
  )
}
