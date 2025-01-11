import { useState } from "react"
import { Grid } from "./Grid"
import { generateGrid } from "../../utils/grid"

export const PathfindingVisual = () => {

    const [grid, setGrid] = useState<number[][]>([])

    const handleClickGenerateGrid = () => {
        setGrid(generateGrid(10, 10))
    }

    const handleClickAStar = () => {
        
    }

    return (
        <div>
            <p>Pathfinding</p>
            <button className="primaryButton" onClick={handleClickGenerateGrid}>Generate</button>
            <button className="primaryButton" onClick={handleClickAStar}>A* Algorithm</button>
            <Grid grid={grid}/>
        </div>
    )
}