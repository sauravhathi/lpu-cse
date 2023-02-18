import java.util.Scanner;

// Write a program that creates an empty binary search tree T. Your program will take N as input where N is the count of positive integers P that will be inputted in the next line of input. You need to insert each P in the tree which will be called a step. After a step has been completed, your task is to print the sum of distances between every pair of T’s nodes (one per line of output).
// input:

// 5
// 4 11 3 6 1

// output:

// 0
// 1
// 4
// 10
// 20

public class C10 {

    // Sum of binary tee pair nodes
    public static int sumOfPairNodes(Node root) {
        if (root == null) {
            return 0;
        }
        int left = sumOfPairNodes(root.left);
        int right = sumOfPairNodes(root.right);
        return left + right + root.data;
    }

    // Insert node in binary tree
    public static Node insert(Node root, int data) {
        if (root == null) {
            return new Node(data);
        } else {
            Node cur;
            if (data <= root.data) {
                cur = insert(root.left, data);
                root.left = cur;
            } else {
                cur = insert(root.right, data);
                root.right = cur;
            }
            return root;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = 5;
        int[] arr = { 4, 11, 3, 6, 1 };
        Node root = null;
        for (int i = 0; i < n; i++) {
            root = insert(root, arr[i]);
            System.out.println(sumOfPairNodes(root));
        }
    }

    public static class Node {
        Node left, right;
        int data;

        Node(int data) {
            this.data = data;
            left = right = null;
        }
    }

}