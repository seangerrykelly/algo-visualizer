import { useEffect, useState } from "react"
import { BinaryTree } from "./BinaryTree"
import { generateTree, TreeNode } from "../../utils/tree"
import { bfs, dfs } from "../../utils/searching"
import { Button } from "../shared/CommonStyles"
import { ButtonContainer, SearchingVisualContainer } from "./SearchingVisualStyles"

export const SearchingVisual = () => {

    const [nodeCount, setNodeCount] = useState<number>(10)
    const [rootNode, setRootNode] = useState<TreeNode>()

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNodeCount(parseInt(event.target.value))
    }

    const handleClickGenerate = () => {
        setRootNode(generateTree(nodeCount, 1, 20))
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
        <SearchingVisualContainer>
            <ButtonContainer>
                <Button variant="primary" onClick={handleClickGenerate}>Generate</Button>
                <Button variant="secondary" onClick={handleClickDepthFirstSearch}>Depth First Search</Button>
                <Button variant="secondary" onClick={handleClickBreadthFirstSearch}>Breadth First Search</Button>
            </ButtonContainer>
            <p>Node count: {nodeCount}</p>
            <input 
                type="range" 
                value={nodeCount} 
                min="1" 
                max="100" 
                onChange={handleSliderChange} 
                style={{ maxWidth: '100vw' }}
            />
            {rootNode && <BinaryTree root={rootNode} />}
        </SearchingVisualContainer>
    )
}