import { useEffect, useState } from "react"
import { BinaryTree } from "./BinaryTree"
import { generateTree, TreeNode } from "../../utils/tree"
import { bfs, dfs } from "../../utils/searching"
import { Button } from "../shared/CommonStyles"
import { ButtonContainer, SearchingVisualContainer } from "./SearchingVisualStyles"

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
        <SearchingVisualContainer>
            <ButtonContainer>
                <Button variant="primary" onClick={handleClickGenerate}>Generate</Button>
                <Button variant="secondary" onClick={handleClickDepthFirstSearch}>Depth First Search</Button>
                <Button variant="secondary" onClick={handleClickBreadthFirstSearch}>Breadth First Search</Button>
            </ButtonContainer>
            {rootNode && <BinaryTree root={rootNode} />}
        </SearchingVisualContainer>
    )
}