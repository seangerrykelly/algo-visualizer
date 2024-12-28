export const quickSort = (arr: number[]): number[] => {
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
    return [...quickSort(lower), pivot, ...quickSort(greater)]
}