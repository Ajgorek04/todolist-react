import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";

function App() {
    const [formVisibility, setFormVisibility] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleButtonClick = () => {
        setFormVisibility(true);
    };

    const addTask = (task) => {
        setTasks([...tasks, task]);
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
                <List tasks={tasks} />
            </div>
        </>
    );
}

export default App;
