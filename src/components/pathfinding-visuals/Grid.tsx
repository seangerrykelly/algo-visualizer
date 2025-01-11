import { GridCell, GridContainer, GridRow } from './GridStyles'

type GridProps = {
    grid?: number[][]
    onClickCell: Function
}

export const Grid = ({grid = [], onClickCell}: GridProps) => {

    return (
        <GridContainer>
            {grid.map((row, rowIndex) => (
                <GridRow>
                    {row.map((cell, colIndex) => (
                        <GridCell onClick={() => onClickCell(rowIndex, colIndex)}>
                            {cell}
                        </GridCell>
                    ))}
                </GridRow>
            ))}
        </GridContainer>
    )
}