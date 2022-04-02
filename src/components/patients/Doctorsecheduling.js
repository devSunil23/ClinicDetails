import React from "react";
import UpcommingContent from "./UpcommingContent";

const Doctorsecheduling = ({ doctorApointMent }) => {
  return (
    <>
      <div className="doctorSechedul11">
        <p className="schedulePara1 activeUpcoming">Upcoming Appointments</p>
        <p className="schedulePara2">Past Appointments</p>
        <p className="schedulePara3">Medical Records</p>
      </div>
      <div className="doctorSchdulepart1">
        <div className="doctorSechedule2">
          <div className="doctorSechedule21">Root Canal Treatment</div>
          <div className="doctorSechedule22">
            <i className="fa-solid fa-angle-up arrowi"></i>
            <p>Show Previous Treatment</p>
          </div>
        </div>
        <div className="upCommingContent">
          <UpcommingContent
            date="26 Nov '19"
            time="09.00-10.00"
            treatMent="Open Access"
            dentist="Drg. Adam H"
            Nurse="Jeshi Camila"
          />
          <UpcommingContent
            date="30 Nov '19"
            time="09.00-10.00"
            treatMent="Open Access"
            dentist="Drg. Adam H"
            Nurse="Jeshi Camila"
          />
          <UpcommingContent
            date="30 Dec '19"
            time="09.00-10.00"
            treatMent="Open Access"
            dentist="Drg. Adam H"
            Nurse="Jeshi Camila"
          />
        </div>
      </div>
    </>
  );
};

export default Doctorsecheduling;
