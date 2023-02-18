
// Jay has a chocolate box that contains different types of chocolate represented by a lower case character. Chocolates are arranged in a row. Jay wants to divide the row into pieces such that both the pieces havean equal number of unique chocolate types (denotes by lowercase character).abstract

// Can you help jay to determine whether it is possible to divide the chocolate row according to the given condition? And if possible then print how many ways are there to which he can divide the chocolate row.

// Input Format

// The first line contains T's value, the number of test cases
// The second line contains the length of the chocolate row

// Constraints

// 1<=T<=1000
// 1<=|S|<=100000

// Output Format

// Print the number of ways to divide the row according to the given condition in a new line for each test case.

// Sample Input

// 3
// ababa
// aaaa
// d

// Sample Output

// 2
// 3
// 0

// explanation:
// for test case 1: position pieces are - ["ab","aba"], ["aba","ba"].
// for test case 2: position pieces are - ["a","aaa"], ["aa","aa"], ["aaa","a"].
// for test case 3: there is no possible division.
// using sliding window technique
// jay has a chocolate bar consisting of a row.
// jay wants to divide the row into two pieces such that both the pieces an equal number of unique chocolate types.
// print how many pieces jay can divide the chocolate bar into.

import java.util.Scanner;

public class C4 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        in.nextLine();
        while (t-- > 0) {
            String s = in.nextLine();
            int count = 0;
            for (int i = 0; i < s.length() - 1; i++) {
                // https://github.com/sauravhathi
                String s1 = s.substring(0, i + 1);
                String s2 = s.substring(i + 1);
                int c1 = 0;
                int c2 = 0;
                for (int j = 0; j < s1.length(); j++) {
                    if (s1.charAt(j) != s1.charAt(0)) {
                        c1++;
                    }
                }
                for (int j = 0; j < s2.length(); j++) {
                    if (s2.charAt(j) != s2.charAt(0)) {
                        c2++;
                    }
                }
                if (c1 == c2) {
                    count++;
                }
            }
            System.out.println(count);
        }
    }
}

// c++

#include <iostream>
#include <string>

using namespace std;

int main() {
    int t;
    cin >> t;
    while (t-- > 0) {
        string s;
        cin >> s;
        int count = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            // https://github.com/sauravhathi
            string s1 = s.substr(0, i + 1);
            string s2 = s.substr(i + 1);
            int c1 = 0;
            int c2 = 0;
            for (int j = 0; j < s1.length(); j++) {
                if (s1[j] != s1[0]) {
                    c1++;
                }
            }
            for (int j = 0; j < s2.length(); j++) {
                if (s2[j] != s2[0]) {
                    c2++;
                }
            }
            if (c1 == c2) {
                count++;
            }
        }
        cout << count << endl;
    }
}

// python

t = int(input())
for _ in range(t):
    s = input()
    count = 0
    for i in range(len(s) - 1):
    # https://github.com/sauravhathi
        s1 = s[:i + 1]
        s2 = s[i + 1:]
        c1 = 0
        c2 = 0
        for j in range(len(s1)):
            if s1[j] != s1[0]:
                c1 += 1
        for j in range(len(s2)):
            if s2[j] != s2[0]:
                c2 += 1
        if c1 == c2:
            count += 1
    print(count)