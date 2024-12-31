import { useEffect, useState } from "react"
import { generateArray } from "../../utils/array"
import { bubbleSort, quickSortSteps } from "../../utils/sorting"
import { BarChart } from "./BarChart"
import './SortingVisual.css'

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

    const handleClickBubbleSort = () => {
        setArray(bubbleSort(array))
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
        <div className="sortingVisualContainer">
            <div className="buttonContainer">
                <button className="primaryButton" onClick={handleClickGenerate}>Generate</button>
                <button className="primaryButton" onClick={handleClickQuickSort}>Quick Sort</button>
                <button className="primaryButton" onClick={handleClickBubbleSort}>Bubble Sort</button>
            </div>
            <BarChart values={steps[currentStep] || array} />
        </div>
    )
}