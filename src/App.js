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
    }

    render()
    {
        const todoComponent = this.state.data.map(todos => <TodoItem key = {todos.id} item = {todos} />)
        return (
            <div className="todo-list">
                {todoComponent}
            </div>
        )
    }
}

export default App
