import { useEffect, useState } from "react"
import { BinaryTree } from "./BinaryTree"
import { generateTree, TreeNode } from "../../utils/tree"

export const SearchingVisual = () => {

    const [rootNode, setRootNode] = useState<TreeNode>()

    useEffect(() => {
        console.log('rootNode: ', rootNode)
    }, [rootNode])

    const handleClickGenerate = () => {
        setRootNode(generateTree(1, 20))
    }

    return (
        <div>
            <button className="primaryButton" onClick={handleClickGenerate}>Generate</button>
            {rootNode && <BinaryTree root={rootNode} />}
        </div>
    )
}