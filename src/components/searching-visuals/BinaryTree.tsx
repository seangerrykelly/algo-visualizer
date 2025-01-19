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
        isOnlyChild: boolean
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
                isOnlyChild={isOnlyChild}
            >
                <NodeCircle>{node.value}</NodeCircle>
                <NodeChild>
                    {node.left && renderTreeNode(node.left, true, !node.right)}
                    {node.right && renderTreeNode(node.right, false, !node.left)}
                </NodeChild>
            </BinaryTreeNode>
        )
    }

    return <BinaryTreeContainer>{renderTreeNode(rootNode, true, true)}</BinaryTreeContainer>
}