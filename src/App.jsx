import { useState } from 'react'
import Question from './components/question'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Question />
    </>
  )
}

export default App
