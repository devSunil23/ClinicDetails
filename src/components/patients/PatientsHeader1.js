import React from "react";
import Badge from "@mui/material/Badge";
import PatientDetails from "./PatientDetails";
import Doctorsecheduling from "./Doctorsecheduling";
import Files from "../Files/Files";
import Notes from "../notes/Notes";
const PatientsHeader1 = ({ pateint, doctorApointMent }) => {
  return (
    <>
      <div className="patientHeader">
        <div className="patientHeader1">
          <div className="pheaderLeft">
            <i className="fa-regular fa-user"></i>
            <p className="patientName">{pateint[0]?.name}</p>
          </div>
          <div className="pheaderRight">
            <i className="fa fa-search searchIcon"></i>
            <input type="text" className="searchPatient" placeholder="Search" />
            <i className="fa-solid fa-plus"></i>
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent=" "
              variant="dot"
            >
              <i className="fa-solid fa-bell"></i>
            </Badge>
          </div>
        </div>
        <div className="patientHeader2">
          <div className="pHeader2Left">
            <span className="patientList">Patient List</span>
            <i className="fa-solid fa-greater-than"></i>
            <span className="patientName1">{pateint[0]?.name}</span>
          </div>
          <div className="pHeader2Right">
            <i className="fa-solid fa-print"></i>
            <div className="editPatient">
              <i className="fas fa-edit"></i>
              <span className="editPatinet1">Edit Patient</span>
            </div>
          </div>
        </div>
        <div className="patientDeatailsContainer">
          <div className="patientSummaryLeft">
            <div className="patientSummaryLeft1">
              <PatientDetails pateint={pateint} />
            </div>
            <div className="patientSummaryLeft2">
              <Doctorsecheduling doctorApointMent={doctorApointMent} />
            </div>
          </div>
          <div className="patientSummaryRight">
            <div className="patientSummaryRigh1">
              <Notes />
            </div>
            <div className="patientSummaryRigh2">
              <Files />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientsHeader1;
