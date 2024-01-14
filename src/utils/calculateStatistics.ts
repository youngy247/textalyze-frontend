export interface Statistics {
  totalWords: number
  averageWordLength: number
  mostFrequentLength: number
  wordLengthCounts: Record<string, number>
}

export const calculateStatistics = (text: string): Statistics => {
  const words = text.split(/\s+/).filter(Boolean)
  const totalWords = words.length

  const wordLengthCounts: Record<number, number> = {}

  words.forEach((word) => {
    const length = word.length
    wordLengthCounts[length] = wordLengthCounts[length] !== undefined ? wordLengthCounts[length] + 1 : 1
  })

  return {
    totalWords,
    averageWordLength: 0, // Placeholder, will be implemented later
    mostFrequentLength: 0, // Placeholder, will be implemented later
    wordLengthCounts,
  }
}
