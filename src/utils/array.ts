export const generateArray = (arraySize: number, min: number, max: number): number[] => {
    const array: number[] = []
    
    for (let i = 0; i < arraySize; i++) {
        const val = Math.floor(Math.random() * (max - min + 1) + min)
        array.push(val)
    }

    return array
}