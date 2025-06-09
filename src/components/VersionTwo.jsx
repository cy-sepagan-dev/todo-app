import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Done - Form na mag aaccept ng new task
// Done - List na mag didisplay ng mga Pending Tasks
// Done - List na mag didisplay ng Complete Task

// Done -  Function na magcrecreate ng new task
// Function na mag Cocomplete ng pending task
// Function na magdedelete ng completed task

export default function VersionTwo() {

    const [newTask, setNewTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const pendings = taskList.filter(task => task.taskStatus === "pending");
    const completed = taskList.filter(task => task.taskStatus === "complete");

    useEffect(() => {
        setTaskList([
            {
                id: uuidv4(),
                title: "Create layout for Form, Pending Tasks, Completed Tasks.",
                taskStatus: "pending"
            },
            {
                id: uuidv4(),
                title: "Make the Usestate accepts value from the input in the Form.",
                taskStatus: "pending"
            },
            {
                id: uuidv4(),
                title: "Make the Usestate accepts value from the input in the Form.",
                taskStatus: "complete"
            }
        ]);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        const trimmedTask = newTask.trim();

        // Validation 1: Prevent Empty Input 
        if (trimmedTask === "") {
            alert("New Task cannot be empty.")
            return;
        }

        // Validation 2: Prevent duplicate task title (optional)
        const isDuplicate = taskList.some(task => task.title.toLowerCase() === trimmedTask.toLowerCase());
        if (isDuplicate) {
            alert("Task already exists.");
            return;
        }

        // If all are valid
        setTaskList([...taskList, {
            id: uuidv4(), 
            title: newTask.trim(), 
            taskStatus: "pending"
        }]);

        setNewTask("");
    }    

    function handleComplete(id) {
        const updateTasks = taskList.map(task => task.id === id ? {...task, taskStatus: 'complete'} : task );        
        setTaskList(updateTasks);
    }

    function handleDelete(id) {
        const updatedTasks = taskList.filter(task => task.id !== id);        
        setTaskList(updatedTasks);
    }

    function handleEdit(id) {
        alert("No Functionality Yet");
    }

    return(
        <div className="p-10 pb-20 bg-white rounded-xl flex flex-col gap-8">
            <div className="text-center">
                <h1 className="text-4xl">Todo List App</h1>
                <h6>React and Tailwind</h6>
            </div>           

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                    type="text" 
                    placeholder="Enter New Task"
                    onChange={(e) => (setNewTask((e).target.value))}
                    value={newTask}
                    className="px-4 py-2 rounded-lg bg-gray-100"
                />

                <button className="px-4 py-2 rounded-lg bg-blue-500 text-white" type="submit">Add Task</button>
            </form>

            <div className="flex gap-4 w-full flex-wrap">
                <div className="p-8 rounded-lg bg-gray-100 grow shrink-0 flex-wrap">
                    <h2 className="mb-4 text-2xl">Pending Tasks</h2>
                    <ul className="flex flex-col gap-2">
                        {pendings.map((task) => (
                            <li key={task.id} className="px-8 py-4 bg-white flex rounded-lg flex-wrap">
                                <span className="grow content-center">{task.title}</span>
                                <span className="flex gap-2">
                                    <button onClick={() => handleEdit(task.id)} className="px-4 py-2 rounded-lg bg-gray-200 ">Edit Task</button>
                                    <button onClick={() => handleComplete(task.id)} className="px-4 py-2 rounded-lg bg-green-500 text-white">Complete</button>
                                </span>
                                
                            </li>

                        ))}
                    </ul>
                </div>

                <div className="p-8 rounded-lg bg-gray-100 grow shrink-0 ">
                    <h2 className="mb-4 text-2xl">Completed Tasks</h2>
                    <ul className="flex flex-col gap-2">
                        {completed.map((task) => (
                            <li key={task.id} className="px-8 py-4 bg-white flex rounded-lg">
                                <span className="grow content-center">{task.title}</span>                                
                                <button onClick={() => handleDelete(task.id)} className="px-4 py-2 rounded-lg bg-red-500 text-white">Delete</button>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>   
            
            <p>v2</p>      
        </div>
    );
}
