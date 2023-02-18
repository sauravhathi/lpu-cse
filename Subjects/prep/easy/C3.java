import java.util.Scanner;

// Given two strings S and T check how many minimum characters in S we should change such that T occurs as a substring in S. 
 
// Input Format 
 
// The first line contains a string S. 
// The next line contains a string T. 
// Constraints 
 
// 1<=|S|,|T|<=1000 
// The length of T is at most that of S. 
// S and T consist of lowercase English letters. 
// Output Format 
 
// Print the minimum number of characters in S that need to be changed.

public class C3 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String s = in.nextLine();
        String t = in.nextLine();
        int count = 0;
        for (int i = 0; i < s.length() - t.length() + 1; i++) {
            int c = 0;
            for (int j = i; j < i + t.length(); j++) {
                if (s.charAt(j) != t.charAt(j - i)) {
                    c++;
                }
            }
            if (c < count || i == 0) {
                count = c;
            }
        }
        System.out.println(count);
    }
}


// python

s = input()
t = input()
count = 0
for i in range(len(s) - len(t) + 1):
    c = 0
    for j in range(i, i + len(t)):
        if s[j] != t[j - i]:
            c += 1
    if c < count or i == 0:
        count = c
print(count)

// c++

#include <iostream>
#include <string>

using namespace std;

int main() {
    string s, t;
    cin >> s >> t;
    int count = 0;
    for (int i = 0; i < s.length() - t.length() + 1; i++) {
        int c = 0;
        for (int j = i; j < i + t.length(); j++) {
            if (s[j] != t[j - i]) {
                c++;
            }
        }
        if (c < count || i == 0) {
            count = c;
        }
    }
    cout << count;
}

// javascript

var s = readline();
var t = readline();
var count = 0;
for (var i = 0; i < s.length - t.length + 1; i++) {
    var c = 0;
    for (var j = i; j < i + t.length; j++) {
        if (s[j] != t[j - i]) {
            c++;
        }
    }
    if (c < count || i == 0) {
        count = c;
    }
}

console.log(count);