import React from 'react';

export default function TodoList({ todos, toggle }) {
    return (
        <div>
            {
                todos.map(todo => todo.completed ? <p style={{ "textDecoration": "line-through" }} onClick={() => toggle(todo.id)} key={todo.id}> {todo.item} </p> : <p onClick={() => toggle(todo.id)} key={todo.id}> {todo.item} </p>)
            }
        </div>
    );
}