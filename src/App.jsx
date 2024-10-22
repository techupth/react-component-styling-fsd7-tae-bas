import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="Primary" />
        <br /> <br />
        <Button type="Error" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="Error" />
        <br /> <br />
        <Alert type="Warning" />
        <br /> <br />
        <Alert type="Info" />
        <br /> <br />
        <Alert type="Success" />
      </div>
    </div>
  );
}

export default App;
