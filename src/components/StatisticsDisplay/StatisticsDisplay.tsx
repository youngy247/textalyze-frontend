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
  // const { totalWords, averageWordLength, mostFrequentLength, wordLengthCounts } = statistics;

  return <div>StatisticsDisplay</div>
}

export default StatisticsDisplay
