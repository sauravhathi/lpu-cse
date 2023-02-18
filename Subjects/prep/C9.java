import java.util.Scanner;

// Problem Statement
// Given a string str, Your task here is to find the minimum number of characters to be inserted to convert it to palindrome.

// Input Format
// Single line containing a String s
// Constraints
// 1 <= s.length <= 50
// All characters of s are lower case English letters.
// Output Format
// The minimum number of steps to make s palindrome
// Evaluation Parameters
// input:
// doselect
// Output:
// 5






    // public int minInsertions(String s) {
    //     int n = s.length();
    //     int[][] dp = new int[n+1][n+1];
    //     for (int i = 0; i < n; ++i)
    //         for (int j = 0; j < n; ++j)
    //             dp[i + 1][j + 1] = s.charAt(i) == s.charAt(n - 1 - j) ? dp[i][j] + 1 : Math.max(dp[i][j + 1], dp[i + 1][j]);
    //     return n - dp[n][n];
    // }

public class C9 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        System.out.println(minInsertions(s));
    }

    public static int minInsertions(String s) {
        int n = s.length();
        int[][] dp = new int[n+1][n+1];
        for (int i = 0; i < n; ++i)
            for (int j = 0; j < n; ++j)
                dp[i + 1][j + 1] = s.charAt(i) == s.charAt(n - 1 - j) ? dp[i][j] + 1 : Math.max(dp[i][j + 1], dp[i + 1][j]);
        return n - dp[n][n];
    }
}