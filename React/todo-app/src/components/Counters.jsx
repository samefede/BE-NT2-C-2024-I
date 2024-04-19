import React from 'react'

export default function Counters({ todos }) {

    const uncheckedCount = todos.reduce((acc, todo) => {
        return todo.completed ? acc : acc + 1
      },0)
    

    return (
        <div className="flow-right controls">
            <span>Item count: <span id="item-count">{todos.length}</span></span>
            <span>Unchecked count: <span id="unchecked-count">{uncheckedCount}</span></span>
        </div>
    )
}
