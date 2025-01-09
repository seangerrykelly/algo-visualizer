export type TreeNode = {
    value: number;
    left?: TreeNode;
    right?: TreeNode;
}

export const generateTree = (min: number, max: number): TreeNode => {
    const root: TreeNode = {
        value: min
    }
    let stack = [root]
    const options = ['left', 'right', 'both']
    
    for (let i = 0; i < 10; i++) {
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