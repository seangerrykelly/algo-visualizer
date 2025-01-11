import styled from "styled-components"
import { Colors } from "../../theme/colors"

interface LineProps {
    isLeft: boolean
}

export const BinaryTreeNode = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const NodeCircle = styled.div`
    align-items: center;
    background-color: ${Colors.Blue.primary};
    border-radius: 50%;
    color: white;
    display: flex;
    font-size: 16px;
    font-weight: bold;
    height: 50px;
    justify-content: center;
    text-align: center;
    width: 50px;
    z-index: 2;
`

export const NodeChildren = styled.div`
    display: flex;
    justify-content: space-between;
    /* margin-top: 20px; */
    position: relative;
    width: 120px;
`

export const NodeChild = styled.div`
    position: relative;
`

export const Line = styled.div<LineProps>`
  background-color: black;
  bottom: 50%;
  height: 30px;
  position: absolute;
  top: 0%;
  width: 2px;

  ${(props) => props.isLeft ? 'left: 50%;' : 'right: 50%;'}
  transform: ${(props) => props.isLeft ? 'rotate(-45deg)': 'rotate(45deg)'};
`