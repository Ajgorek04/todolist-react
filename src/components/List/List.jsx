import styles from "./List.module.css";

export function List({ tasks }) {
    return (
        <ul className={styles.ulList}>
            {tasks.map((task, index) => (
                <li key={index}>
                    <p>{task}</p>
                    <div className={styles.buttons}>
                        <button>DEL</button>
                        <button>EDIT</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
