import { useEffect, useState } from "react"
import { generateArray } from "../../utils/array"
import { quickSortSteps } from "../../utils/sorting"
import { BarChart } from "./BarChart"
import './SortingVisual.css'

export const SortingVisual = () => {

    const [array, setArray] = useState<number[]>(generateArray(1, 100))
    const [steps, setSteps] = useState<number[][]>([]);
    const [currentStep, setCurrentStep] = useState<number>(0);

    const handleClickQuickSort = () => {
        const { sorted: sortedArray, steps: sortSteps } = quickSortSteps(array)
        setArray(sortedArray)
        setSteps(sortSteps)
    }

    useEffect(() => {
        if (steps.length && currentStep < steps.length) {
          const timer = setTimeout(() => {
            setCurrentStep((prev) => prev + 1);
          }, 500);
          return () => clearTimeout(timer); // Cleanup timeout
        }
      }, [steps, currentStep]);

    return (
        <div className="sortingVisualContainer">
            <div className="buttonContainer">
                <button className="primaryButton" onClick={() => setArray(generateArray(1,100))}>Generate</button>
                <button className="primaryButton" onClick={handleClickQuickSort}>Quick Sort</button>
            </div>
            <BarChart values={steps[currentStep] || array} />
        </div>
    )
}