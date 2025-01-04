import { useState } from "react"
import { generateTree, TreeNode } from "../../utils/tree"

export const BinaryTree = () => {
    const [rootNode, setRootNode] = useState<TreeNode>(generateTree())

    return (
        <div>
            {rootNode.value}
        </div>
    )
}