import { useState } from 'react';
import './App.css';
import Form from './Components/Form';

function App() {
    const [darkMode, setMode] = useState(false);

    const changeMode = () => {
        if (!darkMode) {
            document.body.style.backgroundColor = '#999';
            setMode(true);
        } else {
            document.body.style.backgroundColor = 'white';
            setMode(false);
        }
    };
    return (
        <div className="App">
            <div className="change-mode">
                <input
                    type="checkbox"
                    name="mode"
                    id="dark-mode-input"
                    onChange={changeMode}
                ></input>
                <label htmlFor="dark-mode-input" className="dark-mode-label"></label>
            </div>
            <div className="container">
                <Form>
                    <div id="alert"></div>
                </Form>
            </div>
        </div>
    );
}

export default App;
