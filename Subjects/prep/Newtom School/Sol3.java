// Magical Orb (Public Contest: November 2022)
// Time Limit: 1 sec
// Memory Limit: 128000 kB
// Problem Statement
// An array A of size N is called magical if:

// 1. Each element of the array is a positive integer not exceeding M, that is, 1 ≤ Ai ≤ M for each i.
// 2. For each i such that 1 ≤ i ≤ N, define f(i) = A1 | A2 | ... Ai, where x | y denotes the bitwise OR of x and y.
// Then, f(1) = f(2) = ... f(N) must hold.

// Your task is to calculate the number of magical arrays of size N, modulo 998244353.
// Input
// The input consists of two space-separated integers N and M.

// Constraints:
// 1 ≤ N ≤ 105
// 1 ≤ M ≤ 105
// Output
// Print a single integer – the number of magical arrays modulo 998244353.
// Example
// Sample Input 1:
// 2 3

// Sample Output 1:
// 5

// Sample Explanation:
// The magical arrays are: [1, 1], [2, 2], [3, 3], [3, 1], [3, 2].

// Sample Input 2:
// 1 50

// Sample Output 2:
// 50

// Sample Input 3:
// 707 707

// Sample Output 3:
// 687062898

import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
    public static void main(String[] args) {
        // Your code here
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        long ans = 0;
        int mod = 998244353;
        for (int i = 1; i <= m; i++) {
            long val = 0;
            int x = count_set_bits(i);
            int base = (int) Math.pow(2, x) - 1;
            int pow = n - 1;
            val = powerOfn(base, pow, mod);
            ans = (ans + val) % mod;
        }
        System.out.println(ans);
    }

    static int count_set_bits(int n) {
        int count = 0;
        while (n > 0) {
            n &= (n - 1);
            count++;
        }
        return count;
    }

    static long powerOfn(long a, long n, int mod) {
        if (n == 0) {
            return 1;
        }
        if (n % 2 == 0) {
            return powerOfn((a * a) % mod, n / 2, mod) % mod;
        }
        return (a % mod) * powerOfn((a * a) % mod, (n - 1) / 2, mod) % mod; // for odd n
    }

}