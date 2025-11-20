import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks')
        return saved ? JSON.parse(saved) : []
    })
    const [input, setInput] = useState('')

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (e) => {
        e.preventDefault()
        if (input.trim()) {
            setTasks([...tasks, { id: Date.now(), text: input, completed: false }])
            setInput('')
        }
    }

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ))
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const completedCount = tasks.filter(t => t.completed).length

    return (
        <div className="app">
            <div className="todo-container">
                <div className="header">
                    <h1 className="title">Tasks</h1>
                    <p className="counter">
                        {completedCount} of {tasks.length} completed
                    </p>
                </div>

                <form onSubmit={addTask} className="add-task-form">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add a new task..."
                        className="task-input"
                    />
                    <button type="submit" className="add-btn">
                        + Add
                    </button>
                </form>

                <div className="tasks-list">
                    {tasks.length === 0 ? (
                        <div className="empty-state">
                            <span className="empty-icon">📝</span>
                            <p>No tasks yet. Add one above to get started!</p>
                        </div>
                    ) : (
                        tasks.map((task) => (
                            <div
                                key={task.id}
                                className={`task-item ${task.completed ? 'completed' : ''}`}
                            >
                                <div className="task-content">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleTask(task.id)}
                                        className="checkbox"
                                        id={`task-${task.id}`}
                                    />
                                    <label htmlFor={`task-${task.id}`} className="task-text">
                                        {task.text}
                                    </label>
                                </div>
                                <button
                                    onClick={() => deleteTask(task.id)}
                                    className="delete-btn"
                                    aria-label="Delete task"
                                >
                                    ×
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
