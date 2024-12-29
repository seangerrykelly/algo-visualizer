import { useState } from "react"
import { generateArray } from "../../utils/array"
import { quickSort } from "../../utils/sorting"
import { BarChart } from "./BarChart"
import './SortingVisual.css'

export const SortingVisual = () => {

    const [array, setArray] = useState<number[]>(generateArray(1, 100))

    return (
        <div className="sortingVisualContainer">
            <button onClick={() => setArray(generateArray(1,100))}>Generate</button>
            <button onClick={() => setArray(quickSort(array))}>Quick Sort</button>
            <BarChart values={array} />
        </div>
    )
}