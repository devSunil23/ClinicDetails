import React from "react";

const PateintInfoCard = ({ title, titleans }) => {
  return (
    <>
      <div className="patientInfoCard">
        <p className="pInfoName">{title}</p>
        <p className="infoDetail">{titleans}</p>
      </div>
    </>
  );
};

export default PateintInfoCard;
