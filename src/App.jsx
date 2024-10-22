import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="error" massage="This is error alert box" />
        <Alert type="warning" massage="This is warning alert box" />
        <Alert type="info" massage="This is info alert box" />
        <Alert type="success" massage="This is success alert box" />
      </div>
    </div>
  );
}

export default App;
