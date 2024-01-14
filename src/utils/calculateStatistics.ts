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

  const averageWordLength = totalWords > 0 ? words.reduce((acc, word) => acc + word.length, 0) / totalWords : 0

  return {
    totalWords,
    averageWordLength,
    mostFrequentLength,
    wordLengthCounts,
  }
}
