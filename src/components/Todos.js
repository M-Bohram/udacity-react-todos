import React from 'react'
import PropTypes from 'prop-types'


function Todos({ todos }) {

    return (
        <ul>
           { todos.map(todo => <li key={todo.id}>{todo.title}</li>) }
        </ul>
    )
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos
