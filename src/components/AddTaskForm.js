import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskText) return;
        addTask(taskText);
        setTaskText('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="New Task"
        />
        <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskForm;