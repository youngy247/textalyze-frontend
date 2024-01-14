import { calculateStatistics } from './utils/calculateStatistics'

describe('calculateStatistics', () => {
  it('should return zero values for all statistics with an empty string', () => {
    const stats = calculateStatistics('')
    expect(stats.totalWords).toBe(0)
    expect(stats.averageWordLength).toBe(0)
    expect(stats.mostFrequentLength).toBe(0)
    expect(stats.wordLengthCounts).toEqual({})
  })
})

it('should correctly calculate statistics for a basic string', () => {
  const stats = calculateStatistics('Hello world')
  expect(stats.totalWords).toBe(2)
  expect(stats.averageWordLength).toBe(5)
  expect(stats.mostFrequentLength).toBe(5)
  expect(stats.wordLengthCounts).toEqual({ 5: 2 })
})
