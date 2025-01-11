import { useEffect, useState } from "react"
import { Grid } from "./Grid"
import { generateGrid } from "../../utils/grid"
import { Button } from "../shared/CommonStyles"
import { ButtonContainer, PathfindingVisualContainer } from "./PathfindingVisualStyles"

export const PathfindingVisual = () => {

    const [grid, setGrid] = useState<number[][]>([])
    const [startCell, setStartCell] = useState<number[]>()
    const [endCell, setEndCell] = useState<number[]>()

    useEffect(() => {
        // setStartCell([0,0])
        // setEndCell([grid.length - 1, grid.length - 1])
    }, [grid])

    const handleClickGenerateGrid = () => {
        setGrid(generateGrid(10, 10))
    }

    const handleClickAStar = () => {

    }

    const handleClickCell = (row: number, col: number) => {
        console.log('row: ', row)
        console.log('col: ', col)
        if (!startCell || endCell) {
            setStartCell([row, col])
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
            <Grid grid={grid} onClickCell={handleClickCell} />
        </PathfindingVisualContainer>
    )
}