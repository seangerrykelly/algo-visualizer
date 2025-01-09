import { useEffect, useState } from "react"
import { BinaryTree } from "./BinaryTree"
import { generateTree, TreeNode } from "../../utils/tree"
import { bfs, dfs } from "../../utils/searching"

export const SearchingVisual = () => {

    const [rootNode, setRootNode] = useState<TreeNode>()

    useEffect(() => {
        console.log(rootNode)
    }, [rootNode])

    const handleClickGenerate = () => {
        setRootNode(generateTree(1, 20))
    }

    const handleClickDepthFirstSearch = () => {
        if (rootNode) {
            const traversal = dfs(rootNode)
            console.log('dfs traversal: ', traversal)
        }
    }

    const handleClickBreadthFirstSearch = () => {
        if (rootNode) {
            const traversal = bfs(rootNode)
            console.log('bfs traversal: ', traversal)

        }
    }

    return (
        <div>
            <button className="primaryButton" onClick={handleClickGenerate}>Generate</button>
            <button className="primaryButton" onClick={handleClickDepthFirstSearch}>Depth First Search</button>
            <button className="primaryButton" onClick={handleClickBreadthFirstSearch}>Breadth First Search</button>
            {rootNode && <BinaryTree root={rootNode} />}
        </div>
    )
}