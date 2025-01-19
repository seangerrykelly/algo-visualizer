import styled from "styled-components"
import { Colors } from "../../theme/colors";

interface BarProps {
    maxValue: number;
    value: number;
}

export const BarChartContainer = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
`

export const Bar = styled.div<BarProps>`
    background-color: ${Colors.Blue.secondary};
    border: 1px solid ${Colors.Blue.primary};
    color: ${Colors.White};
    height: 20px;
    text-align: center;
    width: ${(props) => {
        const width = (props.value / props.maxValue) * 100
        return `${width}%;`
    }}
`