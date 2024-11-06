import React from "react";

function Task({ task, toggleTaskCompletion}) {
    return (
        <li onClick={() => toggleTaskCompletion(task.id)} style={{textDecoration:task.completed ? 'line-through':'none',cursor:'pointer'}}>
            {task.text}
        </li>
    );
}

export default Task;