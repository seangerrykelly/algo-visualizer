import { useEffect, useState } from "react"
import { generateArray } from "../../utils/array"
import { bubbleSortSteps, insertionSortSteps, mergeSort, mergeSortSteps, quickSortSteps, selectionSortSteps } from "../../utils/sorting"
import { BarChart } from "./BarChart"
import { ButtonContainer, ControlsContainer, SortingVisualContainer } from "./SortingVisualStyles"
import { Button } from "../shared/CommonStyles"
import { PlayIcon, ShuffleIcon } from "lucide-react"

export const SortingVisual = () => {

    const [arraySize, setArraySize] = useState<number>(10)
    const [array, setArray] = useState<number[]>(generateArray(arraySize, 1, 100))
    const [steps, setSteps] = useState<number[][]>([]);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [selectedSort, setSelectedSort] = useState<(() => void) | null>(null)

    // Use setTimeout to animate the sorting algorithm
    useEffect(() => {
        if (steps.length && currentStep < steps.length) {
          const timer = setTimeout(() => {
            setCurrentStep((prev) => prev + 1)
          }, 300)
          return () => clearTimeout(timer) // Cleanup timeout
        }
    }, [steps, currentStep, array])

    const handleClickGenerateButton = () => {
        setArray(generateArray(arraySize, 1,100))
        setSteps([])
        setCurrentStep(0)
    }

    const handleClickQuickSort = () => {
        const { sorted: sortedArray, steps: sortSteps } = quickSortSteps(array)
        setArray(sortedArray)
        setSteps(sortSteps)
    }

    const handleClickMergeSort = () => {
        const { sorted: sortedArray, steps: sortSteps } = mergeSortSteps(array)
        setArray(sortedArray)
        setSteps(sortSteps)
    }

    const handleClickBubbleSort = () => {
        const { sorted: sortedArray, steps: sortSteps } = bubbleSortSteps(array)
        setArray(sortedArray)
        setSteps(sortSteps)
    }

    const handleClickSelectionSort = () => {
        const { sorted: sortedArray, steps: sortSteps } = selectionSortSteps(array)
        setArray(sortedArray)
        setSteps(sortSteps)
    }

    const handleClickInsertionSort = () => {
        const { sorted: sortedArray, steps: sortSteps } = insertionSortSteps(array)
        setArray(sortedArray)
        setSteps(sortSteps)
    }

    // Map the chosen option from the select to its relevant sorting function
    const sortingMethods: { [key: string]: () => void } = {
        quickSort: handleClickQuickSort,
        mergeSort: handleClickMergeSort,
        bubbleSort: handleClickBubbleSort,
        selectionSort: handleClickSelectionSort,
        insertionSort: handleClickInsertionSort,
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMethod = event.target.value;
        setSelectedSort(() => sortingMethods[selectedMethod] || null)
    }

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArraySize(parseInt(event.target.value))
    }

    return (
        <SortingVisualContainer>
            <ControlsContainer>
                <ButtonContainer>
                    <Button variant="primary" onClick={handleClickGenerateButton}>
                        <ShuffleIcon />
                    </Button>
                    <Button variant="primary" onClick={() => selectedSort && selectedSort()} disabled={!selectedSort}>
                        <PlayIcon />
                    </Button>
                </ButtonContainer>
                <select onChange={handleSelectChange}>
                    <option value="">Select a sorting method</option>
                    <option value="quickSort">Quick Sort</option>
                    <option value="mergeSort">Merge Sort</option>
                    <option value="bubbleSort">Bubble Sort</option>
                    <option value="selectionSort">Selection Sort</option>
                    <option value="insertionSort">Insertion Sort</option>
                </select>
            </ControlsContainer>
            <p>Array size: {arraySize}</p>
            <input 
                type="range" 
                value={arraySize} 
                min="1" 
                max="100" 
                onChange={handleSliderChange} 
                style={{ maxWidth: '100vw' }}
            />
            <BarChart values={steps[currentStep] || array} />
        </SortingVisualContainer>
    )
}