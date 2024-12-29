export const quickSort = (arr: number[], steps: number[][] = []): number[] => {
    if (arr.length <= 1) {
        return arr
    }
    const pivot = arr.pop() as number
    const lower: number[] = []
    const greater: number[] = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            lower.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }

    steps.push([...lower, pivot, ...greater])
    console.log('curr steps: ', steps);

    return [...quickSort(lower, steps), pivot, ...quickSort(greater, steps)]
}

export const quickSortSteps = (arr: number[]): { steps: number[][], sorted: number[]} => {
    const steps: number[][] = []
    const sortedArray = quickSort(arr, steps)
    console.log('steps: ', steps)
    return { steps, sorted: sortedArray }
};