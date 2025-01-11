import { useState } from "react"
import { TreeNode } from "../../utils/tree"
import { BinaryTreeNode, NodeChild, NodeChildren, Line, NodeCircle } from "./BinaryTreeStyles"

type BinaryTreeProps = {
    root?: TreeNode
}

export const BinaryTree = ({ root = undefined }: BinaryTreeProps) => {
    const [rootNode, setRootNode] = useState<TreeNode | undefined>(root)
    if (!rootNode)
        return null

    return (
        <BinaryTreeNode>
            <NodeCircle>{rootNode.value}</NodeCircle>
            <NodeChildren>
                {rootNode.left && (
                    <NodeChild>
                        <Line isLeft={true} />
                        <BinaryTree root={rootNode.left} />
                    </NodeChild>
                )}
                {rootNode.right && (
                    <NodeChild>
                        <Line isLeft={false} />
                        <BinaryTree root={rootNode.right} />
                    </NodeChild>
                )}
            </NodeChildren>
        </BinaryTreeNode>
    )
}