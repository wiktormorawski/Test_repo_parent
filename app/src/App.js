import "./App.css";
import ComponentC from "./Test_repo_submodule/component";
import ComponentB from "./Test_repo_submodule/ComponentB";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponentC />
        <ComponentB />
      </header>
    </div>
  );
}

export default App;
