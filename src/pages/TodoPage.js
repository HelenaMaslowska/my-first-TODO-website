//rfc
import TodoList from '../TodoList'
import React, {useState, useRef, useEffect} from 'react'
import classes from "./TodoPage.css"
import Background from '../Sia.jpg' //use for var and section style

const LOCAL_STORAGE_KEY = 'todoApp.todos'
//const LOCAL_SAVED_DATA = 'todoApp.todossavings'

var background = {
  width: "100%",
  height: "100%",
  //borderRadius: "30px",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 0,
};


export default function TodoPage() {
    const [todos, setTodos] = useState([]) //here you can set default data in curly {} brackets
    const todoNameRef = useRef()


    useEffect(() => 
    {
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if(storedTodos) setTodos(storedTodos)
    }, [])
  
    useEffect(() => 
    {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]) //calls when todos was changed
  
    function toggleTodo(id) 
    {
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id === id)
      todo.complete = ! todo.complete
      setTodos(newTodos)
    }
  
    function handleAddTodo(e) 
    {
      const name = todoNameRef.current.value
      var id = "id" + Math.random().toString(16).slice(2)
      if (name === '') return 
      setTodos(prevTodos => {
        return [...prevTodos, { id: id, name: name, complete: false}] // to use random id download: 'npm i uuid'
      })
      todoNameRef.current.value = null  //after pressing Add Todo it clears input
    }
    
    function handleSubmit(e)
    {
      if (e.key === 'Enter')  handleAddTodo(e)
    }

    function handleClearTodos() 
    {
      const newTodos = todos.filter(todo => !todo.complete)
      setTodos(newTodos)
    }
    function handleClearAllTodos() 
    {
      setTodos([])
    }
  
    return (
      <section style={background}>
        <div className='page'>
          <div className='pageitems'>
            <div>
                <h1> TODO today </h1>
                <input onKeyPress={handleSubmit} ref={todoNameRef} type="text"/>  
            </div>
            <button  onClick={handleAddTodo}>Add Todo </button>{/*make everything what is onClick and after that u unpress the button*/}
            <TodoList todos = {todos} toggleTodo={toggleTodo}/> {/*useState needs to have something in*/}
            <b><p>{todos.filter(todo => !todo.complete).length} left to do</p></b>
            <button onClick={handleClearTodos}>Clear completed</button>   
            <button onClick={handleClearAllTodos}>Clear all</button>   
          </div>
        </div>
      </section>
    )
}
