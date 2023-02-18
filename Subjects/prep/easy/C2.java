// Given a binary array of length N, find the total count of subarrays of size K with exactly M ones. 
 
// Input Format 
 
// The first line contains T, total number of testcases 
// The first line of each testcase contains three space-separated integers N, K and M, where N represents total length of binary array, K is the size of subarray and M is the number of ones present in the subarray. 
// The second line of each testcase contains N space-separated positive integers, A1, A2,A3, ......, AN. 

import java.util.*;

public class C2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        in.nextLine();
        while (t-- > 0) {

            int[] arr = new int[3];
            String[] s = in.nextLine().split(" ");
            for (int i = 0; i < 3; i++) {
                arr[i] = Integer.parseInt(s[i]);
            }
            int[] a = new int[arr[0]];
            String[] s1 = in.nextLine().split(" ");
            for (int i = 0; i < arr[0]; i++) {
                a[i] = Integer.parseInt(s1[i]);
            }

            int count = 0;
            for (int i = 0; i < arr[0] - arr[1] + 1; i++) {
                int c = 0;
                for (int j = i; j < i + arr[1]; j++) {
                    if (a[j] == 1) {
                        c++;
                    }
                }
                if (c >= arr[2]) {
                    count++;
                }
            }
            System.out.println(count);
        }
    }
}

#include <iostream>
#include <vector>

using namespace std;

int onesCount(vector<int> a, int k, int m) {
    int count = 0;
    for (int i = 0; i < a.size() - k + 1; i++) {
        int c = 0;
        for (int j = i; j < i + k; j++) {
            if (a[j] == 1) {
                c++;
            }
        }
        if (c >= m) {
            count++;
        }
    }
    return count;
}

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, k, m;
        cin >> n >> k >> m;
        vector<int> a(n);
        for (int i = 0; i < n; i++) {
            cin >> a[i];
        }
        cout << onesCount(a, k, m) << endl;
    }
    return 0;
}