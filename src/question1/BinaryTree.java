package question1;

public class BinaryTree {
    /**
     * Function takes preorder and inorder and output postorder
     *
     * @param preorder 前序遍历输出
     * @param inorder  中序遍历输出
     * @return postorder 后序遍历
     */
    public static String buildPostorder(String preorder, String inorder) {
        // 如果前序遍历和后序遍历为空，则直接返回
        if (preorder.isEmpty() || inorder.isEmpty()) {
            return "";
        }

        // 获取根元素
        char rootValue = preorder.charAt(0);
        // 获取中序遍历中根元素坐标
        int rootIndexInorder = inorder.indexOf(rootValue);

        // 获取中序遍历的左子树
        String leftInorder = inorder.substring(0, rootIndexInorder);
        // 获取中序遍历的右子树
        String rightInorder = inorder.substring(rootIndexInorder + 1);

        // 获取前序遍历的左子树
        String leftPreorder = preorder.substring(1, leftInorder.length() + 1);
        // 获取前序遍历的右子树
        String rightPreorder = preorder.substring(leftInorder.length() + 1);

        // 递归构建后序遍历的左右子树
        String leftPostorder = buildPostorder(leftPreorder, leftInorder);
        String rightPostorder = buildPostorder(rightPreorder, rightInorder);

        // 构建后序遍历
        return leftPostorder + rightPostorder + rootValue;
    }

    public static void main(String[] args) {
        String preorder = "GDCFJLAPQIX";
        String inorder = "FLJCDAGPIQX";
        System.out.println(buildPostorder(preorder, inorder));
    }
}
