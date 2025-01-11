import styled from "styled-components"
import { Colors } from "../../theme/colors"

interface ButtonProps {
    variant: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonProps>`
    background-color: ${(props) => props.variant === 'primary' ? `${Colors.Blue.primary};` : `${Colors.White};`}
    border: ${Colors.Blue.primary} 1px solid;
    color: ${(props) => props.variant === 'primary' ? `${Colors.White};` : `${Colors.Blue.primary};`}

    border-radius: 4px;
    cursor: pointer;
    font-weight: 700;
    padding: 8px;
    transition: all 0.3s ease;
    width: auto;

    &:hover {
        background-color: ${(props) => props.variant === 'primary' ? `${Colors.White};` : `${Colors.Blue.primary};`}
        color: ${(props) => props.variant === 'primary' ? `${Colors.Blue.primary};` : `${Colors.White};`}
    }
`