import { useEffect, useState } from "react"
import { generateArray } from "../../utils/array"
import { bubbleSort, insertionSort, mergeSort, quickSortSteps, selectionSort } from "../../utils/sorting"
import { BarChart } from "./BarChart"
import { ButtonContainer, SortingVisualContainer } from "./SortingVisualStyles"
import { Button } from "../shared/CommonStyles"

export const SortingVisual = () => {

    const [array, setArray] = useState<number[]>(generateArray(1, 100))
    const [steps, setSteps] = useState<number[][]>([]);
    const [currentStep, setCurrentStep] = useState<number>(0);

    const handleClickGenerate = () => {
        setArray(generateArray(1,100))
        setSteps([])
        setCurrentStep(0)
    }

    const handleClickQuickSort = () => {
        const { sorted: sortedArray, steps: sortSteps } = quickSortSteps(array)
        setArray(sortedArray)
        setSteps(sortSteps)
    }

    const handleClickMergeSort = () => {
        setArray(mergeSort(array))
    }

    const handleClickBubbleSort = () => {
        setArray(bubbleSort(array))
    }

    const handleClickSelectionSort = () => {
        setArray(selectionSort(array))
    }

    const handleClickInsertionSort = () => {
        setArray(insertionSort(array))
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
            <BarChart values={steps[currentStep] || array} />
        </SortingVisualContainer>
    )
}