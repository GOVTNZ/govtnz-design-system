let idCounter = 0

export const generateId = (prefix: string): string => {
  idCounter++
  return `${prefix}_${idCounter}`
}
