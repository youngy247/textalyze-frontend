export interface Statistics {
  totalWords: number
  averageWordLength: number
  mostFrequentLength: number
  wordLengthCounts: Record<string, number>
}

export const calculateStatistics = (text: string): Statistics => {
  const words = text.split(/\s+/).filter(Boolean)
  const totalWords = words.length
  return {
    totalWords,
    averageWordLength: 0, // Placeholder, will be implemented later
    mostFrequentLength: 0, // Placeholder, will be implemented later
    wordLengthCounts: {}, // Placeholder, will be implemented later
  }
}
