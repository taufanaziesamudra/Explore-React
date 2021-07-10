import React from 'react'
import './TodoList.css'

const TodoList = (props) => {
    // console.log(props)
    return (
        <div>
            <ul>
                {
                    props.dataTodos.map((todo) => {
                        return <li key={todo.id}>{todo.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList
