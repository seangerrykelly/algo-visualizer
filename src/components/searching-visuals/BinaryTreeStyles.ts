import styled from "styled-components"
import { Colors } from "../../theme/colors"

interface BinaryTreeNodeProps {
    isFirstChild?: boolean
    hasTwoChildren?: boolean
}

export const BinaryTreeContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`

export const BinaryTreeNode = styled.div<Partial<BinaryTreeNodeProps>>`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 20px;
    position: relative;

    // Vertical Line connecting to parent node
    &::before {
        background-color: ${Colors.Blue.primary};
        content: "";
        display: ${(props) => (props.isFirstChild ? 'none': 'block')};
        height: 40px;
        left: 50%;
        position: absolute;
        top: -40px;
        transform: translateX(-50%);
        width: 2px;
    }
`

export const NodeCircle = styled.div`
    align-items: center;
    background-color: ${Colors.Blue.primary};
    box-shadow: 0 4px 6px ${Colors.Black};
    border-radius: 50%;
    color: ${Colors.White};
    display: flex;
    font-size: 16px;
    font-weight: bold;
    height: 50px;
    justify-content: center;
    text-align: center;
    width: 50px;
    z-index: 2;
`

export const NodeChild = styled.div<Partial<BinaryTreeNodeProps>>`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    position: relative;

    &::before {
        border-top: 2px solid ${Colors.Blue.primary};
        content: "";
        display: ${(props) => (props.hasTwoChildren ? 'block': 'none')};
        height: 10px;
        left: 25%;
        // left: calc(50% + 10px);
        // margin: 0px 10px 0px 10px;
        position: absolute;
        right: calc(50% + 10px);
        top: -20px;
        width: 50%;
    }
`
