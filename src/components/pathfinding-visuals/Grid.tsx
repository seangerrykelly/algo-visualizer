import { useEffect, useState } from "react"
import { GridCell, GridContainer, GridRow } from './GridStyles'

type GridProps = {
    grid?: number[][]
    pathMap?: Map<string, boolean>
    onClickCell: Function
}

export const Grid = ({grid = [], pathMap, onClickCell}: GridProps) => {

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
            index++
        }, 300)
        return () => clearInterval(interval)
    }, [pathMap])

    return (
        <GridContainer gridSize={grid.length}>
            {grid.map((row, rowIndex) => (
                <GridRow>
                    {row.map((cell, colIndex) => {

                        const inPath = animatedPath.has([rowIndex, colIndex].toString())
                        return (     
                            <GridCell 
                                onClick={() => onClickCell(rowIndex, colIndex, cell)}
                                isWalkable={cell === 0}
                                inPath={inPath}
                            />
                        )
                        })}
                </GridRow>
            ))}
        </GridContainer>
    )
}