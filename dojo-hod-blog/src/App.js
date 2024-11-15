import "./App.css";

function App() {
  const title = "Welcome to the new blog by HOD";
  const like = 50;
  const person = true;
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>likes {like} times</p>
        <p>{`Hello I am ${like} Cents`}</p>
      </div>
    </div>
  );
}

export default App;
