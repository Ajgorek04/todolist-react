import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";

function App() {
    const [formVisibility, setFormVisibility] = useState(false);
    const [tasks, setTasks] = useState([
        { taskName: "Zadanie 1", done: false, id: 1 },
        { taskName: "Zadanie 2 dłuższe zadanie wiem", done: true, id: 2 },
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
                <List tasks={tasks} onDelete={handleDelete} />
            </div>
        </>
    );
}

export default App;
