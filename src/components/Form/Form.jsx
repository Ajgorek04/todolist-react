import { useState } from "react";
import styles from "./Form.module.css";

export function Form() {
    const [inputValue, setInputValue] = useState("");

    const handleButtonClick = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== "") {
            console.log(inputValue);
            setInputValue("");
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
                type="text"
                placeholder="Task Name"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}> Add </button>
        </form>
    );
}
