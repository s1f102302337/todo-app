import React from "react";
import Task from './Task';

function TaskList({ tasks, toggleTaskCompletion}) {
    return (
        <ul>
            {tasks.map(task => {
                <task key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} />
            })}
        </ul>
    );
}

export default TaskList;