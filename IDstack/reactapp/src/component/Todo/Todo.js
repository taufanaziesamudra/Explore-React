import React from 'react'
import TodoCreate from '../TodoCreate/TodoCreate'
import TodoList from '../TodoList/TodoList'
import './Todo.css'
import { useState } from 'react'

const Todo = () => {
    const [getTodos, setTodos] = useState([
        { id: 1, title: 'eat' },
        { id: 2, title: 'sleep' },
        { id: 3, title: 'code' }
    ])

    const eventCreateTodo = (todo) => {
        /* todo.push() */
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }
    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo} />
            <TodoList dataTodos={getTodos} />
        </div>
    )
}

export default Todo
