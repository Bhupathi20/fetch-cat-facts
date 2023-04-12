import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios'

function App() {

  // fetch("https://catfact.ninja/fact")
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data);
  // });

  const [catFacts, setCatFacts] = useState("")

  const fetchcatFact = () => {
    Axios.get("https://catfact.ninja/fact")
  .then((res) => {
    setCatFacts(res.data.fact);
  });
  }
  useEffect(() => {
    fetchcatFact();
  }, []);

  return (
    <div className='App'>
      <button onClick={fetchcatFact}>Generate Cat facts</button>
      <p> {catFacts} </p>
    </div>
  )

}


export default App
