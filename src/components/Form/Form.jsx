import { useState } from "react";
import styles from "./Form.module.css";

export function Form({ hideForm }) {
    const [inputValue, setInputValue] = useState("");

    const handleButtonClick = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== "") {
            console.log(inputValue);
            setInputValue("");
            hideForm(false);
        } else {
            console.error("Pole nie może być puste");
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
                {" "}
                Add{" "}
            </button>
        </form>
    );
}
