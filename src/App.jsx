import React from "react";
import Navbar from "./components/Navbar/Navbar";
import CohortList from "./components/CohortList/CohortList";
import StudentList from "./components/StudentList/StudentList";
import "./styles/";

const App = () => {
  return (
    <div>
      <Navbar />
      <CohortList />
      <StudentList />
    </div>
  );
};

export default App;
