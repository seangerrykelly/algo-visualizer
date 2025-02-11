import { useState } from "react"
import { Grid } from "./Grid"
import { generateGrid } from "../../utils/grid"
import { Button } from "../shared/CommonStyles"
import { ButtonContainer, PathfindingVisualContainer } from "./PathfindingVisualStyles"
import { aStar } from "../../utils/pathfinding"

export const PathfindingVisual = () => {

    const [gridSize, setGridSize] = useState<number>(10)
    const [grid, setGrid] = useState<number[][]>([])
    const [startCell, setStartCell] = useState<[number, number] | undefined>()
    const [endCell, setEndCell] = useState<[number, number] | undefined>()
    const [pathMap, setPathMap] = useState<Map<string, boolean>>()

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGridSize(parseInt(event.target.value))
    }

    const handleClickGenerateGrid = () => {
        setGrid(generateGrid(gridSize, gridSize))
        setPathMap(new Map())
    }

    const handleClickAStar = () => {
        if (startCell && endCell) {
            const path = aStar(grid, startCell, endCell)
            const map = new Map()
            path?.forEach((cell) => {
                map.set([cell.x, cell.y].toString(), true)
            })
            setPathMap(map)
        }
    }

    const handleClickCell = (row: number, col: number, value: number) => {
        if (value !== 0) {
            return
        }
        if (!startCell || endCell) {
            setStartCell([row, col])
            setEndCell(undefined)
        } else {
            setEndCell([row, col])
        }
    }

    return (
        <PathfindingVisualContainer>
            <p>Pathfinding</p>
            <ButtonContainer>
                <Button variant="primary" onClick={handleClickGenerateGrid}>Generate</Button>
                <Button variant="secondary" onClick={handleClickAStar}>A* Algorithm</Button>
            </ButtonContainer>
            <p>Node count: {gridSize}</p>
            <input 
                type="range" 
                value={gridSize} 
                min="1" 
                max="50" 
                onChange={handleSliderChange} 
                style={{ maxWidth: '100vw' }}
            />
            <p>Start: {startCell?.toString()}</p>
            <p>End: {endCell?.toString()}</p>
            <Grid grid={grid} onClickCell={handleClickCell} pathMap={pathMap} />
        </PathfindingVisualContainer>
    )
}