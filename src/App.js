import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {
            data:todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id)
    {
        this.setState(prevState =>{
            let newTodosData = prevState.data.map(todo => {
                if (todo.id === id)
                {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            console.log(prevState.data)
            console.log(newTodosData)
            return {
                data:newTodosData
            }
        })
    }

    render()
    {
        const todoComponent = this.state.data.map(todos => <TodoItem key = {todos.id} item = {todos} handleChange={this.handleChange}/>)
        return (
            <div className="todo-list">
                {todoComponent}
            </div>
        )
    }
}

export default App
