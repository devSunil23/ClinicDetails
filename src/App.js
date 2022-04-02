import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
const App = () => {
  const [dataDoctor, setdataDoctor] = useState([]);
  const [pateint, setpateint] = useState([]);
  const [doctorApointMent, setDoctorApointMent] = useState([]);
  let findDoctorDet = async () => {
    try {
      const res = await axios.get(
        "https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails"
      );
      const res1 = await axios.get(
        "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails"
      );
      const res2 = await axios.get(
        "https://619f39821ac52a0017ba467e.mockapi.io/appointment_details"
      );
      setdataDoctor(res.data);
      setpateint(res1.data);
      setDoctorApointMent(res2.data);
    } catch (error) {
      console.log(`api fetch error: ${error}`);
    }
  };
  useEffect(() => {
    findDoctorDet();
  }, []);
  return (
    <>
      <Router>
        <div className="container">
          <Header dataDoctor={dataDoctor} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  pateint={pateint}
                  dataDoctordoctorApointMent={doctorApointMent}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
