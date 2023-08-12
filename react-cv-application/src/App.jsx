import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    console.log(submittedData?.firstName + " " + submittedData?.lastName);
  }, [submittedData]);

  const buttonClick = (e) => {
    e.preventDefault();
    setActive(!active);
    if (!active) {
      console.log("clicked edit button.");
    } else {
      console.log("clicked submit");
      setSubmittedData({
        firstName: firstName,
        lastName: lastName
        // email: email,
        // phone: phone,
        // summary: summary,
        // schoolName: schoolName,
        // schoolDateStart: schoolDateStart,
        // schoolDateEnd: schoolDateEnd,
        // degree: degree,
        // company: company,
        // companyDateStart: companyDateStart,
        // companyDateEnd: companyDateEnd,
        // position: position,
        // responsibilities: responsibilities
      })
    }
    //hide inputs
    //display value of inputs
    //hide submit button
    //display edit button
  };

  return (
    <>
      <form>
        <div id="general-information-container">
          <label>General Info</label>
          <br />
          <input placeholder="First name" type="text" value={firstName} id="first-name-input" onChange={(e) => setFirstName(e.target.value)}/>
          <input placeholder="Last name" type="text" value={lastName} id="last-name-input" onChange={(e) => setLastName(e.target.value)}/>
          <br />
            <input placeholder="Email" type="email" name="email" id="email-input" />
            <input placeholder="Phone" type="number" name="phone-number" id="phone-input" />
        </div>

        
        <div id="Summary-input-container">
          <label>Summary</label>
          <br />
            <input placeholder="Summary" type="text" name="summary" id="summary-input" />
        </div>

        
        <div id="education-information">
          <label>Education</label>
          <br />
            <input placeholder="School" type="text" name="school-name" id="school-input" />
            <input placeholder="Date Start" type="date" name="date-of-start" id="education-date-start-input" />
            <input placeholder="Date End" type="date" name="date-of-end" id="education-date-end-input" />
          <br />
            <input placeholder="Degree" type="text" name="degree" id="degree-input" />
        </div>

        
        <div id="experience-information">
          <label>Experience</label>
          <br />
            <input placeholder="Company" type="text" name="company-name" id="company-input" />
            <input placeholder="Date Start" type="date" name="date-of-start" id="experience-date-start-input" />
            <input placeholder="Date End" type="date" name="date-of-end" id="experience-date-end-input" />
          <br />
            <input placeholder="Position" type="text" name="position-title" id="position-input" />
          <br />
            <input placeholder="Responsibilities" type="text" name="responsibilities" id="resp-input" />
        </div>


        <div id="button-container">
          <input onClick={buttonClick} className={active ? "show-btn" : "hide-btn"} type="submit" value="Submit" id="submit-btn" />
          <input onClick={buttonClick} className={active ? "hide-btn" : "show-btn"} type="button" value="Edit" id="edit-btn"/>
        </div>
      </form>
    </>
  )
}

export default App
// style={{ display: display ? "none" : "initial" }}
// style={{ display: display ? "initial" : "none" }}