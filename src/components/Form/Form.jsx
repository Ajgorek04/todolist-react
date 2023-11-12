import { useState } from "react";
import styles from "./Form.module.css";

export function Form({ hideForm, addTask }) {
    const [inputValue, setInputValue] = useState("");

    const handleButtonClick = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== "") {
            addTask(inputValue);
            setInputValue("");
            hideForm(false);
        } else {
            console.error("The field cannot be empty");
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <form className={styles.form}>
            <input
                className={styles.formInput}
                type="text"
                placeholder="Task Name"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button className={styles.formButton} onClick={handleButtonClick}>
                Add
            </button>
        </form>
    );
}
