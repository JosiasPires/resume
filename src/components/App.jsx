import { useState } from 'react'
import GeneralForm from './GeneralForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import Preview from './Preview';

import '../styles/App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: 'John Doe',
    email: 'example@email.com',
    phone: '(01) 2345-6789',
    profession: 'Web Developer',
    aboutMe: 'lorem ipsum dolor sit amet'
  });
  const [educationInfo, setEducationInfo] = useState([
    {
      id: crypto.randomUUID(),
      school: "TheOdinProject",
      course: "Web Development",
      description: "I learned tools like HTML, CSS, JS and React",
      start: '2024',
      end: ''
    }
  ]);
  const [experienceInfo, setExperienceInfo] = useState([
    {
      id: crypto.randomUUID(),
      company: "Brisanet",
      position: "Junior Web Developer",
      description: "I developed client-facing and internal apps using tools like TypeScript, ReactJS, Tailwind.",
      start: '2025',
      end: ''
    }
  ])
  return (
    <>
      <form className='scroll-container'>
        <GeneralForm info={generalInfo} setInfo={setGeneralInfo} />
        <EducationForm info={educationInfo} setInfo={setEducationInfo} />
        <ExperienceForm info={experienceInfo} setInfo={setExperienceInfo} />
      </form>
      <Preview generalInfo={generalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
    </>
  )
}

export default App
