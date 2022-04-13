import React from 'react'
import classes from './TodoList.module.css'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {

  return (      //u can return only 1 thing
      
      //<div>{todos.length}</div>       //curly brackets means js code 

        todos.map(todo => //each element is map and returned as Todo component
            {
                return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo}/>
            }
        )
  )
}
