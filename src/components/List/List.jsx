import styles from "./List.module.css";

export function List({ tasks, onDelete }) {
    const handleDelClick = (e) => {
        console.log(e);
        onDelete(e);
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
                        <button>EDIT</button>
                        <button>DONE</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
