import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"


function App() {
    const todoComponent = todosData.map(todos => <TodoItem key = {todos.id} item = {todos} />)
    return (
        <div className="todo-list">
            {todoComponent}
        </div>
    )
}

export default App
