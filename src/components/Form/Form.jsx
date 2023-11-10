import styles from "./Form.module.css";

export function Form() {
    return (
        <form className={styles.form}>
            <input type="text" placeholder="Task Name" />
            <button> Add </button>
        </form>
    );
}
