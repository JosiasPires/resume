import { useState } from 'react'
import './App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: 'John Doe',
    email: 'example@email.com',
    phone: '(01) 2345-6789',
    profession: 'Web Developer',
    aboutMe: 'lorem ipsum dolor sit amet'
  });
  return (
    <>
      
    </>
  )
}

export default App
