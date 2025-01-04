export type TreeNode = {
    value: number;
    left?: TreeNode;
    right?: TreeNode;
}

export const generateTree = () => {
    const treeNode: TreeNode = {
        value: 1
    }
    return treeNode
}