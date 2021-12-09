import "./App.css";
import TestComponent from "./TestComponent";

function App() {
  // const [isVisible,setisVisible]=;
  return (
    <div className="App">
      <h1>Clarusway</h1>
      {/* {isVisible ? <TestComponent color="green" /> : null} */}
      <TestComponent />
      <button>Unmount</button>
    </div>
  );
}

export default App;
