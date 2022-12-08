import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <Router>
      <Navigation />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
