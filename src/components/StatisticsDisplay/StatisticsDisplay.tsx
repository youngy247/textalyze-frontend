import React from 'react'

interface Statistics {
  totalWords: number
  averageWordLength: number
  mostFrequentLength: number
  wordLengthCounts: Record<string, number>
}

interface StatisticsDisplayProps {
  statistics: Statistics
}

const StatisticsDisplay: React.FC<StatisticsDisplayProps> = ({ statistics }) => {
  const { totalWords, averageWordLength, mostFrequentLength, wordLengthCounts } = statistics

  return (
    <div>
      <p>Total Words: {totalWords}</p>
      <p>Average Word Length: {averageWordLength.toFixed(2)}</p>
      <p>Most Frequently Occurring Word Length: {mostFrequentLength}</p>
      <p>Word Length Counts:</p>
      <ul>
        {Object.keys(wordLengthCounts).map((length) => (
          <li key={length}>
            Length {length}: {wordLengthCounts[length]} words
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StatisticsDisplay
