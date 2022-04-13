//import {Route, Routes}  from 'react-router-dom'
import TodoPage         from './pages/TodoPage'
//import Layout           from './components/layout/Layout'
import Margin           from './components/margin/Margin'
import classes          from './App.module.css'
//import {uuid} from 'uuid/v4'




function App() 
{ // this is called props
  return (
    <>
      <div className={classes.app}>
        <Margin/>
      </div >
      <TodoPage />    
    </>

  )
/*
  return( 
    <Layout>
      <Routes>
        <Route path="/" element={<TodoPage />}   />
      </Routes>
    </Layout>
  )
  */
}

export default App;