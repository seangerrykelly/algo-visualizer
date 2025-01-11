export const generateGrid = (rowCount: number, colCount: number) => {
    const grid: number[][] = []
    
    for (let i = 0; i < rowCount; i++) {
        let row: number[] = []
        for (let j = 0; j < colCount; j++) {
            row.push(i)
        }
        grid.push(row)
    }
    return grid
}