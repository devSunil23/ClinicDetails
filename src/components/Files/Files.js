import React from "react";
import Filespdfdet1 from "./Filespdfdet1";
import Filespdfdet2 from "./Filespdfdet2";

const Files = () => {
  return (
    <>
      <div className="fileTop">
        <p className="fileTopLeft">Files/Documents</p>
        <div className="addFiles">
          <i className="fa-solid fa-file-circle-plus"></i>
          <p className="addFiles">Add Files</p>
        </div>
      </div>
      <div className="filepdfDet">
        <Filespdfdet1 />
        <Filespdfdet2 />
        <Filespdfdet1 />
        <Filespdfdet2 />
      </div>
    </>
  );
};

export default Files;
