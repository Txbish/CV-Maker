import { useState } from "react";
import "./App.css";
import PersonalInfoForm from "../components/personalInfoForm";
import EducationForm from "../components/educationForm";
import ExperienceForm from "../components/experienceForm";
import CV from "../components/cv";
function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  return (
    <div className="container">
      <div className="all-forms">
        <PersonalInfoForm
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <EducationForm education={education} setEducation={setEducation} />
        <ExperienceForm experience={experience} setExperience={setExperience} />
      </div>
      <div className="live-preview">
        <CV
          personal={personalInfo}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}

export default App;
