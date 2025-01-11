export const generateGrid = (rowCount: number, colCount: number) => {
    const grid: number[][] = []
    const options = [0, 1]
    
    for (let i = 0; i < rowCount; i++) {
        let row: number[] = []
        for (let j = 0; j < colCount; j++) {
            const index = Math.floor(Math.random() * options.length);
            row.push(options[index])
        }
        grid.push(row)
    }
    return grid
}