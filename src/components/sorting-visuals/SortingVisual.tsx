import { useEffect, useState } from "react"
import { generateArray } from "../../utils/array"
import { bubbleSortSteps, insertionSortSteps, mergeSort, mergeSortSteps, quickSortSteps, selectionSortSteps } from "../../utils/sorting"
import { BarChart } from "./BarChart"
import { ButtonContainer, SortingVisualContainer } from "./SortingVisualStyles"
import { Button } from "../shared/CommonStyles"

export const SortingVisual = () => {

    const [arraySize, setArraySize] = useState<number>(10)
    const [array, setArray] = useState<number[]>(generateArray(arraySize, 1, 100))
    const [steps, setSteps] = useState<number[][]>([]);
    const [currentStep, setCurrentStep] = useState<number>(0);

    const handleClickGenerate = () => {
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

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArraySize(parseInt(event.target.value))
    }

    useEffect(() => {
        if (steps.length && currentStep < steps.length) {
          const timer = setTimeout(() => {
            setCurrentStep((prev) => prev + 1);
          }, 500);
          return () => clearTimeout(timer); // Cleanup timeout
        }
      }, [steps, currentStep, array]);

    return (
        <SortingVisualContainer>
            <ButtonContainer>
                <Button variant="primary" onClick={handleClickGenerate}>Generate</Button>
                <Button variant="secondary" onClick={handleClickQuickSort}>Quick Sort</Button>
                <Button variant="secondary" onClick={handleClickMergeSort}>Merge Sort</Button>
                <Button variant="secondary" onClick={handleClickBubbleSort}>Bubble Sort</Button>
                <Button variant="secondary" onClick={handleClickSelectionSort}>Selection Sort</Button>
                <Button variant="secondary" onClick={handleClickInsertionSort}>Insertion Sort</Button>
            </ButtonContainer>
            <p>Array size: {arraySize}</p>
            <input 
                type="range" 
                value={arraySize} 
                min="1" 
                max="100" 
                onChange={handleSliderChange} 
                style={{ width: '500px' }}
            />
            <BarChart values={steps[currentStep] || array} />
        </SortingVisualContainer>
    )
}