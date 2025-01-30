export type TreeNode = {
    value: number;
    left?: TreeNode;
    right?: TreeNode;
}

export const generateTree = (nodeCount: number, min: number, max: number): TreeNode => {
    const root: TreeNode = {
        value: Math.floor(Math.random() * (max - min + 1) + min)
    }
    let stack = [root]
    const options = ['left', 'right', 'both']
    
    for (let i = 0; i < nodeCount - 1; i++) {
        const currNode = stack.shift()
        if (!currNode)
            break

        const newNode1: TreeNode = {
            value: Math.floor(Math.random() * (max - min + 1) + min)
        }
        const index = Math.floor(Math.random() * options.length);
        if (options[index] == 'left') {
            currNode.left = newNode1
        } else if (options[index] == 'right') {
            currNode.right = newNode1
        } else {
            const newNode2: TreeNode = {
                value: Math.floor(Math.random() * (max - min + 1) + min)
            }
            currNode.left = newNode1
            currNode.right = newNode2
            stack.push(newNode2)
        }
        stack.push(newNode1)
    }
    return root
}