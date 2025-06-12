import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    name: "Shovan",
    age: 25,
    city: "Kolkata"
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>Tailwind test</h1>

      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <Card userName= "Shovan" btnText= "Visit here"/>
        <Card userName="JB-007" btnText= "Read more"/>
      </div>

    </>
  )
}

export default App
