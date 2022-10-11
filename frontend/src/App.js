import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import {Navigation} from "./components/navigation/Navigation"
import {Form} from "./components/form/Form"
import Table from "./components/table/Table"

function App() {
  return (
    <Router>
      <Navigation />
      <div className="contianer">
        <Routes>
          <Route path="/" exact element={<Table />}></Route>
          <Route path="/add" exact element={<Form />}></Route>
          <Route
            path="/update/:id"
            exact
            element={<Form mode="edit" />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
