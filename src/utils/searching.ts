import { TreeNode } from "./tree";

export const dfs = (root: TreeNode): number[] => {
    const traversal: number[] = []
    if (!root) {
        return traversal
    }
    const stack = [root]
    while (stack.length > 0) {
        const node = stack.pop()
        if (!node) {
            continue
        }
        traversal.push(node.value)
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }
    return traversal
}

export const bfs = (root: TreeNode): number[] => {
    const traversal: number[] = []
    if (!root) {
        return traversal
    }
    const queue = [root]
    while (queue.length > 0) {
        const node = queue.shift()
        if (!node) {
            continue
        }

        traversal.push(node.value)
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return traversal
}