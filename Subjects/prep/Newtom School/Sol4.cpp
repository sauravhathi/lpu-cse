// Tripling (Public Contest: November 2022)
// Time Limit: 1 sec
// Memory Limit: 128000 kB
// Problem Statement
// You are given three integers arrays A, B and C, each of size N. Your task is to count the number of triplets ((i1, i2, ... iP), (j1, j2, ... jP), (k1, k2, ... kP)) such that:

// 1. P is a positive integer such that 1 ≤ P ≤ N
// 2. 1 ≤ i1 < i2 ... < iP ≤ N
// 3. 1 ≤ j1 < j2 ... < jP ≤ N
// 4. 1 ≤ k1 < k2 ... < kP ≤ N
// 5. AiQ = BjQ = CkQ for all Q such that 1 ≤ Q ≤ P.

// In other words, your task is to count the number of triplets, consisting of subsequences of arrays A, B and C respectively, such that they are all equal in value. Since the answer could be huge, print your answer modulo 998244353.
// Input
// The first line contains a single integer N.
// The second line contains N space-separated integers – A1, A2, ... AN.
// The third line contains N space-separated integers – B1, B2, ... BN.
// The fourth line contains N space-separated integers – C1, C2, ... CN.

// Constraints:
// 1 ≤ N ≤ 100
// 1 ≤ Ai, Bi, Ci ≤ 109
// Output
// Print a single integer – the number of such subsequence triplets, modulo 998244353.
// Example
// Sample Input 1:
// 2
// 1 1
// 1 1
// 1 1

// Sample Output 1:
// 9

// Sample Explanation:
// There are 8 subsequence triplets with content {1}, and one subsequence triplet with content {1, 1}.

// Sample Input 2:
// 3
// 1 2 3
// 1 2 3
// 1 2 3

// Sample Output 2:
// 7

// Sample Explanation:
// There are 7 subsequence triplets with content {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}.

// Sample Input 3:
// 5
// 6 8 2 2 9
// 8 2 7 7 7
// 1 8 2 4 8

// Sample Output 3:
// 6

// Sample Explanation:
// There are 6 subsequence triplets with content {8}, {2}, {8, 2}, {8, 2, 8}, {8, 2, 2}, {8, 2, 2, 8}.

// Sample Input 4:
// 5
// 1 1 1 1 1
// 1 1 1 1 1
// 1 1 1 1 1

// Sample Output 4:
// 2251

// Sample Explanation:
// There are 2250 subsequence triplets with content {1}, and one subsequence triplet with content {1, 1, 1, 1, 1}.

#include <bits/stdc++.h>

using namespace std;

#ifdef LOCAL
#include "algo/debug.h"
#else
#define debug(...) 42
#endif

template <typename T>
T inverse(T a, T m)
{
  T u = 0, v = 1;
  while (a != 0)
  {
    T t = m / a;
    m -= t * a;
    swap(a, m);
    u -= t * v;
    swap(u, v);
  }
  assert(m == 1);
  return u;
}

template <typename T>
class Modular
{
public:
  using Type = typename decay<decltype(T::value)>::type;

  constexpr Modular() : value() {}
  template <typename U>
  Modular(const U &x)
  {
    value = normalize(x);
  }

  template <typename U>
  static Type normalize(const U &x)
  {
    Type v;
    if (-mod() <= x && x < mod())
      v = static_cast<Type>(x);
    else
      v = static_cast<Type>(x % mod());
    if (v < 0)
      v += mod();
    return v;
  }

  const Type &operator()() const { return value; }
  template <typename U>
  explicit operator U() const { return static_cast<U>(value); }
  constexpr static Type mod() { return T::value; }

  Modular &operator+=(const Modular &other)
  {
    if ((value += other.value) >= mod())
      value -= mod();
    return *this;
  }
  Modular &operator-=(const Modular &other)
  {
    if ((value -= other.value) < 0)
      value += mod();
    return *this;
  }
  template <typename U>
  Modular &operator+=(const U &other) { return *this += Modular(other); }
  template <typename U>
  Modular &operator-=(const U &other) { return *this -= Modular(other); }
  Modular &operator++() { return *this += 1; }
  Modular &operator--() { return *this -= 1; }
  Modular operator++(int)
  {
    Modular result(*this);
    *this += 1;
    return result;
  }
  Modular operator--(int)
  {
    Modular result(*this);
    *this -= 1;
    return result;
  }
  Modular operator-() const { return Modular(-value); }

  template <typename U = T>
  typename enable_if<is_same<typename Modular<U>::Type, int>::value, Modular>::type &operator*=(const Modular &rhs)
  {
#ifdef _WIN32
    uint64_t x = static_cast<int64_t>(value) * static_cast<int64_t>(rhs.value);
    uint32_t xh = static_cast<uint32_t>(x >> 32), xl = static_cast<uint32_t>(x), d, m;
    asm(
        "divl %4; \n\t"
        : "=a"(d), "=d"(m)
        : "d"(xh), "a"(xl), "r"(mod()));
    value = m;
#else
    value = normalize(static_cast<int64_t>(value) * static_cast<int64_t>(rhs.value));
#endif
    return *this;
  }
  template <typename U = T>
  typename enable_if<is_same<typename Modular<U>::Type, long long>::value, Modular>::type &operator*=(const Modular &rhs)
  {
    long long q = static_cast<long long>(static_cast<long double>(value) * rhs.value / mod());
    value = normalize(value * rhs.value - q * mod());
    return *this;
  }
  template <typename U = T>
  typename enable_if<!is_integral<typename Modular<U>::Type>::value, Modular>::type &operator*=(const Modular &rhs)
  {
    value = normalize(value * rhs.value);
    return *this;
  }

  Modular &operator/=(const Modular &other) { return *this *= Modular(inverse(other.value, mod())); }

  friend const Type &abs(const Modular &x) { return x.value; }

  template <typename U>
  friend bool operator==(const Modular<U> &lhs, const Modular<U> &rhs);

  template <typename U>
  friend bool operator<(const Modular<U> &lhs, const Modular<U> &rhs);

  template <typename V, typename U>
  friend V &operator>>(V &stream, Modular<U> &number);

private:
  Type value;
};

template <typename T>
bool operator==(const Modular<T> &lhs, const Modular<T> &rhs) { return lhs.value == rhs.value; }
template <typename T, typename U>
bool operator==(const Modular<T> &lhs, U rhs) { return lhs == Modular<T>(rhs); }
template <typename T, typename U>
bool operator==(U lhs, const Modular<T> &rhs) { return Modular<T>(lhs) == rhs; }

template <typename T>
bool operator!=(const Modular<T> &lhs, const Modular<T> &rhs) { return !(lhs == rhs); }
template <typename T, typename U>
bool operator!=(const Modular<T> &lhs, U rhs) { return !(lhs == rhs); }
template <typename T, typename U>
bool operator!=(U lhs, const Modular<T> &rhs) { return !(lhs == rhs); }

template <typename T>
bool operator<(const Modular<T> &lhs, const Modular<T> &rhs) { return lhs.value < rhs.value; }

template <typename T>
Modular<T> operator+(const Modular<T> &lhs, const Modular<T> &rhs) { return Modular<T>(lhs) += rhs; }
template <typename T, typename U>
Modular<T> operator+(const Modular<T> &lhs, U rhs) { return Modular<T>(lhs) += rhs; }
template <typename T, typename U>
Modular<T> operator+(U lhs, const Modular<T> &rhs) { return Modular<T>(lhs) += rhs; }

template <typename T>
Modular<T> operator-(const Modular<T> &lhs, const Modular<T> &rhs) { return Modular<T>(lhs) -= rhs; }
template <typename T, typename U>
Modular<T> operator-(const Modular<T> &lhs, U rhs) { return Modular<T>(lhs) -= rhs; }
template <typename T, typename U>
Modular<T> operator-(U lhs, const Modular<T> &rhs) { return Modular<T>(lhs) -= rhs; }

template <typename T>
Modular<T> operator*(const Modular<T> &lhs, const Modular<T> &rhs) { return Modular<T>(lhs) *= rhs; }
template <typename T, typename U>
Modular<T> operator*(const Modular<T> &lhs, U rhs) { return Modular<T>(lhs) *= rhs; }
template <typename T, typename U>
Modular<T> operator*(U lhs, const Modular<T> &rhs) { return Modular<T>(lhs) *= rhs; }

template <typename T>
Modular<T> operator/(const Modular<T> &lhs, const Modular<T> &rhs) { return Modular<T>(lhs) /= rhs; }
template <typename T, typename U>
Modular<T> operator/(const Modular<T> &lhs, U rhs) { return Modular<T>(lhs) /= rhs; }
template <typename T, typename U>
Modular<T> operator/(U lhs, const Modular<T> &rhs) { return Modular<T>(lhs) /= rhs; }

template <typename T, typename U>
Modular<T> power(const Modular<T> &a, const U &b)
{
  assert(b >= 0);
  Modular<T> x = a, res = 1;
  U p = b;
  while (p > 0)
  {
    if (p & 1)
      res *= x;
    x *= x;
    p >>= 1;
  }
  return res;
}

template <typename T>
bool IsZero(const Modular<T> &number)
{
  return number() == 0;
}

template <typename T>
string to_string(const Modular<T> &number)
{
  return to_string(number());
}

template <typename U, typename T>
U &operator<<(U &stream, const Modular<T> &number)
{
  return stream << number();
}

template <typename U, typename T>
U &operator>>(U &stream, Modular<T> &number)
{
  typename common_type<typename Modular<T>::Type, long long>::type x;
  stream >> x;
  number.value = Modular<T>::normalize(x);
  return stream;
}

constexpr int md = 998244353;
using Mint = Modular<std::integral_constant<decay<decltype(md)>::type, md>>;

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(0);
  int n;
  cin >> n;
  vector<int> a(n);
  for (int i = 0; i < n; i++)
  {
    cin >> a[i];
  }
  vector<int> b(n);
  for (int i = 0; i < n; i++)
  {
    cin >> b[i];
  }
  vector<int> c(n);
  for (int i = 0; i < n; i++)
  {
    cin >> c[i];
  }
  vector<vector<vector<Mint>>> f(n + 2, vector<vector<Mint>>(n + 2, vector<Mint>(n + 2)));
  f[0][0][0] = 1;
  for (int i = 0; i <= n; i++)
  {
    for (int j = 0; j <= n; j++)
    {
      for (int k = 0; k <= n; k++)
      {
        if (i < n && j < n && k < n && a[i] == b[j] && b[j] == c[k])
        {
          f[i + 1][j + 1][k + 1] += f[i][j][k];
        }
        f[i + 1][j][k] += f[i][j][k];
        f[i][j + 1][k] += f[i][j][k];
        f[i][j][k + 1] += f[i][j][k];
        f[i + 1][j + 1][k] -= f[i][j][k];
        f[i + 1][j][k + 1] -= f[i][j][k];
        f[i][j + 1][k + 1] -= f[i][j][k];
        f[i + 1][j + 1][k + 1] += f[i][j][k];
      }
    }
  }
  cout << f[n][n][n] - 1 << '\n';
  return 0;
}