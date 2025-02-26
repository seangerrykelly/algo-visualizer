import { useEffect, useState } from "react"
import { GridCell, GridContainer, GridRow } from './GridStyles'
import { PinIcon } from "lucide-react"

type GridProps = {
    grid?: number[][]
    pathMap?: Map<string, boolean>
    onClickCell: Function
    startCell?: [number, number]
    endCell?: [number, number]
}

export const Grid = ({grid = [], pathMap, onClickCell, startCell, endCell}: GridProps) => {

    const [animatedPath, setAnimatedPath] = useState(new Set<string>())

    useEffect(() => {
        if (!pathMap || pathMap.size === 0) {
            setAnimatedPath(new Set())
            return
        }
        const pathArray = Array.from(pathMap.keys())
        let index = 0

        const interval = setInterval(() => {
            if (index >= pathArray.length) {
                clearInterval(interval)
                return
            }

            setAnimatedPath((prev) => {
                if (!pathArray[index]) {
                    return prev
                }
                return new Set(Array.from(prev).concat(pathArray[index]))
            })
            index += 1
        }, 300)
        return () => clearInterval(interval)
    }, [pathMap])

    const isStartOrEnd = (currRow: number, currCol: number, cell?: [number, number]): boolean => {
        return !!cell && cell[0] === currRow && cell[1] === currCol
    }

    return (
        <GridContainer gridSize={grid.length}>
            {grid.map((row, rowIndex) => (
                <GridRow>
                    {row.map((cell, colIndex) => {
                        const inPath = animatedPath.has([rowIndex, colIndex].toString())
                        const isStart = isStartOrEnd(rowIndex, colIndex, startCell)
                        const isEnd = isStartOrEnd(rowIndex, colIndex, endCell)

                        return (     
                            <GridCell 
                                onClick={() => onClickCell(rowIndex, colIndex, cell)}
                                isWalkable={cell === 0}
                                inPath={inPath}
                            >
                                {(isStart || isEnd) && <PinIcon />}
                            </GridCell>
                        )
                        })}
                </GridRow>
            ))}
        </GridContainer>
    )
}