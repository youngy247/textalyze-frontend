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

  let mostFrequentLength = 0
  let maxFrequency = 0

  words.forEach((word) => {
    const length = word.length
    wordLengthCounts[length] = wordLengthCounts[length] !== undefined ? wordLengthCounts[length] + 1 : 1

    if (wordLengthCounts[length] > maxFrequency) {
      maxFrequency = wordLengthCounts[length]
      mostFrequentLength = length
    }
  })

  return {
    totalWords,
    averageWordLength: 0, // Placeholder, will be implemented later
    mostFrequentLength,
    wordLengthCounts,
  }
}
