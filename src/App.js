import "../src/css/app.scss";
import RouteComponent from "./common/route-component.tsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app poisition-relative">
      <BrowserRouter basename="/project">
        <RouteComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
