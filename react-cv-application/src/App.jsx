// import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <form>
        <div id="general-information-container">
          <label>General Info</label>
          <br />
            <input placeholder="First name" type="text" name="first-name" id="first-name-input" />
            <input placeholder="Last name" type="text" name="last-name" id="last-name-input" />
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
          <button onSubmit="" >Submit</button>
        </div>
      </form>
    </>
  )
}

export default App
