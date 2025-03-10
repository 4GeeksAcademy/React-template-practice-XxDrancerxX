🟢 Easy Level (1-3)
1️⃣ Counter with useState
👉 Task: Create a counter with a "Increase" and "Decrease" button.

jsx
Copy
Edit
function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
}

ReactDOM.render(<Counter />, document.getElementById("root"));
📌 Concepts: useState, event handling.

2️⃣ Toggle Text with useState
👉 Task: Show "Hello" or "Goodbye" when clicking a button.

jsx
Copy
Edit
function ToggleText() {
    const [text, setText] = React.useState("Hello");

    return (
        <div>
            <h2>{text}</h2>
            <button onClick={() => setText(text === "Hello" ? "Goodbye" : "Hello")}>
                Toggle Text
            </button>
        </div>
    );
}

ReactDOM.render(<ToggleText />, document.getElementById("root"));
📌 Concepts: useState, conditional rendering.

3️⃣ Show/Hide Element
👉 Task: Create a button that toggles visibility of a paragraph.

jsx
Copy
Edit
function ShowHide() {
    const [visible, setVisible] = React.useState(true);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Hide" : "Show"} Text
            </button>
            {visible && <p>This is some text!</p>}
        </div>
    );
}

ReactDOM.render(<ShowHide />, document.getElementById("root"));
📌 Concepts: useState, conditional rendering (&& operator).

🟡 Medium Level (4-7)
4️⃣ Input Field Updater
👉 Task: Type something in an input field and show it in real time.

jsx
Copy
Edit
function InputUpdater() {
    const [text, setText] = React.useState("");

    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <p>You typed: {text}</p>
        </div>
    );
}

ReactDOM.render(<InputUpdater />, document.getElementById("root"));
📌 Concepts: useState, onChange event.

5️⃣ Dark Mode Toggle
👉 Task: Toggle between light and dark mode.

jsx
Copy
Edit
function DarkMode() {
    const [dark, setDark] = React.useState(false);

    return (
        <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black", height: "100vh", textAlign: "center" }}>
            <button onClick={() => setDark(!dark)}>Toggle Dark Mode</button>
            <p>{dark ? "Dark Mode ON" : "Light Mode ON"}</p>
        </div>
    );
}

ReactDOM.render(<DarkMode />, document.getElementById("root"));
📌 Concepts: useState, inline styles.

6️⃣ Fetch Data with useEffect
👉 Task: Fetch and display a random joke when clicking a button.

jsx
Copy
Edit
function FetchJoke() {
    const [joke, setJoke] = React.useState("");

    function getJoke() {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(res => res.json())
            .then(data => setJoke(`${data.setup} - ${data.punchline}`));
    }

    return (
        <div>
            <button onClick={getJoke}>Get Joke</button>
            <p>{joke}</p>
        </div>
    );
}

ReactDOM.render(<FetchJoke />, document.getElementById("root"));
📌 Concepts: useState, fetch(), API calls.

7️⃣ Timer with useEffect
👉 Task: Show a timer that updates every second.

jsx
Copy
Edit
function Timer() {
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
        return () => clearInterval(interval);
    }, []);

    return <h2>Timer: {seconds}s</h2>;
}

ReactDOM.render(<Timer />, document.getElementById("root"));
📌 Concepts: useState, useEffect, setInterval.

🔴 Hard Level (8-10)
8️⃣ Debounced Input (useEffect)
👉 Task: Delay updating the text when typing fast.

jsx
Copy
Edit
function DebouncedInput() {
    const [text, setText] = React.useState("");
    const [debouncedText, setDebouncedText] = React.useState("");

    React.useEffect(() => {
        const timer = setTimeout(() => setDebouncedText(text), 500);
        return () => clearTimeout(timer);
    }, [text]);

    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <p>Debounced Output: {debouncedText}</p>
        </div>
    );
}

ReactDOM.render(<DebouncedInput />, document.getElementById("root"));
📌 Concepts: useState, useEffect, setTimeout.

9️⃣ To-Do List
👉 Task: Add and remove items from a list.

jsx
Copy
Edit
function TodoList() {
    const [tasks, setTasks] = React.useState([]);
    const [task, setTask] = React.useState("");

    function addTask() {
        if (task) setTasks([...tasks, task]);
        setTask("");
    }

    function removeTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((t, i) => (
                    <li key={i}>{t} <button onClick={() => removeTask(i)}>X</button></li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<TodoList />, document.getElementById("root"));
📌 Concepts: useState, updating arrays.

🔟 Stop Timer Button
👉 Task: Start, stop, and reset a timer.

jsx
Copy
Edit
function Stopwatch() {
    const [time, setTime] = React.useState(0);
    const [running, setRunning] = React.useState(false);

    React.useEffect(() => {
        if (running) {
            const interval = setInterval(() => setTime((prev) => prev + 1), 1000);
            return () => clearInterval(interval);
        }
    }, [running]);

    return (
        <div>
            <h2>Time: {time}s</h2>
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Stop</button>
            <button onClick={() => setTime(0)}>Reset</button>
        </div>
    );
}

ReactDOM.render(<Stopwatch />, document.getElementById("root"));
📌 Concepts: useState, useEffect, conditional rendering.

