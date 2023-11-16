import styles from "./List.module.css";

export function List({ tasks, onDelete }) {
    const handleDelClick = (index) => {
        onDelete(index);
    };

    return (
        <ul className={styles.ulList}>
            {tasks.map((task, index) => (
                <li key={index}>
                    <p>{task}</p>
                    <div className={styles.buttons}>
                        <button onClick={handleDelClick}>DEL</button>
                        <button>EDIT</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
