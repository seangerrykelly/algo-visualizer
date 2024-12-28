import { useState } from "react"
import { generateArray } from "../../utils/array"
import { quickSort } from "../../utils/sorting"
import { BarChart } from "./BarChart"

export const SortingVisual = () => {

    const [array, setArray] = useState<number[]>(generateArray(1, 100))

    return (
        <div>
            <button onClick={() => setArray(generateArray(1,100))}>Generate</button>
            <button onClick={() => setArray(quickSort(array))}>Quick Sort</button>
            <BarChart values={array} />
            <p>Array to be sorted: </p>
            <div>
                {array.map((value) => (
                    <div>{value}</div>
                ))}
            </div>
            

        </div>
    )
}