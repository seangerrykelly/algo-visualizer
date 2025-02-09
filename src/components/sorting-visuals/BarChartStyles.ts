import styled from "styled-components"
import { Colors } from "../../theme/colors";

interface BarProps {
    barCount: number;
    maxValue: number;
    value: number;
}

export const BarChartContainer = styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 300px;
    width: 100%;
`

export const Bar = styled.div<BarProps>`
    background-color: ${Colors.Blue.secondary};
    border: 1px solid ${Colors.Blue.primary};
    color: ${Colors.White};
    height: ${(props) => {
        const height = (props.value / props.maxValue) * 100
        return `${height}%;`
    }}
    text-align: center;
    width: ${(props) => {
        const width = (props.barCount) * 100
        return `${width}%;`
    }}
`