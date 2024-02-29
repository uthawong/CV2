import React from "react";
import CVJsonData from "./CVDisplay.json";
const Mymerits = () => {
  function fetchJsonData(dataType, data) {
    if (dataType === "myCV") {
      return data.map((merits) => (
        <div key={merits.id}>
          <p>{merits.employer}</p>
          <p>{merits.role}</p>
          <p>{merits.hours}</p>
          <p>{merits.dates}</p>
          <br />
          <br />
        </div>
      ));
    } else if (dataType === "myEducation") {
      return data.map((edu) => (
        <div key={edu.id}>
          <p>{edu.school}</p>
          <p>{edu.degreel}</p>
          <p>{edu.timeperiod}</p>
          <br />
          <br />
        </div>
      ));
    }
  }

  return (
    <div>
      <p className="description">
        <div>
          <h1 className="work-title">WORK EXPERIENCE</h1>
          <ul>{fetchJsonData("myCV", CVJsonData.myCV)}</ul>
        </div>
        <div>
          <h1 className="education-title">EDUCATION</h1>
          <ul>{fetchJsonData("myEducation", CVJsonData.myEducation)}</ul>
        </div>
      </p>
    </div>
  );
};
export default Mymerits;
