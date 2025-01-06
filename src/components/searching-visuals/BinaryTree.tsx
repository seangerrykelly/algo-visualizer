import { useState } from "react"
import { TreeNode } from "../../utils/tree"
import './BinaryTree.css'

type BinaryTreeProps = {
    root?: TreeNode
}

export const BinaryTree = ({ root = undefined }: BinaryTreeProps) => {
    const [rootNode, setRootNode] = useState<TreeNode | undefined>(root)
    if (!rootNode)
        return null

    return (
        <div className="treeNode">
            <div className="nodeCircle">{rootNode.value}</div>
            <div className="nodeChildren">
                {rootNode.left && (
                    <div className="child left">
                        <div className="line" />
                        <BinaryTree root={rootNode.left} />
                    </div>
                )}
                {rootNode.right && (
                    <div className="child right">
                        <div className="line" />
                        <BinaryTree root={rootNode.right} />
                    </div>
                )}
            </div>
        </div>
    )
}