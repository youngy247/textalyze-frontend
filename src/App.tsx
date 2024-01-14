import { useState } from 'react'
import './App.css'
import TextInput from './components/TextInput/TextInput'
import StatisticsDisplay from './components/StatisticsDisplay/StatisticsDisplay'
import { calculateStatistics } from './utils/calculateStatistics'

function App(): JSX.Element {
  const [text, setText] = useState<string>('')

  const statistics = calculateStatistics(text)

  return (
    <div className="App">
      <h1>Text Statistics</h1>
      <TextInput text={text} setText={setText} />
      <StatisticsDisplay statistics={statistics} />
    </div>
  )
}

export default App
