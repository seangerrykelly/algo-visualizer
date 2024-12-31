export const bubbleSort = (arr: number[]): number[] => {
    const sortedArray = [...arr]
    for (let i = sortedArray.length - 1; i > 0; i--) {
        let hasSwapped = false
        for (let j = 0; j < i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                [sortedArray[j + 1], sortedArray[j]] = [sortedArray[j], sortedArray[j + 1]]
                hasSwapped = true
            }
        }
        if (!hasSwapped) {
            break
        }
    }
    return sortedArray
}

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

    return [...quickSort(lower, steps), pivot, ...quickSort(greater, steps)]
}

export const quickSortSteps = (arr: number[]): { steps: number[][], sorted: number[]} => {
    const steps: number[][] = []
    const sortedArray = quickSort(arr, steps)
    return { steps, sorted: sortedArray }
};