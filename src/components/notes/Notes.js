import React from "react";

const Notes = () => {
  return (
    <>
      <div className="notes1">
        <p className="notesLeft">Notes</p>
        <p className="notesRight">See all</p>
      </div>
      <div className="notes2">
        <li className="notesPara">The patient Lorem ipsum dolor sit.</li>
        <li className="notesPara">Lorem ipsum dolor sit amet.</li>
        <li className="notesPara">Lorem ipsum dolor sit amet.</li>
        <button className="saveData">save Note</button>
      </div>
      <div className="notes3">
        <p className="notes3Para">Lorem ipsum dolor sit.</p>
        <div className="notes3det">
          <i className="fa-regular fa-user noteUser"></i>
          <p className="drgName">Drg. Mega Nanade</p>
          <p className="note3Date">20 Nov'19</p>
        </div>
      </div>
    </>
  );
};

export default Notes;
