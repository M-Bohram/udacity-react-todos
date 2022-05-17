import { useState } from 'react'

const TodoForm = ({ onAddTodo }) => {
    const [input, setInput] = useState("")

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleClick = () => {
        // action
        // console.log(input)
        onAddTodo(input)
        setInput("")
    }

  return (
    <div>
        <input
            value={input}
            onChange={handleChange}
        />
        <br />
        <button onClick={handleClick}>Add Todo</button>
    </div>
  )
}

export default TodoForm