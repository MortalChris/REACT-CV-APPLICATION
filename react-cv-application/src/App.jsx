// import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <form>
        <div id="general-information-container">
            <input placeholder="First name" type="text" name="first-name" id="first-name-input" />
            <input placeholder="Last name" type="text" name="last-name" id="last-name-input" />

            <input placeholder="Email" type="email" name="email" id="email-input" />
            <input placeholder="Phone" type="text" name="phone-number" id="phone-input" />
        </div>

        <div id="Summary-input-container">
            <input placeholder="Summary" type="text" name="summary" id="summary-input" />
        </div>

        <div id="education-information">
            <input placeholder="School" type="text" name="school-name" id="school-input" />
            <input placeholder="Degree" type="text" name="degree" id="degree-input" />

            <input placeholder="Date Start" type="date" name="date-of-start" id="education-date-start-input" />
            <input placeholder="Date End" type="date" name="date-of-end" id="education-date-end-input" />
        </div>

        <div id="experience-information">
            <input placeholder="Company" type="text" name="company-name" id="company-input" />
            <input placeholder="Position" type="text" name="position-title" id="position-input" />
            <input placeholder="Responsibility" type="text" name="responsibilities" id="resp-input" />

            <input placeholder="Date Start" type="date" name="date-of-start" id="experience-date-start-input" />
            <input placeholder="Date End" type="date" name="date-of-end" id="experience-date-end-input" />
        </div>
        <div id="button-container">
          <button onSubmit="" >Submit</button>
        </div>
      </form>
    </>
  )
}

export default App
