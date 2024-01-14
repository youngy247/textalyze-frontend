interface Statistics {
  totalWords: number
  averageWordLength: number
  mostFrequentLength: number
  wordLengthCounts: Record<string, number>
}

interface StatisticsDisplayProps {
  statistics: Statistics
}
