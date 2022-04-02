import React from "react";
import PateintInfoCard from "./PateintInfoCard";

const PatientDetails = ({ pateint }) => {
  return (
    <>
      <div className="pateintDeatilsLeft">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzQ5ODgwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
          alt="img"
          className="patientImage"
        />
        <p className="pateintProfileName">{pateint[0]?.name}</p>
        <p className="patientEmail">diana.copper@example.com</p>
        <div className="pastUpcomming">
          <div className="past">
            <p className="pastCount">{pateint[0]?.Past}</p>
            <p className="pastName">Past</p>
          </div>
          <div className="upComming">
            <p className="upCommingCount">{pateint[0]?.Upcoming}</p>
            <p className="upCommingName">UpComming</p>
          </div>
        </div>
        <button className="sendButton">Send Message</button>
      </div>
      <div className="pateintDeatilsRight">
        <PateintInfoCard title="Gender" titleans={pateint[0]?.Gender} />
        <PateintInfoCard title="Birthday" titleans={pateint[0]?.Birthday} />
        <PateintInfoCard title="Phone Number" titleans="11111" />
        <PateintInfoCard
          title="Street Address"
          titleans="JI. Diponegoro No. 21"
        />
        <PateintInfoCard title="ZIP Code" titleans="655849" />
        <PateintInfoCard title="Member Status" titleans="Active Member" />
        <PateintInfoCard title="Register Date" titleans="Feb 24th, 1997" />
      </div>
    </>
  );
};

export default PatientDetails;
