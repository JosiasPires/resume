import { useState } from 'react'
import General from './General';
import Education from './Education';
import './App.css'

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
      start: '2024',
      end: ''
    }
  ])
  return (
    <>
      <form>
        <General info={generalInfo} setInfo={setGeneralInfo}></General>
        <Education info={educationInfo} setInfo={setEducationInfo}></Education>
      </form>
      
    </>
  )
}

export default App
