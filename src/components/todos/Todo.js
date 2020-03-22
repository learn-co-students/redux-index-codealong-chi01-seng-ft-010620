import React from 'react'

const Todo = props => {
    console.log(props)
    debugger
    return <li>{props.todo}</li>
}

export default Todo