import React from "react";

const UpcommingContent = ({ date, time, treatMent, dentist, Nurse }) => {
  return (
    <>
      <div className="doctortimeDateCard">
        <div className="dtimeDate">
          <p className="dDate">{date}</p>
          <p className="dTime">{time}</p>
        </div>
        <div className="dtreatMent">
          <p className="TreatMent">Treatment</p>
          <p className="TreatMedium">{treatMent}</p>
        </div>
        <div className="ddentist">
          <p className="dentist">Dentist</p>
          <p className="dentistName">{dentist}</p>
        </div>
        <div className="dnurse">
          <p className="nurse">Nurse</p>
          <p className="nurseName">{Nurse}</p>
        </div>
        <div className="dnote">
          <i className="fa-solid fa-book"></i>
          <p className="note">Note</p>
        </div>
      </div>
    </>
  );
};

export default UpcommingContent;
