// 3ple (Public Contest: November 2022)
// Time Limit: 1 sec
// Memory Limit: 128000 kB
// Problem Statement
// You are given a positive integer N. Print "Yes" if N is a multiple of 3, otherwise print "No".
// Input
// The input consists of a single integer N.

// Constraints:
// 1 ≤ N ≤ 1000
// Output
// If N is a multiple of 3, print "Yes". Otherwise, print "No" (without the quotation marks). Note that the output is case-sensitive.
// Example
// Sample Input 1:
// 6

// Sample Output 1:
// Yes

// Sample Input 2:
// 10

// Sample Output 2:
// No

// Approach: The problem is simple. If the number is divisible by 3, then it is a multiple of 3. Otherwise, it is not a multiple of 3.

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n % 3 == 0) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}
