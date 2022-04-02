import React from "react";
import PatientsHeader1 from "./patients/PatientsHeader1";

const Home = ({ pateint, doctorApointMent }) => {
  return (
    <>
      <PatientsHeader1 pateint={pateint} doctorApointMent={doctorApointMent} />
    </>
  );
};

export default Home;
