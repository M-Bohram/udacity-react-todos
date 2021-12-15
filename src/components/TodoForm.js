import { useState } from 'react'

// export class TodoForm extends Component {
export function TodoForm ({ onAddTodo }){

    // state = {
    //     input: ''
    // }
    const [input, setInput] = useState("")

    // handleChange = (event) => {
    //     this.setState({ input: event.target.value })
    // }
    const handleChange = (event) => {
        setInput(event.target.value)
    }

    // handleClick = () => {
    //     this.props.onAddTodo(this.state.input)
    // }

    const handleClick = () => {
        onAddTodo(input)
    }

    // render() {
        return (
            <div>
                <input 
                    // value={this.state.input}
                    // onChange={this.handleChange}
                    value={input}
                    onChange={handleChange}
                />
                {/* <button onClick={this.handleClick}>Add Todo</button>
                 */}
                <button onClick={handleClick}>Add Todo</button>
            </div>
        )
    // }
}

export default TodoForm
