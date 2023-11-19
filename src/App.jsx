import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";

function App() {
    const [formVisibility, setFormVisibility] = useState(false);
    const [tasks, setTasks] = useState([
        { taskName: "Make this web", id: 1 },
        {
            taskName:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo mollitia corporis aut, quo, voluptas excepturi recusandae facilis beatae eum nesciunt optio magni. Officiis, error! Nostrum ut natus quasi exercitationem.",
            id: 2,
        },
    ]);

    const handleButtonClick = () => {
        setFormVisibility(true);
    };

    const addTask = (taskName) => {
        const newTask = {
            taskName,
            done: false,
            id: Math.floor(Math.random() * 1000) + 1,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleDelete = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const handleEdit = (taskId, newTaskName) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, taskName: newTaskName } : task
            )
        );
    };

    return (
        <>
            <h1 className="headerH1">todolist-react.js</h1>
            <div className="container">
                <div className="containerHeader">
                    <h2>Your Tasks</h2>
                    <button onClick={handleButtonClick}>+</button>
                </div>
                {formVisibility && (
                    <Form hideForm={setFormVisibility} addTask={addTask} />
                )}
                <hr />
                <List
                    tasks={tasks}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            </div>
        </>
    );
}

export default App;
