import React from 'react'
import { Routes, Route, useLocation} from "react-router-dom";
import {Form} from "./components/form/Form"
import Table from "./components/table/Table"
import {AnimatePresence} from "framer-motion"

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <div className="contianer">
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Table />}></Route>
          <Route path="/add" exact element={<Form />}></Route>
          <Route path="/update/:id" exact element={<Form mode="edit" />}></Route>
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default AnimatedRoutes