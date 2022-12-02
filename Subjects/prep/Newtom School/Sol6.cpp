// One for Couples (Public Contest: November 2022)
// Time Limit: 2 sec
// Memory Limit: 128000 kB
// Problem Statement
// You are given an array of size N. You will now be asked Q queries. In each query, you will be given two pairs of integers (A, B) and (C, D). To answer this query, you must take all values in the subarray [A, B] and sort them. Similarly, take all values in the subarray [C, D] and sort them. You need to print "Yes" if these two subarrays after sorting differ in atmost one position, otherwise print "No".
// Input
// The first line contains a single integer T – the number of test cases.
// The first line of each test case contains two space-separated integers, N and Q.
// The second line contains N space-separated integers A1, A2 ... AN.
// Then Q lines follow, each line containing four space-separated integers A, B, C and D.

// Constraints:
// 1 ≤ T ≤ 10
// 1 ≤ N, Q ≤ 105
// 1 ≤ Ai ≤ 105
// B - A = D - C
// Output
// Output Q lines for each test case, each line containing either "Yes" or "No" denoting the answer to that query. Note that the output is case-sensitive.
// Example
// Sample Input 1:
// 3
// 3 3
// 1 2 3
// 1 2 2 3
// 1 3 1 3
// 1 1 3 3
// 6 3
// 1 2 3 1 2 3
// 1 3 4 6
// 1 4 2 5
// 1 5 2 6
// 3 3
// 1 1 1
// 1 2 2 3
// 1 1 2 2
// 1 3 1 3

// Sample Output 1:
// No
// Yes
// Yes
// Yes
// Yes
// No
// Yes
// Yes
// Yes

#include <bits/stdc++.h>
using namespace std;
#define int long long
#define INF 1000000000000000000
#define MOD 998244353

const int N = 100005; // 10^5
const int K = 400;
map<int, int> invpow;

// power function to calculate (a^b)%MOD in O(log b) time complexity
int power(int a, int b)
{
    if (b == 0)
        return 1;
    else
    {
        int x = power(a, b / 2);
        int y = (x * x) % MOD;
        if (b % 2)
            y = (y * a) % MOD;
        return y;
    }
}

// modular inverse of a number a in O(log MOD) time complexity
int inverse(int a)
{
    return power(a, MOD - 2);
}

// sqrtsearch function to find the index of the first element greater than or equal to x in the array
bool sqrtsearch(set<int> s[], int a[], int l, int r, int x)
{
    int i = l;
    while (i % K != 0 && i <= r)
    {
        if (a[i] == x)
            return true;
        i++;
    }
    while (i + K <= r)
    {
        if (s[i / K].find(x) != s[i / K].end())
            return true;
        i += K;
    }
    while (i <= r)
    {
        if (a[i] == x)
            return true;
        i++;
    }
    return false;
}

// nextgreater function to find the next greater element of the element at index i in the array
int nextgreater(set<int> s[], int a[], int l, int r, int x)
{
    int mn = INF;
    int i = l;
    while (i % K != 0 && i <= r)
    {
        if (a[i] > x)
            mn = min(mn, a[i]);
        i++;
    }
    while (i + K <= r)
    {
        // upper_bound function to find the first element greater than x in the set
        auto it = s[i / K].upper_bound(x);
        if (it != s[i / K].end())
            mn = min(mn, *it);
        i += K;
    }
    while (i <= r)
    {
        if (a[i] > x)
            mn = min(mn, a[i]);
        i++;
    }
    return mn;
}

// solve function to solve the problem for each test case
void solve(int tc)
{
    int n, q;
    cin >> n >> q;
    int a[n];
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    set<int> s[n / K + 1];
    for (int i = 0; i < n; i++)
    {
        s[i / K].insert(a[i]);
    }
    pair<int, int> hash[n];
    hash[0].first = a[0];
    hash[0].second = power(3, a[0]);
    for (int i = 1; i < n; i++)
    {
        hash[i].first = hash[i - 1].first + a[i];
        hash[i].second = (hash[i - 1].second + power(3, a[i])) % MOD;
    }
    while (q--)
    {
        int aa, b, c, d;
        cin >> aa >> b >> c >> d;
        aa--, b--, c--, d--;
        pair<int, int> hash1 = hash[b];
        if (aa > 0)
        {
            hash1.first -= hash[aa - 1].first;
            hash1.second = (hash1.second + MOD - hash[aa - 1].second) % MOD;
        }
        pair<int, int> hash2 = hash[d];
        if (c > 0)
        {
            hash2.first -= hash[c - 1].first;
            hash2.second = (hash2.second + MOD - hash[c - 1].second) % MOD;
        }
        if (hash1.first == hash2.first && hash1.second == hash2.second)
        {
            cout << "Yes\n";
        }
        else if (hash1.first == hash2.first)
        {
            cout << "No\n";
        }
        else if (hash1.first > hash2.first)
        {
            int x = hash1.first - hash2.first;
            int y = (hash1.second + MOD - hash2.second) % MOD;
            int v = invpow[(y * inverse((power(3, x) + MOD - 1) % MOD)) % MOD];
            if (sqrtsearch(s, a, c, d, v) && nextgreater(s, a, c, d, v) >= v + x)
                cout << "Yes\n";
            else
                cout << "No\n";
        }
        else
        {
            int x = hash2.first - hash1.first;
            int y = (hash2.second + MOD - hash1.second) % MOD;
            int v = invpow[(y * inverse((power(3, x) + MOD - 1) % MOD)) % MOD];
            if (sqrtsearch(s, a, aa, b, v) && nextgreater(s, a, aa, b, v) >= v + x)
                cout << "Yes\n";
            else
                cout << "No\n";
        }
    }
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    // invpow is a map which stores the inverse of powers of 3
    for (int i = 0; i < N; i++)
    {
        invpow[power(3, i)] = i;
    }
    int tc = 1;
    cin >> tc;
    // solve function is called for each test case
    for (int ttc = 1; ttc <= tc; ttc++)
        solve(ttc);
    return 0;
}