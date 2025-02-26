import styled from "styled-components"
import { Colors } from "../../theme/colors"

interface GridCellProps {
    inPath: boolean;
    isWalkable: boolean;
}

export const GridContainer = styled.div<{ gridSize: number }>`
    align-self: center;
    display: grid;
    gap: 0;
    grid-template-columns: ${({ gridSize }) => `repeat(${gridSize}, 1fr)`};
    grid-template-rows: ${({ gridSize }) => `repeat(${gridSize}, 1fr)`};
    height: 80vmin;
    max-height: 500px;
    max-width: 500px;
    width: 80vmin;
`

export const GridRow = styled.div`
    display: contents;
`

export const GridCell = styled.div<GridCellProps>`
    align-items: center;
    background-color: 
        ${(props) => props.inPath
            ? Colors.Blue.secondary 
            : props.isWalkable
            ? Colors.White
            : Colors.Black
        };
    border: 1px solid ${Colors.Black};
    color: ${Colors.Black};
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: center;
    text-align: center;
    width: 100%;

    ${(props) => props.isWalkable ? `
        &:hover {
            background-color: ${Colors.Blue.secondary};
            color: ${Colors.White};
        }
        `
        : `
        cursor: not-allowed;
        `
    }
`