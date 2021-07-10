import React, { useState } from 'react'
import './TodoCreate.css'

const TodoCreate = (props) => {
    const [getInputTodo, setInputTodo] = useState('')

    const hanldeSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getInputTodo
        }

        props.onCreateTodo(newTodo)
        setInputTodo('')
        console.log(newTodo)

    }

    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
        // console.log(getInputTodo)
    }
    return (
        <div>
            <form className="todo-form" onSubmit={hanldeSubmit}>
                <input type="text" value={getInputTodo} onChange={handleInputTodo}></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoCreate
