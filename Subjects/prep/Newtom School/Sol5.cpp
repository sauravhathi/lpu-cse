// The Three Musketeers (Public Contest: November 2022)
// Time Limit: 2 sec
// Memory Limit: 128000 kB
// Problem Statement
// You are given a grid of size N×M, whose each square is either empty or contains either a soft stone or a hard stone.

// We are going to place bombs in the empty cells in the grid in such a way that if two bombs are present in the same row or column,
// then there must be a hard stone in between them.

// What is the maximum number of bombs that we can plant in the grid while satisfying the above constraint?
// Input
// The first line contains two space-separated integers N and M.
// Then N lines follow, each line containing M characters, where each character is one of 'E', 'S' or 'H' – denoting the given grid.
// Here 'E' means an empty cell, 'S' means a soft stone and 'H' means a hard stone.

// Constraints:
// 1 ≤ N, M ≤ 50
// Output
// Print a single integer – the maximum number of bombs we can place without violating the constraints.
// Example
// Sample Input 1:
// 3 3
// S H E
// E S H
// H S E

// Sample Output 1:
// 3

// Sample Explanation 1:
// We can put one bomb on each empty cell. We can put bombs on (1, 3) and (3, 3), as there is a hard stone in between them at (2, 3).

// Sample Input 2:
// 3 3
// EEE
// EEE
// EEE

// Sample Output 2:
// 3

// Sample Input 3:
// 3 3
// EEE
// EHE
// SES

// Sample Output 3:
// 4

// Sample Input 4:
// 3 3
// EEE
// ESE
// EEE

// Sample Output 4:
// 3

// Sample Input 5:
// 9 9
// SHESHESHE
// HESHESHES
// ESHESHESH
// SEHSEHSEH
// EHSEHSEHS
// HSEHSEHSE
// SHESHESHE
// HESHESHES
// ESHESHESH

// Sample Output 5:
// 18

#include <bits/stdc++.h>

using namespace std;

#ifdef LOCAL
#include "algo/debug.h"
#else
#define debug(...) 42
#endif

class matching
{
public:
  vector<vector<int>> g;
  vector<int> pa;
  vector<int> pb;
  vector<int> was;
  int n, m;
  int res;
  int iter;

  matching(int _n, int _m) : n(_n), m(_m)
  {
    assert(0 <= n && 0 <= m);
    pa = vector<int>(n, -1);
    pb = vector<int>(m, -1);
    was = vector<int>(n, 0);
    g.resize(n);
    res = 0;
    iter = 0;
  }

  void add(int from, int to)
  {
    assert(0 <= from && from < n && 0 <= to && to < m);
    g[from].push_back(to);
  }

  bool dfs(int v)
  {
    was[v] = iter;
    for (int u : g[v])
    {
      if (pb[u] == -1)
      {
        pa[v] = u;
        pb[u] = v;
        return true;
      }
    }
    for (int u : g[v])
    {
      if (was[pb[u]] != iter && dfs(pb[u]))
      {
        pa[v] = u;
        pb[u] = v;
        return true;
      }
    }
    return false;
  }

  int solve()
  {
    while (true)
    {
      iter++;
      int add = 0;
      for (int i = 0; i < n; i++)
      {
        if (pa[i] == -1 && dfs(i))
        {
          add++;
        }
      }
      if (add == 0)
      {
        break;
      }
      res += add;
    }
    return res;
  }

  int run_one(int v)
  {
    if (pa[v] != -1)
    {
      return 0;
    }
    iter++;
    return (int)dfs(v);
  }
};

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(0);
  int h, w;
  cin >> h >> w;
  vector<string> s(h);
  for (int i = 0; i < h; i++)
  {
    cin >> s[i];
  }
  vector<vector<int>> id(h, vector<int>(w, -1));
  int cnt = 0;
  for (int i = 0; i < h; i++)
  {
    for (int j = 0; j < w; j++)
    {
      if (s[i][j] != 'H')
      {
        if (j == 0 || s[i][j - 1] == 'H')
        {
          id[i][j] = cnt++;
        }
        else
        {
          id[i][j] = id[i][j - 1];
        }
      }
    }
  }
  matching mat(cnt, h * w);
  int new_cnt = 0;
  for (int j = 0; j < w; j++)
  {
    for (int i = 0; i < h; i++)
    {
      if (s[i][j] != 'H')
      {
        if (i == 0 || s[i - 1][j] == 'H')
        {
          new_cnt++;
        }
        if (s[i][j] == 'E')
        {
          mat.add(id[i][j], new_cnt - 1);
        }
      }
    }
  }
  cout << mat.solve() << '\n';
  return 0;
}