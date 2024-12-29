import { useState } from "react"
import { generateArray } from "../../utils/array"

export const SearchingVisual = () => {

    const [array, setArray] = useState<number[]>(generateArray(1, 100))

    return (
        <div>
            Searching visualizer page
            <button onClick={() => setArray(generateArray(1,100))}>Generate</button>
        </div>
    )
}