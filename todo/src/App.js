import React, {useReducer} from 'react';
import './App.css';
import {reducer, initialStateObject, ADD_TODO, TOGGLE_TODO, CLEAR_MARKED} from './reducers/Reducer';
import Todolist from './components/TodoList';
import TodoForm from "./components/TodoForm";

function App() {
  const [ data, dispatch ] = useReducer(reducer, initialStateObject)
  
  const onAddTodo = (formValues, actions) => {
    const newValue = formValues.todo;
    dispatch({
      type: ADD_TODO,
      payload: { item: newValue }
    })
    actions.resetForm()
  }

  const toggleField = (id) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: {id: id}
    })
  }

  const clearMarked = () => {
    dispatch({
      type: CLEAR_MARKED
    })
  }
  return (
    <div className="App">
      <Todolist todos={data} toggle={toggleField}/>
      <TodoForm onSubmit={onAddTodo} />
      <button className="button" onClick={() => clearMarked()} > Clear Marked</button>
    </div>
  );
}

export default App;
