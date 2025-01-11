import './Grid.css'

type GridProps = {
    grid?: number[][]
}

export const Grid = ({grid = []}: GridProps) => {

    const handleClickCell = (row: number, col: number) => {
        console.log('row: ', row)
        console.log('col: ', col)
    }

    return (
        <div className="gridContainer">
            {grid.map((row, rowIndex) => (
                <div className="gridRow">
                    {row.map((cell, colIndex) => (
                        <div className="gridCell" onClick={() => handleClickCell(rowIndex, colIndex)}>
                            {cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}