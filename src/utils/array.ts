export const generateArray = (min: number, max: number): number[] => {
    const array: number[] = []
    
    for (let i = 0; i < 10; i++) {
        const val = Math.floor(Math.random() * (max - min + 1) + min)
        array.push(val)
    }

    return array
}