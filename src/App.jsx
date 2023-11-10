import "./App.css";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";

function App() {
    return (
        <>
            <h1 className="headerH1">todolist-react.js</h1>
            <div className="container">
                <Form />
                <List />
            </div>
        </>
    );
}

export default App;
