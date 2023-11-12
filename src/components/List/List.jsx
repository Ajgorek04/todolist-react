import styles from "./List.module.css";

export function List({ tasks }) {
    return (
        <ul className={styles.ulList}>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    );
}
