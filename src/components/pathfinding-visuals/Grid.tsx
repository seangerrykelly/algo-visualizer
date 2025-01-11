import { GridCell, GridContainer, GridRow } from './GridStyles'

type GridProps = {
    grid?: number[][]
    pathMap?: Map<string, boolean>
    onClickCell: Function
}

export const Grid = ({grid = [], pathMap, onClickCell}: GridProps) => {

    return (
        <GridContainer>
            {grid.map((row, rowIndex) => (
                <GridRow>
                    {row.map((cell, colIndex) => (
                        <GridCell 
                            onClick={() => onClickCell(rowIndex, colIndex)}
                            isWalkable={cell === 0}
                            inPath={pathMap ? pathMap.has([rowIndex, colIndex].toString()) : false} 
                        />
                    ))}
                </GridRow>
            ))}
        </GridContainer>
    )
}