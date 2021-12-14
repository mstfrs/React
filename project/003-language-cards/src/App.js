import "./App.css";
import Card from "./components/card/Card";
import { categories } from "./helper/data";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src="../public/logo.png" alt="" />
        <h1>Languages</h1>
        <div class="cardcontainer">
          {categories.map((card) => (
            <Card key={card.name} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
