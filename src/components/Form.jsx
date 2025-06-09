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
        setComplete(complete.filter((_, i) => i !== index)); 
    }

    return (
        <div className="mx-auto flex flex-col container my-9">
            <h1 className="text-6xl mb-9">Todo List App</h1>

            <div className="flex gap-9">
                <form onSubmit={handleNewTask} className="bg-blue-100 basis-1/3 p-9 flex flex-col gap-4 rounded-xl">
                    <label htmlFor="taskInput" className="">Enter a new Task :</label>
                    <input 
                        className="p-4 rounded-lg"
                        type="text"
                        value={task}
                        placeholder="Enter Task"
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button type="submit" className="p-4 bg-blue-500 text-white rounded-lg">Add Task</button>
                </form>

                <div className="basis-2/3">
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
                </div>
            </div>            
        </div>
    );
}

export function CompleteButton({onClick}) {
    return(
        <button className="p-4 bg-green-500 text-white rounded-lg" onClick={onClick}>
            Mark as Complete
        </button>
    );
}

export function DeleteButton({onClick}) {
    return(
        <button className="p-4 bg-red-500 text-white rounded-lg" onClick={onClick}>
            Delete Task
        </button>
    );
}
