import { useState } from "react";
import styles from "./List.module.css";

export function List({ tasks, onDelete, onEdit }) {
    const [editingTask, setEditingTask] = useState(null);
    const [newTaskName, setNewTaskName] = useState("");
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleDelClick = (e) => {
        onDelete(e);
    };

    const handleEditClick = (taskId) => {
        setEditingTask(taskId);
        const taskToEdit = tasks.find((task) => task.id === taskId);
        setNewTaskName(taskToEdit);
    };

    const handleEditCancel = () => {
        setEditingTask(null);
        setNewTaskName("");
    };

    const handleEditSave = () => {
        if (typeof newTaskName === "string" && newTaskName.trim() !== "") {
            onEdit(editingTask, newTaskName);
            setEditingTask(null);
            setNewTaskName("");
        } else {
            alert("Task name cannot be empty");
        }
    };

    const handleDoneClick = (taskId) => {
        if (completedTasks.includes(taskId)) {
            setCompletedTasks((prevCompletedTasks) =>
                prevCompletedTasks.filter(
                    (completedTask) => completedTask !== taskId
                )
            );
        } else {
            setCompletedTasks((prevCompletedTasks) => [
                ...prevCompletedTasks,
                taskId,
            ]);
        }
    };

    return (
        <ul className={styles.ulList}>
            {tasks.map((task) => (
                <li key={task.id}>
                    {editingTask === task.id ? (
                        <div className={styles.editTaskContainer}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder={task.taskName}
                                onChange={(e) => setNewTaskName(e.target.value)}
                            />
                            <div className={styles.editTaskContainerDiv}>
                                <button onClick={handleEditCancel}>
                                    Cancel
                                </button>
                                <button onClick={handleEditSave}>Save</button>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.divButtons}>
                            <p
                                className={
                                    completedTasks.includes(task.id)
                                        ? styles.completedTask
                                        : ""
                                }
                            >
                                {task.taskName}
                            </p>
                            <div className={styles.buttons}>
                                <button onClick={() => handleDelClick(task.id)}>
                                    DEL
                                </button>
                                <button
                                    onClick={() => handleEditClick(task.id)}
                                >
                                    EDIT
                                </button>
                                <button
                                    onClick={() => handleDoneClick(task.id)}
                                >
                                    DONE
                                </button>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}
