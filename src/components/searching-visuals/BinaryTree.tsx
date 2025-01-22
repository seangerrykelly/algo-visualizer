import { useState } from "react"
import { TreeNode } from "../../utils/tree"
import { BinaryTreeContainer, BinaryTreeNode, NodeChild, NodeCircle } from "./BinaryTreeStyles"

type BinaryTreeProps = {
    root?: TreeNode
}

export const BinaryTree = ({ root = undefined }: BinaryTreeProps) => {
    const [rootNode, setRootNode] = useState<TreeNode | undefined>(root)
    if (!rootNode) {
        return null
    }

    const renderTreeNode = (
        node: TreeNode | undefined, 
        isFirstChild: boolean,
    ) => {
        if (!node) {
            return null
        }

        const hasTwoChildren = !!(node.left && node.right)
        console.log(hasTwoChildren)

        return (
            <BinaryTreeNode 
                isFirstChild={isFirstChild} 
                hasTwoChildren={hasTwoChildren}
            >
                <NodeCircle>{node.value}</NodeCircle>
                <NodeChild hasTwoChildren={hasTwoChildren}>
                    {node.left && renderTreeNode(node.left, false)}
                    {node.right && renderTreeNode(node.right, false)}
                </NodeChild>
            </BinaryTreeNode>
        )
    }

    return <BinaryTreeContainer>{renderTreeNode(rootNode, true)}</BinaryTreeContainer>
}