import styles from "./List.module.css";

export function List({ tasks, onDelete, onEdit }) {
    const handleDelClick = (e) => {
        onDelete(e);
    };

    const handleEditClick = (e) => {
        const newTaskName = prompt("edycja");
        onEdit(e, newTaskName);
    };

    return (
        <ul className={styles.ulList}>
            {tasks.map((task) => (
                <li key={task.id}>
                    <p>{task.taskName}</p>
                    <div className={styles.buttons}>
                        <button onClick={() => handleDelClick(task.id)}>
                            DEL
                        </button>
                        <button onClick={() => handleEditClick(task.id)}>
                            EDIT
                        </button>
                        <button>DONE</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
