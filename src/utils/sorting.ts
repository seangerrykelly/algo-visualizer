// BASIC SORTING ALGORITHMS. All of these have time complexity of O(n^2)

// Bubble Sort: Compare adjacent elements and swap them if they are out of order
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

// Selection Sort: Select the smallest element repeatedly and move it to its correct position
export const selectionSort = (arr: number[]): number[] => {
    const sortedArray = [...arr]
    for (let i = 0; i < sortedArray.length; i++) {
        let minimum = i
        
        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[j] < sortedArray[minimum]) {
                minimum = j
            }
        }

        if (minimum !== i) {
            [sortedArray[i], sortedArray[minimum]] = [sortedArray[minimum], sortedArray[i]]
        }
    }
    return sortedArray
}

// Insertion Sort: Create the sorted list element by element by inserting values into their proper position
export const insertionSort = (arr: number[]): number[] => {
    const sortedArray = [...arr]

    // Start at second element since we have nothing to compare the first one to
    for (let i = 1; i < sortedArray.length; i++) {
        const curr = sortedArray[i]
        let j = i - 1

        while (j >= 0 && sortedArray[j] > curr) {
            sortedArray[j + 1] = sortedArray[j]
            j -= 1
        }

        sortedArray[j + 1] = curr
    }

    return sortedArray
}

// DIVIDE AND CONQUER ALGORITHMS: These have time complexity of O(nlogn) on average, although quick sort is O(n^2) at worst

// Quick Sort: Recursively partition the array into arrays greater than or less than the chosen pivot element
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

// Merge Sort: Recursively divide array into subarrays that have a single element, then merge them in order
export const mergeSort = (arr: number[]): number[] => {
    const sortedArray = [...arr]

    if (sortedArray.length <= 1) {
        return sortedArray
    }

    const midpoint = Math.floor(sortedArray.length / 2)
    const leftArr = sortedArray.slice(0, midpoint)
    const rightArr = sortedArray.slice(midpoint)

    const sortedLeft = mergeSort(leftArr)
    const sortedRight = mergeSort(rightArr)

    return merge(sortedLeft, sortedRight)
}

const merge = (leftArr: number[], rightArr: number[]): number[] => {
    const mergedArr: number[] = []
    let i = 0
    let j = 0

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            mergedArr.push(leftArr[i])
            i += 1
        } else {
            mergedArr.push(rightArr[j])
            j += 1
        }
    }

    return mergedArr.concat(leftArr.slice(i)).concat(rightArr.slice(j))
}