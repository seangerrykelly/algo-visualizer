import styled from "styled-components"
import { Colors } from "../../theme/colors"

interface BinaryTreeNodeProps {
    isFirstChild: boolean
    hasTwoChildren?: boolean
    isOnlyChild: boolean
}

export const BinaryTreeContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`

export const BinaryTreeNode = styled.div<BinaryTreeNodeProps>`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 20px;
    position: relative;

    // Vertical Line connecting to parent node
    &::before {
        background-color: ${Colors.Beige.primary};
        content: "";
        display: ${(props) => (props.isFirstChild ? 'none': 'block')};
        height: 40px;
        left: 50%;
        position: absolute;
        top: -20px;
        transform: translateX(-50%);
        width: 2px;
    }

    // Horizontal line connecting siblings
    &::after {
        background-color: ${Colors.Beige.primary};
        content: "";
        display: ${(props) => (props.isOnlyChild ? 'none': 'block')};
        height: 2px;
        left: calc(50% + 10px);
        position: absolute;
        top: 20px;
        width: 20px;
        z-index: 100;
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

export const NodeChild = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    position: relative;

    &::before {
        border-top: 2px solid ${Colors.Beige.primary};
        content: "";
        height: 10px;
        left: 25%;
        margin: 0px 10px 0px 10px;
        position: absolute;
        right: 25%;
        top: -10px;
    }

    // &:first-child::before {
    //     background-color: ${Colors.Beige.primary};
    //     content: "";
    //     height: 20px;
    //     left: 50%;
    //     position: absolute;
    //     top: -20px;
    //     transform: translateX(-50%);
    //     width: 2px;
    // }
`

// export const NodeChild = styled.div`
//     position: relative;
// `

// export const Line = styled.div<LineProps>`
//   background-color: black;
//   bottom: 50%;
//   height: 30px;
//   position: absolute;
//   top: 0%;
//   width: 2px;

//   ${(props) => props.isLeft ? 'left: 50%;' : 'right: 50%;'}
//   transform: ${(props) => props.isLeft ? 'rotate(-45deg)': 'rotate(45deg)'};
// `