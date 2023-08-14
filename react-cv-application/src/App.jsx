import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolDateStart, setSchoolDateStart] = useState("");
  const [schoolDateEnd, setSchoolDateEnd] = useState("");
  const [degree, setDegree] = useState("");
  const [company, setCompany] = useState("");
  const [companyDateStart, setCompanyDateStart] = useState("");
  const [companyDateEnd, setCompanyDateEnd] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    console.log(submittedData);
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
        lastName: lastName,
        email: email,
        phone: phone,
        summary: summary,
        schoolName: schoolName,
        schoolDateStart: schoolDateStart,
        schoolDateEnd: schoolDateEnd,
        degree: degree,
        company: company,
        companyDateStart: companyDateStart,
        companyDateEnd: companyDateEnd,
        position: position,
        responsibilities: responsibilities
      })
    }
  };

  return (
    <>
      <form >
        <div id="inner-form-container" className={active ? "show-btn" : "hide-btn"}>
          <div className="general-information-container" >
            <label>General Info</label>
            <br />
            <input placeholder="First name" type="text" value={firstName} id="first-name-input" onChange={(e) => setFirstName(e.target.value)}/>
            <input placeholder="Last name" type="text" value={lastName} id="last-name-input" onChange={(e) => setLastName(e.target.value)}/>
            <br />
              <input placeholder="Email" type="email" id="email-input" onChange={(e) => setEmail(e.target.value)}/>
              <input placeholder="Phone" type="number" id="phone-input" onChange={(e) => setPhone(e.target.value)}/>
          </div>

          
          <div className="summary-input-container">
            <label>Summary</label>
            <br />
              <input placeholder="Summary" type="text" id="summary-input" onChange={(e) => setSummary(e.target.value)}/>
          </div>

          
          <div className="education-information">
            <label>Education</label>
            <br />
              <input placeholder="School" type="text" id="school-input" onChange={(e) => setSchoolName(e.target.value)}/>
              <input placeholder="Date Start" type="date" id="education-date-start-input" onChange={(e) => setSchoolDateStart(e.target.value)}/>
              <input placeholder="Date End" type="date" id="education-date-end-input" onChange={(e) => setSchoolDateEnd(e.target.value)}/>
            <br />
              <input placeholder="Degree" type="text" id="degree-input" onChange={(e) => setDegree(e.target.value)}/>
          </div>

          
          <div className="experience-information">
            <label>Experience</label>
            <br />
              <input placeholder="Company" type="text" id="company-input" onChange={(e) => setCompany(e.target.value)}/>
              <input placeholder="Date Start" type="date" id="experience-date-start-input" onChange={(e) => setCompanyDateStart(e.target.value)}/>
              <input placeholder="Date End" type="date" id="experience-date-end-input" onChange={(e) => setCompanyDateEnd(e.target.value)}/>
            <br />
              <input placeholder="Position" type="text" id="position-input" onChange={(e) => setPosition(e.target.value)}/>
            <br />
              <input placeholder="Responsibilities" type="text" id="resp-input" onChange={(e) => setResponsibilities(e.target.value)}/>
          </div>
        </div>

        <div className="button-container">
          <input onClick={buttonClick} className={active ? "show-btn" : "hide-btn"} type="submit" value="SUBMIT" id="submit-btn" />

        </div>
      </form>




      <div id="cv-show">
        <div className={active ? "hide-btn" : "show-btn"}>
          <div className="general-information-container2" >
            <label>General Info</label>
            <br />
              <p>{firstName}</p>
              <p>{lastName}</p>
            <br />
              <p>{email}</p>
              <p>{phone}</p>
            <br />
          </div>

            
          <div className="summary-input-container2">
            <label>Summary</label>
            <br />
              <p>{summary}</p>
          </div>

            
          <div className="education-information2">
            <label>Education</label>
            <br />
            <p>{schoolName}</p>
            <br />
              <p>{degree}</p>
              <p>{schoolDateStart}</p>
              <p>{schoolDateEnd}</p>
          </div>

            
          <div className="experience-information2">
            <label>Experience</label>
            <br />
              <p>{company}</p>
              <p>{companyDateStart}</p>
              <p>{companyDateEnd}</p>
            <br />
              <p>{position}</p>
            <br />
              <p>{responsibilities}</p>
          </div>
        </div>
      </div>
      <div className="button-container">
          <input onClick={buttonClick} className={active ? "hide-btn" : "show-btn"} type="button" value="EDIT" id="edit-btn" />
        </div>
    </>
  )
}

export default App
// style={{ display: display ? "none" : "initial" }}
// style={{ display: display ? "initial" : "none" }}