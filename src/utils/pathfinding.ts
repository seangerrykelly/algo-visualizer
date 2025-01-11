type Cell = {
    x: number;
    y: number;
    costIncurred: number;
    costRemaining: number;
    totalCost: number;
    parent?: Cell;
}

const DIRECTIONS = {
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
    up: { x: 0, y: -1 },
}

export const aStar = (grid: number[][], start: [number, number], end: [number, number]): Cell[] | null => {

    const [startRow, startCol] = start
    const [endRow, endCol] = end

    if (grid[startRow][startCol] === 1 || grid[endRow][endCol] === 1) {
        return null
    }

    const openList: Cell[] = []
    const closedList: Set<string> = new Set();

    const startCell: Cell = {
        x: startRow,
        y: startCol,
        costIncurred: 0,
        costRemaining: Math.abs(endRow - startRow) + Math.abs(endCol - startCol),
        totalCost: 0,
    }
    startCell.totalCost = startCell.costIncurred + startCell.costRemaining

    openList.push(startCell)

    while (openList.length > 0) {
        openList.sort((a, b) => a.totalCost - b.totalCost)
        const currCell: Cell = openList.shift()!

        closedList.add(`${currCell.x},${currCell.y}`)

        // Have we reached the end cell?
        if (currCell.x === endRow && currCell.y === endCol) {
            const path: Cell[] = []
            let temp: Cell | undefined = currCell

            while (temp) {
                path.push(temp)
                temp = temp.parent
            }

            return path.reverse()
        }

        for (const direction of Object.values(DIRECTIONS)) {
            const newRow = currCell.x + direction.x
            const newCol = currCell.y + direction.y

            if (newRow < 0 ||
                newRow >= grid.length ||
                newCol < 0 ||
                newCol >= grid[0].length ||
                grid[newRow][newCol] === 1 ||
                closedList.has(`${newRow},${newCol}`)
            ) {
                continue
            }

            const costIncurred = currCell.costIncurred + 1
            const costRemaining = Math.abs(endRow - newRow) + Math.abs(endCol - newCol)
            const totalCost = costIncurred + costRemaining

            const existingCell = openList.find(cell => cell.x === newRow && cell.y === newCol)

            if (existingCell) {
                if (costIncurred < existingCell.costIncurred) {
                    existingCell.costIncurred = costIncurred
                    existingCell.totalCost = totalCost
                    existingCell.parent = currCell
                }
            } else {
                openList.push({ x: newRow, y: newCol, costIncurred, costRemaining, totalCost, parent: currCell })
            }
        }
    }

    // Path does not exist
    return null
}