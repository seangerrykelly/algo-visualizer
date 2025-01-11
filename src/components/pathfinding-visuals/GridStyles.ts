import styled from "styled-components"
import { Colors } from "../../theme/colors"

interface GridCellProps {
    inPath: boolean;
    isWalkable: boolean;
}

export const GridContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const GridRow = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 500px;
    width: 100%;
`

export const GridCell = styled.div<GridCellProps>`
    background-color: 
        ${(props) => props.inPath
            ? Colors.Blue.secondary 
            : props.isWalkable
            ? Colors.White
            : Colors.Black
        };
    border: 1px solid ${Colors.Blue.primary};
    color: ${Colors.Blue.secondary};
    cursor: pointer;
    height: 20px;
    text-align: center;
    width: 20px;

    &:hover {
        background-color: ${Colors.Blue.secondary};
        color: ${Colors.White};
    }
`