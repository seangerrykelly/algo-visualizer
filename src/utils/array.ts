export const generateArray = (arraySize: number, min: number, max: number): number[] => {
    const array: number[] = []
    
    for (let i = 0; i < arraySize; i++) {
        const val = generateRandomElement(min, max)
        array.push(val)
    }

    return array
}

export const generateRandomElement = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}