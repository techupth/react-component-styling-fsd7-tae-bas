import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="Primary" />
        <br /> <br />
        <Button type="Error" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
      </div>
    </div>
  );
}

export default App;
