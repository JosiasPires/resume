import { useState } from 'react'
import General from './General';
import './App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: 'John Doe',
    email: 'example@email.com',
    phone: '(01) 2345-6789',
    profession: 'Web Developer',
    aboutMe: 'lorem ipsum dolor sit amet'
  });
  return (
    <>
      <form>
        <General info={generalInfo} setInfo={setGeneralInfo}></General>
      </form>
      
    </>
  )
}

export default App
