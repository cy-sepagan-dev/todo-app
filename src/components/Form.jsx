import { useState } from "react";
import TaskList from "./TaskList";

export default function Form() {
    const[task, setTask] = useState('');
    const[pending, setPending] = useState([]);    
    const[complete, setComplete] = useState([]);

    function handleNewTask(e){
        e.preventDefault();
        if (task.trim() === "") return;
        setPending([...pending, task]);
        setTask("");
    }

    function handleComplete(index) {
        const taskToComplete = pending[index];
        setPending(pending.filter((_, i) => i !== index)); // remove from pending
        setComplete([...complete, taskToComplete]); 
    }

    function handleDelete(index) {
        setComplete(pending.filter((_, i) => i !== index)); 
    }

    return (
        <>
            <h1>Todo List App</h1>
            <p>{task}</p>
            <form onSubmit={handleNewTask}>
                <input 
                    type="text"
                    value={task}
                    placeholder="Enter Task"
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>

            <TaskList
                title="Pendings"
                listing={pending}
                onClick={handleComplete}
            />

            <TaskList
                title="Completed"
                listing={complete}
                onClick={handleDelete}
            />
        </>
    );
}

export function CompleteButton({onClick}) {
    return(
        <button onClick={onClick}>
            Mark as Complete
        </button>
    );
}

export function DeleteButton({onClick}) {
    return(
        <button onClick={onClick}>
            Delete Task
        </button>
    );
}
