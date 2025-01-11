import { useState } from "react"
import { Grid } from "./Grid"
import { generateGrid } from "../../utils/grid"
import { Button } from "../shared/CommonStyles"
import { ButtonContainer, PathfindingVisualContainer } from "./PathfindingVisualStyles"
import { aStar } from "../../utils/pathfinding"

export const PathfindingVisual = () => {

    const [grid, setGrid] = useState<number[][]>([])
    const [startCell, setStartCell] = useState<[number, number] | undefined>()
    const [endCell, setEndCell] = useState<[number, number] | undefined>()
    const [pathMap, setPathMap] = useState<Map<string, boolean>>()

    const handleClickGenerateGrid = () => {
        setGrid(generateGrid(20, 20))
        setPathMap(new Map())
    }

    const handleClickAStar = () => {
        if (startCell && endCell) {
            const path = aStar(grid, startCell, endCell)
            console.log('here is the path: ', path)
            const map = new Map()
            path?.forEach((cell) => {
                map.set([cell.x, cell.y].toString(), true)
            })
            setPathMap(map)
        }
    }

    const handleClickCell = (row: number, col: number) => {
        console.log('row: ', row)
        console.log('col: ', col)
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
            <p>Start: {startCell?.toString()}</p>
            <p>End: {endCell?.toString()}</p>
            <Grid grid={grid} onClickCell={handleClickCell} pathMap={pathMap} />
        </PathfindingVisualContainer>
    )
}