import React, { useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {
  const defaultObj ={
    type:'',
    id: "1"
  }
  const [state,dispatch] = useReducer(todoReducer,[defaultObj]);
  
  return (
    <div id="main">
      <AddTodo dispatch={dispatch} />
     {/* Render list of Todo Components here */}
     <Todo state={state} dispatch={dispatch}/>
    </div>
  )
}


export default App;
