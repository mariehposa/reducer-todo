import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reducer from './reducers/Reducer';
import Todolist from './components/TodoList'

function App() {
  return (
    <div className="App">
      <Todolist initialStateObject={initila} />
    </div>
  );
}

export default App;
