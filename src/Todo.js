import React from 'react'
import classes from './Todo.module.css';

export default function Todo({ todo, toggleTodo }) //component
{
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div>
    <div className={classes.background}>
        <label className={classes.container}>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
            <div className={classes.setname}> {todo.name}</div>              
            <span className={classes.checkmark} ></span>
        </label>
    </div>
  </div>
  )
}
