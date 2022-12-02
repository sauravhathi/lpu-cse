// Life, the Universe, and Everything? (Public Contest: November 2022)
// Time Limit: 5 sec
// Memory Limit: 128000 kB
// Problem Statement
// You are given an undirected unweighted connected graph consisting of N vertices (numbered 1 to N) and N edges.
// Let d(u, v) denote the shortest distance between nodes u and v in the graph.
// You need to find the sum of d(u, v)K over all pairs (u, v) such that 1 ≤ u < v ≤ N.
// Since this sum can be large, you need to print it modulo 998244353.

// Note: There can be self-edges in the graph.
// Input
// The first line contains two space-separated integers N and K.
// Then N lines follow, each containing two space-separated integers u and v, denoting an edge between vertices u and v.

// Constraints:
// 1 ≤ N ≤ 2×105
// 1 ≤ K ≤ 109
// 1 ≤ u, v ≤ N
// Output
// Print a single integer, the summation of d(u, v)K modulo 998244353.
// Example
// Sample Input 1:
// 3 1
// 1 2
// 2 3
// 3 1

// Sample Output 1:
// 3

// Sample Explanation 1:
// Answer = d(1,2) + d(1,3) + d(2,3) = 1 + 1 + 1 = 3

// Sample Input 2:
// 4 2
// 1 2
// 1 3
// 1 4
// 1 1

// Sample Output 2:
// 15

// Sample Explanation 2:
// Answer = d(1,2)2 + d(1,3)2 + d(1,4)2 + d(2,3)2 + d(2,4)2 + d(3,4)2 = 12 + 12 + 12 + 22 + 22 + 22 = 15

#include <bits/stdc++.h>

using namespace std;

#ifdef LOCAL
#include "algo/debug.h"
#else
#define debug(...) 42
#endif

// https://judge.yosupo.jp/submission/72269

#define all(obj) (obj).begin(), (obj).end()
#define range(i, l, r) for (int i = l; i < r; i++)
#define bit_subset(i, S) for (int i = S, zero_cnt = 0; (zero_cnt += i == S) < 2; i = (i - 1) & S)
#define bit_kpop(i, n, k) for (int i = (1 << k) - 1, x_bit, y_bit; i < (1 << n); x_bit = (i & -i), y_bit = i + x_bit, i = (!i ? (1 << n) : ((i & ~y_bit) / x_bit >> 1) | y_bit))
#define bit_kth(i, k) ((i >> k) & 1)
#define bit_highest(i) (i ? 63 - __builtin_clzll(i) : -1)
#define bit_lowest(i) (i ? __builtin_ctzll(i) : -1)
#define c2(n) ((ll(n) * (n - 1)) / 2)
#define c3(n) (((ll(n) * (n - 1)) * (n - 2)) / 6)
using ll = long long;
using ld = long double;
using ul = uint64_t;
using pi = std::pair<int, int>;
using pl = std::pair<ll, ll>;
using namespace std;

constexpr uint32_t MASK32 = 0xffffffff;
constexpr uint32_t SIGN32 = 0x80000000;
uint64_t encode_signed(int a, int b) { return ((uint64_t(a) + SIGN32) << 32) + (uint64_t(b) + SIGN32); }
pi decode_signed(uint64_t x) { return {int((x >> 32) - SIGN32), int((x & MASK32) - SIGN32)}; }
ll encode(int a, int b) { return (ll(a) << 32) + b; }
pi decode(ll x) { return {x >> 32, x & MASK32}; }

namespace internal
{
  template <class T>
  using is_integral = typename std::is_integral<T>;
  template <class T>
  using is_signed_int =
      typename std::conditional<is_integral<T>::value && std::is_signed<T>::value, std::true_type, std::false_type>::type;
  template <class T>
  using is_unsigned_int =
      typename std::conditional<is_integral<T>::value && std::is_unsigned<T>::value,
                                std::true_type, std::false_type>::type;
  template <class T>
  using to_unsigned = typename std::conditional<is_signed_int<T>::value,
                                                std::make_unsigned<T>, std::common_type<T>>::type;
  template <class T>
  using is_signed_int_t = std::enable_if_t<is_signed_int<T>::value>;
  template <class T>
  using is_unsigned_int_t = std::enable_if_t<is_unsigned_int<T>::value>;
  template <class T>
  using to_unsigned_t = typename to_unsigned<T>::type;
  //<internal_math>
  constexpr long long safe_mod(long long x, long long m)
  {
    x %= m;
    if (x < 0)
      x += m;
    return x;
  }
  struct barrett
  {
    unsigned int _m;
    unsigned long long im;
    barrett(unsigned int m) : _m(m), im((unsigned long long)(-1) / m + 1) {}
    unsigned int umod() const { return _m; }
    unsigned int mul(unsigned int a, unsigned int b) const
    {
      unsigned long long z = a;
      z *= b;
      unsigned long long x = (unsigned long long)(((unsigned __int128)(z)*im) >> 64);
      unsigned int v = (unsigned int)(z - x * _m);
      if (_m <= v)
        v += _m;
      return v;
    }
  };
  constexpr long long pow_mod_constexpr(long long x, long long n, int m)
  {
    if (m == 1)
      return 0;
    unsigned int _m = (unsigned int)(m);
    unsigned long long r = 1;
    unsigned long long y = safe_mod(x, m);
    while (n)
    {
      if (n & 1)
        r = (r * y) % _m;
      y = (y * y) % _m;
      n >>= 1;
    }
    return r;
  }

  constexpr bool is_prime_constexpr(int n)
  {
    if (n <= 1)
      return false;
    if (n == 2 || n == 7 || n == 61)
      return true;
    if (n % 2 == 0)
      return false;
    long long d = n - 1;
    while (d % 2 == 0)
      d /= 2;
    constexpr long long bases[3] = {2, 7, 61};
    for (long long a : bases)
    {
      long long t = d;
      long long y = pow_mod_constexpr(a, t, n);
      while (t != n - 1 && y != 1 && y != n - 1)
      {
        y = y * y % n;
        t <<= 1;
      }
      if (y != n - 1 && t % 2 == 0)
      {
        return false;
      }
    }
    return true;
  }
  template <int n>
  constexpr bool is_prime = is_prime_constexpr(n);

  constexpr std::pair<long long, long long> inv_gcd(long long a, long long b)
  {
    a = safe_mod(a, b);
    if (a == 0)
      return {b, 0};
    long long s = b, t = a;
    long long m0 = 0, m1 = 1;

    while (t)
    {
      long long u = s / t;
      s -= t * u;
      m0 -= m1 * u;
      auto tmp = s;
      s = t;
      t = tmp;
      tmp = m0;
      m0 = m1;
      m1 = tmp;
    }
    if (m0 < 0)
      m0 += b / s;
    return {s, m0};
  }
  constexpr int primitive_root_constexpr(int m)
  {
    if (m == 2)
      return 1;
    if (m == 167772161)
      return 3;
    if (m == 469762049)
      return 3;
    if (m == 754974721)
      return 11;
    if (m == 998244353)
      return 3;
    int divs[20] = {};
    divs[0] = 2;
    int cnt = 1;
    int x = (m - 1) / 2;
    while (x % 2 == 0)
      x /= 2;
    for (int i = 3; (long long)(i)*i <= x; i += 2)
    {
      if (x % i == 0)
      {
        divs[cnt++] = i;
        while (x % i == 0)
        {
          x /= i;
        }
      }
    }
    if (x > 1)
      divs[cnt++] = x;
    for (int g = 2;; g++)
    {
      bool ok = true;
      for (int i = 0; i < cnt; i++)
      {
        if (pow_mod_constexpr(g, (m - 1) / divs[i], m) == 1)
        {
          ok = false;
          break;
        }
      }
      if (ok)
        return g;
    }
  }
  template <int m>
  constexpr int primitive_root = primitive_root_constexpr(m);
  //<internal_bit>
  int ceil_pow2(int n)
  {
    int x = 0;
    while ((1U << x) < (unsigned int)(n))
      x++;
    return x;
  }
  int bsf(unsigned int n)
  {
    return __builtin_ctz(n);
  }

  //<modint>
  struct modint_base
  {
  };
  struct static_modint_base : modint_base
  {
  };
  template <class T>
  using is_modint = std::is_base_of<modint_base, T>;
  template <class T>
  using is_modint_t = std::enable_if_t<is_modint<T>::value>;
  template <int m, std::enable_if_t<(1 <= m)> * = nullptr>
  struct static_modint : internal::static_modint_base
  {
    using mint = static_modint;

  public:
    static constexpr int mod() { return m; }
    static mint raw(int v)
    {
      mint x;
      x._v = v;
      return x;
    }
    static_modint() : _v(0) {}
    template <class T, internal::is_signed_int_t<T> * = nullptr>
    static_modint(T v)
    {
      long long x = (long long)(v % (long long)(umod()));
      if (x < 0)
        x += umod();
      _v = (unsigned int)(x);
    }
    template <class T, internal::is_unsigned_int_t<T> * = nullptr>
    static_modint(T v)
    {
      _v = (unsigned int)(v % umod());
    }
    static_modint(bool v) { _v = ((unsigned int)(v) % umod()); }

    unsigned int val() const { return _v; }

    mint &operator++()
    {
      _v++;
      if (_v == umod())
        _v = 0;
      return *this;
    }
    mint &operator--()
    {
      if (_v == 0)
        _v = umod();
      _v--;
      return *this;
    }
    mint operator++(int)
    {
      mint result = *this;
      ++*this;
      return result;
    }
    mint operator--(int)
    {
      mint result = *this;
      --*this;
      return result;
    }

    mint &operator+=(const mint &rhs)
    {
      _v += rhs._v;
      if (_v >= umod())
        _v -= umod();
      return *this;
    }
    mint &operator-=(const mint &rhs)
    {
      _v -= rhs._v;
      if (_v >= umod())
        _v += umod();
      return *this;
    }
    mint &operator*=(const mint &rhs)
    {
      unsigned long long z = _v;
      z *= rhs._v;
      _v = (unsigned int)(z % umod());
      return *this;
    }
    mint &operator/=(const mint &rhs) { return *this = *this * rhs.inv(); }

    mint operator+() const { return *this; }
    mint operator-() const { return mint() - *this; }

    mint pow(long long n) const
    {
      assert(0 <= n);
      mint x = *this, r = 1;
      while (n)
      {
        if (n & 1)
          r *= x;
        x *= x;
        n >>= 1;
      }
      return r;
    }
    mint inv() const
    {
      if (prime)
      {
        assert(_v);
        return pow(umod() - 2);
      }
      else
      {
        auto eg = internal::inv_gcd(_v, m);
        assert(eg.first == 1);
        return eg.second;
      }
    }

    friend mint operator+(const mint &lhs, const mint &rhs)
    {
      return mint(lhs) += rhs;
    }
    friend mint operator-(const mint &lhs, const mint &rhs)
    {
      return mint(lhs) -= rhs;
    }
    friend mint operator*(const mint &lhs, const mint &rhs)
    {
      return mint(lhs) *= rhs;
    }
    friend mint operator/(const mint &lhs, const mint &rhs)
    {
      return mint(lhs) /= rhs;
    }
    friend bool operator==(const mint &lhs, const mint &rhs)
    {
      return lhs._v == rhs._v;
    }
    friend bool operator!=(const mint &lhs, const mint &rhs)
    {
      return lhs._v != rhs._v;
    }

  private:
    unsigned int _v;
    static constexpr unsigned int umod() { return m; }
    static constexpr bool prime = internal::is_prime<m>;
  };

  template <int id>
  struct dynamic_modint : internal::modint_base
  {
    using mint = dynamic_modint;

  public:
    static int mod() { return (int)(bt.umod()); }
    static void set_mod(int m)
    {
      assert(1 <= m);
      bt = internal::barrett(m);
    }
    static mint raw(int v)
    {
      mint x;
      x._v = v;
      return x;
    }
    dynamic_modint() : _v(0) {}
    template <class T, internal::is_signed_int_t<T> * = nullptr>
    dynamic_modint(T v)
    {
      long long x = (long long)(v % (long long)(mod()));
      if (x < 0)
        x += mod();
      _v = (unsigned int)(x);
    }
    template <class T, internal::is_unsigned_int_t<T> * = nullptr>
    dynamic_modint(T v)
    {
      _v = (unsigned int)(v % mod());
    }
    dynamic_modint(bool v) { _v = ((unsigned int)(v) % mod()); }

    unsigned int val() const { return _v; }

    mint &operator++()
    {
      _v++;
      if (_v == umod())
        _v = 0;
      return *this;
    }
    mint &operator--()
    {
      if (_v == 0)
        _v = umod();
      _v--;
      return *this;
    }
    mint operator++(int)
    {
      mint result = *this;
      ++*this;
      return result;
    }
    mint operator--(int)
    {
      mint result = *this;
      --*this;
      return result;
    }

    mint &operator+=(const mint &rhs)
    {
      _v += rhs._v;
      if (_v >= umod())
        _v -= umod();
      return *this;
    }
    mint &operator-=(const mint &rhs)
    {
      _v += mod() - rhs._v;
      if (_v >= umod())
        _v -= umod();
      return *this;
    }
    mint &operator*=(const mint &rhs)
    {
      _v = bt.mul(_v, rhs._v);
      return *this;
    }
    mint &operator/=(const mint &rhs) { return *this = *this * rhs.inv(); }

    mint operator+() const { return *this; }
    mint operator-() const { return mint() - *this; }

    mint pow(long long n) const
    {
      assert(0 <= n);
      mint x = *this, r = 1;
      while (n)
      {
        if (n & 1)
          r *= x;
        x *= x;
        n >>= 1;
      }
      return r;
    }
    mint inv() const
    {
      auto eg = internal::inv_gcd(_v, mod());
      assert(eg.first == 1);
      return eg.second;
    }

    friend mint operator+(const mint &lhs, const mint &rhs)
    {
      return mint(lhs) += rhs;
    }
    friend mint operator-(const mint &lhs, const mint &rhs)
    {
      return mint(lhs) -= rhs;
    }
    friend mint operator*(const mint &lhs, const mint &rhs)
    {
      return mint(lhs) *= rhs;
    }
    friend mint operator/(const mint &lhs, const mint &rhs)
    {
      return mint(lhs) /= rhs;
    }
    friend bool operator==(const mint &lhs, const mint &rhs)
    {
      return lhs._v == rhs._v;
    }
    friend bool operator!=(const mint &lhs, const mint &rhs)
    {
      return lhs._v != rhs._v;
    }

  private:
    unsigned int _v;
    static internal::barrett bt;
    static unsigned int umod() { return bt.umod(); }
  };
  template <int id>
  internal::barrett dynamic_modint<id>::bt = 998244353;
  // using modint998244353 = static_modint<998244353>;
  // using modint1000000007 = static_modint<1000000007>;
  // using modint = dynamic_modint<-1>;
  template <class T>
  using is_static_modint = std::is_base_of<internal::static_modint_base, T>;

  template <class T>
  using is_static_modint_t = std::enable_if_t<is_static_modint<T>::value>;

  template <class>
  struct is_dynamic_modint : public std::false_type
  {
  };
  template <int id>
  struct is_dynamic_modint<dynamic_modint<id>> : public std::true_type
  {
  };

  template <class T>
  using is_dynamic_modint_t = std::enable_if_t<is_dynamic_modint<T>::value>;

  template <class mint, internal::is_static_modint_t<mint> * = nullptr>
  void butterfly(std::vector<mint> &a)
  {
    static constexpr int g = internal::primitive_root<mint::mod()>;
    int n = int(a.size());
    int h = internal::ceil_pow2(n);
    static bool first = true;
    static mint sum_e[30]; // sum_e[i] = ies[0] * ... * ies[i - 1] * es[i]
    if (first)
    {
      first = false;
      mint es[30], ies[30]; // es[i]^(2^(2+i)) == 1
      int cnt2 = bsf(mint::mod() - 1);
      mint e = mint(g).pow((mint::mod() - 1) >> cnt2), ie = e.inv();
      for (int i = cnt2; i >= 2; i--)
      {
        // e^(2^i) == 1
        es[i - 2] = e;
        ies[i - 2] = ie;
        e *= e;
        ie *= ie;
      }
      mint now = 1;
      for (int i = 0; i <= cnt2 - 2; i++)
      {
        sum_e[i] = es[i] * now;
        now *= ies[i];
      }
    }
    for (int ph = 1; ph <= h; ph++)
    {
      int w = 1 << (ph - 1), p = 1 << (h - ph);
      mint now = 1;
      for (int s = 0; s < w; s++)
      {
        int offset = s << (h - ph + 1);
        for (int i = 0; i < p; i++)
        {
          auto l = a[i + offset];
          auto r = a[i + offset + p] * now;
          a[i + offset] = l + r;
          a[i + offset + p] = l - r;
        }
        now *= sum_e[internal::bsf(~(unsigned int)(s))];
      }
    }
  }

  template <class mint, internal::is_static_modint_t<mint> * = nullptr>
  void butterfly_inv(std::vector<mint> &a)
  {
    static constexpr int g = internal::primitive_root<mint::mod()>;
    int n = int(a.size());
    int h = internal::ceil_pow2(n);

    static bool first = true;
    static mint sum_ie[30]; // sum_ie[i] = es[0] * ... * es[i - 1] * ies[i]
    if (first)
    {
      first = false;
      mint es[30], ies[30]; // es[i]^(2^(2+i)) == 1
      int cnt2 = bsf(mint::mod() - 1);
      mint e = mint(g).pow((mint::mod() - 1) >> cnt2), ie = e.inv();
      for (int i = cnt2; i >= 2; i--)
      {
        // e^(2^i) == 1
        es[i - 2] = e;
        ies[i - 2] = ie;
        e *= e;
        ie *= ie;
      }
      mint now = 1;
      for (int i = 0; i <= cnt2 - 2; i++)
      {
        sum_ie[i] = ies[i] * now;
        now *= es[i];
      }
    }

    for (int ph = h; ph >= 1; ph--)
    {
      int w = 1 << (ph - 1), p = 1 << (h - ph);
      mint inow = 1;
      for (int s = 0; s < w; s++)
      {
        int offset = s << (h - ph + 1);
        for (int i = 0; i < p; i++)
        {
          auto l = a[i + offset];
          auto r = a[i + offset + p];
          a[i + offset] = l + r;
          a[i + offset + p] =
              (unsigned long long)(mint::mod() + l.val() - r.val()) *
              inow.val();
        }
        inow *= sum_ie[internal::bsf(~(unsigned int)(s))];
      }
    }
  }

  template <class mint, internal::is_static_modint_t<mint> * = nullptr>
  std::vector<mint> _convolution(std::vector<mint> a, std::vector<mint> b)
  {
    int n = int(a.size()), m = int(b.size());
    if (!n || !m)
      return {};
    if (std::min(n, m) <= 60)
    {
      if (n < m)
      {
        std::swap(n, m);
        std::swap(a, b);
      }
      std::vector<mint> ans(n + m - 1);
      for (int i = 0; i < n; i++)
      {
        for (int j = 0; j < m; j++)
        {
          ans[i + j] += a[i] * b[j];
        }
      }
      return ans;
    }
    int z = 1 << internal::ceil_pow2(n + m - 1);
    a.resize(z);
    internal::butterfly(a);
    b.resize(z);
    internal::butterfly(b);
    for (int i = 0; i < z; i++)
    {
      a[i] *= b[i];
    }
    internal::butterfly_inv(a);
    a.resize(n + m - 1);
    mint iz = mint(z).inv();
    for (int i = 0; i < n + m - 1; i++)
      a[i] *= iz;
    return a;
  }

  template <unsigned int mod = 998244353, class T,
            std::enable_if_t<internal::is_integral<T>::value> * = nullptr>
  std::vector<T> _convolution(const std::vector<T> &a, const std::vector<T> &b)
  {
    int n = int(a.size()), m = int(b.size());
    if (!n || !m)
      return {};

    using mint = internal::static_modint<mod>;
    std::vector<mint> a2(n), b2(m);
    for (int i = 0; i < n; i++)
    {
      a2[i] = mint(a[i]);
    }
    for (int i = 0; i < m; i++)
    {
      b2[i] = mint(b[i]);
    }
    auto c2 = _convolution(move(a2), move(b2));
    std::vector<T> c(n + m - 1);
    for (int i = 0; i < n + m - 1; i++)
    {
      c[i] = c2[i].val();
    }
    return c;
  }

  std::vector<long long> convolution_ll(const std::vector<long long> &a,
                                        const std::vector<long long> &b)
  {
    int n = int(a.size()), m = int(b.size());
    if (!n || !m)
      return {};
    static constexpr unsigned long long MOD1 = 754974721; // 2^24
    static constexpr unsigned long long MOD2 = 167772161; // 2^25
    static constexpr unsigned long long MOD3 = 469762049; // 2^26
    static constexpr unsigned long long M2M3 = MOD2 * MOD3;
    static constexpr unsigned long long M1M3 = MOD1 * MOD3;
    static constexpr unsigned long long M1M2 = MOD1 * MOD2;
    static constexpr unsigned long long M1M2M3 = MOD1 * MOD2 * MOD3;
    static constexpr unsigned long long i1 =
        internal::inv_gcd(MOD2 * MOD3, MOD1).second;
    static constexpr unsigned long long i2 =
        internal::inv_gcd(MOD1 * MOD3, MOD2).second;
    static constexpr unsigned long long i3 =
        internal::inv_gcd(MOD1 * MOD2, MOD3).second;
    auto c1 = internal::_convolution<MOD1>(a, b);
    auto c2 = internal::_convolution<MOD2>(a, b);
    auto c3 = internal::_convolution<MOD3>(a, b);
    std::vector<long long> c(n + m - 1);
    for (int i = 0; i < n + m - 1; i++)
    {
      unsigned long long x = 0;
      x += (c1[i] * i1) % MOD1 * M2M3;
      x += (c2[i] * i2) % MOD2 * M1M3;
      x += (c3[i] * i3) % MOD3 * M1M2;
      long long diff =
          c1[i] - internal::safe_mod((long long)(x), (long long)(MOD1));
      if (diff < 0)
        diff += MOD1;
      static constexpr unsigned long long offset[5] = {
          0, 0, M1M2M3, 2 * M1M2M3, 3 * M1M2M3};
      x -= offset[diff % 5];
      c[i] = x;
    }
    return c;
  }
}

ll mpow(ll a, ll b, ll MOD = -1)
{
  ll ret = 1, num = a;
  while (b > 0)
  {
    if (b % 2)
      ret = (ret * num) % MOD;
    num = (num * num) % MOD;
    b /= 2;
  }
  return ret;
}
vector<ll> int32mod_conv(vector<ll> a, vector<ll> b, ll MOD, int MAXSIZE = -1)
{
  if (MAXSIZE != -1)
  {
    if (a.size() > MAXSIZE)
      a.resize(MAXSIZE);
    if (b.size() > MAXSIZE)
      b.resize(MAXSIZE);
  }
  if (MOD == 998244353)
    return internal::_convolution<998244353, ll>(a, b);
  vector<ll> A = internal::_convolution<167772161>(a, b);
  vector<ll> B = internal::_convolution<469762049>(a, b);
  vector<ll> C = internal::_convolution<1224736769>(a, b);
  ll N = A.size();
  vector<ll> ret(N);
  ll x = 167772161, y = 469762049, z = 1224736769;
  ll ix = mpow(x, y - 2, y);
  ll ixy = mpow((x * y) % z, z - 2, z);
  for (int i = 0; i < N; i++)
  {
    ll v = ((B[i] - A[i]) * ix) % y;
    if (v < 0)
      v += y;
    ll xxv = A[i] + x * v;
    v = ((C[i] - (xxv % z)) * ixy) % z;
    if (v < 0)
      v += z;
    ret[i] = ((xxv % MOD) + ((x * y) % MOD) * v) % MOD;
  }
  if (MAXSIZE != -1 && (int)ret.size() > MAXSIZE)
    ret.resize(MAXSIZE);
  return ret;
}
template <int MOD>
vector<ll> static_int32mod_conv(vector<ll> a, vector<ll> b, int MAXSIZE = -1)
{
  if (MAXSIZE != -1)
  {
    if (a.size() > MAXSIZE)
      a.resize(MAXSIZE);
    if (b.size() > MAXSIZE)
      b.resize(MAXSIZE);
  }
  if (MOD == 998244353)
    return internal::_convolution<998244353, ll>(a, b);
  vector<ll> A = internal::_convolution<167772161>(a, b);
  vector<ll> B = internal::_convolution<469762049>(a, b);
  vector<ll> C = internal::_convolution<1224736769>(a, b);
  ll N = A.size();
  vector<ll> ret(N);
  ll x = 167772161, y = 469762049, z = 1224736769;
  ll ix = mpow(x, y - 2, y);
  ll ixy = mpow((x * y) % z, z - 2, z);
  for (int i = 0; i < N; i++)
  {
    ll v = ((B[i] - A[i]) * ix) % y;
    if (v < 0)
      v += y;
    ll xxv = A[i] + x * v;
    v = ((C[i] - (xxv % z)) * ixy) % z;
    if (v < 0)
      v += z;
    ret[i] = ((xxv % MOD) + ((x * y) % MOD) * v) % MOD;
  }
  if (MAXSIZE != -1 && (int)ret.size() > MAXSIZE)
    ret.resize(MAXSIZE);
  return ret;
}
// using modint998244353 = internal::static_modint<998244353>;
// using modint1000000007 = internal::static_modint<1000000007>;
// using modint = internal::dynamic_modint<-1>;

using graph = std::vector<std::vector<int>>;
struct __info
{ // ????????????????, ?????, ????
  int size, depth, parent;
  __info() : size(0), depth(std::numeric_limits<int>::max()), parent(-1) {}
};
std::pair<graph, std::vector<__info>> centroid_decomposition(const graph &G)
{
  int n = G.size();
  assert(n);
  graph g(n);
  std::vector<__info> info(n);
  auto add_edge = [&](int p, int c) -> void
  {
    g[p].push_back(c);
    g[c].push_back(p);
    info[c].parent = p;
  };
  auto find_centroid = [&](auto &&find_centroid, int v, int p, const int N, const int8_t rank) -> std::pair<int, int>
  {
    int sz = 1;
    for (int c : G[v])
    {
      if (c == p || info[c].depth < rank)
        continue;
      auto [sz_c, cent_c] = find_centroid(find_centroid, c, v, N, rank);
      if (sz_c == -1)
        return {-1, cent_c};
      info[c].size = sz_c, sz += sz_c;
    }
    //??????????????
    if (sz * 2 >= N)
    {
      info[v].size = N;
      info[v].depth = rank;
      for (int c : G[v])
      {
        if (c == p || info[c].depth < rank)
          continue;
        auto [sz_c, cent_c] = find_centroid(find_centroid, c, -1, info[c].size, rank + 1);
        assert(sz_c == -1);
        add_edge(v, cent_c);
      }
      if (p != -1)
      {
        auto [sz_c, cent_c] = find_centroid(find_centroid, p, -1, N - sz, rank + 1);
        assert(sz_c == -1);
        add_edge(v, cent_c);
      }
      return {-1, v}; // ?????
    }
    return {sz, -1};
  };
  find_centroid(find_centroid, 0, -1, n, 0);
  return {g, info};
}

std::vector<long long> frequency_table_of_tree_distance(const graph &G)
{
  int n = G.size();
  auto [g, info] = centroid_decomposition(G);
  auto make_deplist = [&](auto &&make_deplist, int v, int p, int d, std::vector<long long> &deplist, const std::vector<__info> &i, const int root_depth) -> void
  {
    if (deplist.size() == d)
      deplist.resize(2 * d);
    deplist[d]++;
    for (int c : G[v])
    {
      if (c == p || i[c].depth <= root_depth)
        continue;
      make_deplist(make_deplist, c, v, d + 1, deplist, i, root_depth);
    }
  };
  auto convo = [&](std::vector<long long> &a, std::vector<long long> &b) -> void
  {
    constexpr static int lim = 998244353;
    long long asum = std::accumulate(a.begin(), a.end(), 0);
    long long bsum = (&a == &b ? asum : std::accumulate(b.begin(), b.end(), 0));
    if (asum * bsum >= lim)
      a = internal::convolution_ll(a, b);
    else
      a = internal::_convolution<lim>(a, b);
  };
  std::vector<long long> ans(n, 0);
  for (int i = 0; i < n; i++)
  {
    if (info[i].size == 1)
      continue; // leaf
    std::vector<std::vector<long long>> A{{1}};
    std::vector<long long> B{1};
    for (int c : G[i])
    {
      if (info[c].depth <= info[i].depth)
        continue;
      A.push_back({0});
      make_deplist(make_deplist, c, -1, 1, A.back(), info, info[i].depth);
      for (int k = 0; k < A.back().size(); k++)
      {
        if (B.size() == k)
          B.resize(2 * k);
        B[k] += A.back()[k];
      }
    }
    // ???2???, ???? xy ???????
    // (x + y) ^ 2 - x^2 - y^2 ??????????
    if (A.size() == 3)
    {
      std::vector<long long> &x = A[1], &y = A[2];
      for (int j = 0; j < x.size(); j++)
        ans[j] += x[j] << 1;
      for (int j = 0; j < y.size(); j++)
        ans[j] += y[j] << 1;
      convo(x, y);
      for (int j = 0; j < std::min(n, (int)x.size()); j++)
        ans[j] += x[j] << 1;
    }
    else if (A.size() == 4)
    { // xy + yz + zx ??????
      std::vector<long long> x = A[1], &y = A[2], &z = A[3];
      for (int j = 0; j < x.size(); j++)
        ans[j] += x[j] << 1;
      for (int j = 0; j < y.size(); j++)
        ans[j] += y[j] << 1;
      for (int j = 0; j < z.size(); j++)
        ans[j] += z[j] << 1;
      convo(x, y);    // xy
      convo(y, z);    // yz
      convo(z, A[1]); // zx
      for (int j = 0; j < std::min(n, (int)x.size()); j++)
        ans[j] += x[j] << 1;
      for (int j = 0; j < std::min(n, (int)y.size()); j++)
        ans[j] += y[j] << 1;
      for (int j = 0; j < std::min(n, (int)z.size()); j++)
        ans[j] += z[j] << 1;
    }
    else
    {
      convo(B, B);
      for (std::vector<long long> &a : A)
      {
        convo(a, a);
        for (int k = 0; k < std::min(n, (int)a.size()); k++)
          B[k] -= a[k];
      }
      for (int j = 0; j < std::min(n, (int)B.size()); j++)
        ans[j] += B[j];
    }
  }
  ans[0] = n;
  for (int i = 1; i < n; i++)
    ans[i] = ans[i] / 2;
  return ans;
}

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

// U == std::ostream? but done this way because of fastoutput
template <typename U, typename T>
U &operator<<(U &stream, const Modular<T> &number)
{
  return stream << number();
}

// U == std::istream? but done this way because of fastinput
template <typename U, typename T>
U &operator>>(U &stream, Modular<T> &number)
{
  typename common_type<typename Modular<T>::Type, long long>::type x;
  stream >> x;
  number.value = Modular<T>::normalize(x);
  return stream;
}

/*
using ModType = int;

struct VarMod { static ModType value; };
ModType VarMod::value;
ModType& md = VarMod::value;
using Mint = Modular<VarMod>;
*/

constexpr int md = 998244353;
using Mint = Modular<std::integral_constant<decay<decltype(md)>::type, md>>;

/*vector<Mint> fact(1, 1);
vector<Mint> inv_fact(1, 1);

Mint C(int n, int k) {
  if (k < 0 || k > n) {
    return 0;
  }
  while ((int) fact.size() < n + 1) {
    fact.push_back(fact.back() * (int) fact.size());
    inv_fact.push_back(1 / fact.back());
  }
  return fact[n] * inv_fact[k] * inv_fact[n - k];
}*/

template <typename T>
class NTT
{
public:
  using Type = typename decay<decltype(T::value)>::type;

  static Type md;
  static Modular<T> root;
  static int base;
  static int max_base;
  static vector<Modular<T>> roots;
  static vector<int> rev;

  static void clear()
  {
    root = 0;
    base = 0;
    max_base = 0;
    roots.clear();
    rev.clear();
  }

  static void init()
  {
    md = T::value;
    assert(md >= 3 && md % 2 == 1);
    auto tmp = md - 1;
    max_base = 0;
    while (tmp % 2 == 0)
    {
      tmp /= 2;
      max_base++;
    }
    root = 2;
    while (power(root, (md - 1) >> 1) == 1)
    {
      root++;
    }
    assert(power(root, md - 1) == 1);
    root = power(root, (md - 1) >> max_base);
    base = 1;
    rev = {0, 1};
    roots = {0, 1};
  }

  static void ensure_base(int nbase)
  {
    if (md != T::value)
    {
      clear();
    }
    if (roots.empty())
    {
      init();
    }
    if (nbase <= base)
    {
      return;
    }
    assert(nbase <= max_base);
    rev.resize(1 << nbase);
    for (int i = 0; i < (1 << nbase); i++)
    {
      rev[i] = (rev[i >> 1] >> 1) + ((i & 1) << (nbase - 1));
    }
    roots.resize(1 << nbase);
    while (base < nbase)
    {
      Modular<T> z = power(root, 1 << (max_base - 1 - base));
      for (int i = 1 << (base - 1); i < (1 << base); i++)
      {
        roots[i << 1] = roots[i];
        roots[(i << 1) + 1] = roots[i] * z;
      }
      base++;
    }
  }

  static void fft(vector<Modular<T>> &a)
  {
    int n = (int)a.size();
    assert((n & (n - 1)) == 0);
    int zeros = __builtin_ctz(n);
    ensure_base(zeros);
    int shift = base - zeros;
    for (int i = 0; i < n; i++)
    {
      if (i < (rev[i] >> shift))
      {
        swap(a[i], a[rev[i] >> shift]);
      }
    }
    for (int k = 1; k < n; k <<= 1)
    {
      for (int i = 0; i < n; i += 2 * k)
      {
        for (int j = 0; j < k; j++)
        {
          Modular<T> x = a[i + j];
          Modular<T> y = a[i + j + k] * roots[j + k];
          a[i + j] = x + y;
          a[i + j + k] = x - y;
        }
      }
    }
  }

  static vector<Modular<T>> multiply(vector<Modular<T>> a, vector<Modular<T>> b)
  {
    if (a.empty() || b.empty())
    {
      return {};
    }
    int eq = (a == b);
    int need = (int)a.size() + (int)b.size() - 1;
    int nbase = 0;
    while ((1 << nbase) < need)
      nbase++;
    ensure_base(nbase);
    int sz = 1 << nbase;
    a.resize(sz);
    b.resize(sz);
    fft(a);
    if (eq)
      b = a;
    else
      fft(b);
    Modular<T> inv_sz = 1 / static_cast<Modular<T>>(sz);
    for (int i = 0; i < sz; i++)
    {
      a[i] *= b[i] * inv_sz;
    }
    reverse(a.begin() + 1, a.end());
    fft(a);
    a.resize(need);
    return a;
  }
};

template <typename T>
typename NTT<T>::Type NTT<T>::md;
template <typename T>
Modular<T> NTT<T>::root;
template <typename T>
int NTT<T>::base;
template <typename T>
int NTT<T>::max_base;
template <typename T>
vector<Modular<T>> NTT<T>::roots;
template <typename T>
vector<int> NTT<T>::rev;

template <typename T>
vector<Modular<T>> inverse(const vector<Modular<T>> &a)
{
  assert(!a.empty());
  int n = (int)a.size();
  vector<Modular<T>> b = {1 / a[0]};
  while ((int)b.size() < n)
  {
    vector<Modular<T>> x(a.begin(), a.begin() + min(a.size(), b.size() << 1));
    x.resize(b.size() << 1);
    b.resize(b.size() << 1);
    vector<Modular<T>> c = b;
    NTT<T>::fft(c);
    NTT<T>::fft(x);
    Modular<T> inv = 1 / static_cast<Modular<T>>((int)x.size());
    for (int i = 0; i < (int)x.size(); i++)
    {
      x[i] *= c[i] * inv;
    }
    reverse(x.begin() + 1, x.end());
    NTT<T>::fft(x);
    rotate(x.begin(), x.begin() + (x.size() >> 1), x.end());
    fill(x.begin() + (x.size() >> 1), x.end(), 0);
    NTT<T>::fft(x);
    for (int i = 0; i < (int)x.size(); i++)
    {
      x[i] *= c[i] * inv;
    }
    reverse(x.begin() + 1, x.end());
    NTT<T>::fft(x);
    for (int i = 0; i < ((int)x.size() >> 1); i++)
    {
      b[i + ((int)x.size() >> 1)] = -x[i];
    }
  }
  b.resize(n);
  return b;
}

template <typename T>
vector<Modular<T>> inverse_old(vector<Modular<T>> a)
{
  assert(!a.empty());
  int n = (int)a.size();
  if (n == 1)
  {
    return {1 / a[0]};
  }
  int m = (n + 1) >> 1;
  vector<Modular<T>> b = inverse(vector<Modular<T>>(a.begin(), a.begin() + m));
  int need = n << 1;
  int nbase = 0;
  while ((1 << nbase) < need)
  {
    ++nbase;
  }
  NTT<T>::ensure_base(nbase);
  int size = 1 << nbase;
  a.resize(size);
  b.resize(size);
  NTT<T>::fft(a);
  NTT<T>::fft(b);
  Modular<T> inv = 1 / static_cast<Modular<T>>(size);
  for (int i = 0; i < size; ++i)
  {
    a[i] = (2 - a[i] * b[i]) * b[i] * inv;
  }
  reverse(a.begin() + 1, a.end());
  NTT<T>::fft(a);
  a.resize(n);
  return a;
}

template <typename T>
vector<Modular<T>> operator*(const vector<Modular<T>> &a, const vector<Modular<T>> &b)
{
  if (a.empty() || b.empty())
  {
    return {};
  }
  if (min(a.size(), b.size()) < 150)
  {
    vector<Modular<T>> c(a.size() + b.size() - 1, 0);
    for (int i = 0; i < (int)a.size(); i++)
    {
      for (int j = 0; j < (int)b.size(); j++)
      {
        c[i + j] += a[i] * b[j];
      }
    }
    return c;
  }
  return NTT<T>::multiply(a, b);
}

template <typename T>
vector<Modular<T>> &operator*=(vector<Modular<T>> &a, const vector<Modular<T>> &b)
{
  return a = a * b;
}

template <typename T>
class my_graph
{
public:
  struct edge
  {
    int from;
    int to;
    T cost;
  };

  vector<edge> edges;
  vector<vector<int>> g;
  int n;

  my_graph(int _n) : n(_n)
  {
    g.resize(n);
  }

  virtual int add(int from, int to, T cost) = 0;
};

template <typename T>
class undigraph : public my_graph<T>
{
public:
  using my_graph<T>::edges;
  using my_graph<T>::g;
  using my_graph<T>::n;

  undigraph(int _n) : my_graph<T>(_n)
  {
  }

  int add(int from, int to, T cost = 1)
  {
    assert(0 <= from && from < n && 0 <= to && to < n);
    int id = (int)edges.size();
    g[from].push_back(id);
    g[to].push_back(id);
    edges.push_back({from, to, cost});
    return id;
  }
};

template <typename T>
vector<vector<int>> find_cycles(const my_graph<T> &g, int bound_cnt = 1 << 30, int bound_size = 1 << 30)
{
  vector<int> was(g.n, -1);
  vector<int> st;
  vector<vector<int>> cycles;
  int total_size = 0;
  function<void(int, int)> dfs = [&](int v, int pe)
  {
    if ((int)cycles.size() >= bound_cnt || total_size >= bound_size)
    {
      return;
    }
    was[v] = (int)st.size();
    for (int id : g.g[v])
    {
      if (id == pe)
      {
        continue;
      }
      auto &e = g.edges[id];
      int to = e.from ^ e.to ^ v;
      if (was[to] >= 0)
      {
        vector<int> cycle(1, id);
        for (int j = was[to]; j < (int)st.size(); j++)
        {
          cycle.push_back(st[j]);
        }
        cycles.push_back(cycle);
        total_size += (int)cycle.size();
        if ((int)cycles.size() >= bound_cnt || total_size >= bound_size)
        {
          was[v] = -2;
          return;
        }
        continue;
      }
      if (was[to] == -1)
      {
        st.push_back(id);
        dfs(to, id);
        st.pop_back();
      }
    }
    was[v] = -2;
  };
  for (int i = 0; i < g.n; i++)
  {
    if (was[i] == -1)
    {
      dfs(i, -1);
    }
  }
  return cycles;
}

template <typename T>
vector<int> edges_to_vertices(const my_graph<T> &g, const vector<int> &edge_cycle)
{
  int sz = (int)edge_cycle.size();
  vector<int> vertex_cycle;
  if (sz <= 2)
  {
    vertex_cycle.push_back(g.edges[edge_cycle[0]].from);
    if (sz == 2)
    {
      vertex_cycle.push_back(g.edges[edge_cycle[0]].to);
    }
  }
  else
  {
    for (int i = 0; i < sz; i++)
    {
      int j = (i + 1) % sz;
      auto &e = g.edges[edge_cycle[i]];
      auto &other = g.edges[edge_cycle[j]];
      if (other.from == e.from || other.to == e.from)
      {
        vertex_cycle.push_back(e.to);
      }
      else
      {
        vertex_cycle.push_back(e.from);
      }
    }
  }
  return vertex_cycle;
}

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(0);
  int n, k;
  cin >> n >> k;
  undigraph<int> g(n);
  for (int i = 0; i < n; i++)
  {
    int x, y;
    cin >> x >> y;
    --x;
    --y;
    g.add(x, y);
  }
  auto cycles = find_cycles(g);
  debug(cycles);
  assert(cycles.size() == 1 || (cycles.size() == 2 && cycles[0] == cycles[1] && cycles[0].size() == 1));
  auto cycle_edges = cycles[0];
  auto cycle_vertices = edges_to_vertices(g, cycle_edges);
  vector<vector<int>> tree_edges(n);
  for (int i = 0; i < n; i++)
  {
    if (i != cycle_edges.back())
    {
      auto &e = g.edges[i];
      tree_edges[e.from].push_back(e.to);
      tree_edges[e.to].push_back(e.from);
    }
  }
  auto freq = frequency_table_of_tree_distance(tree_edges);
  vector<int> in_cycle(n, -1);
  int sz = (int)cycle_vertices.size();
  for (int i = 0; i < sz; i++)
  {
    in_cycle[cycle_vertices[i]] = i;
  }
  auto Add = [&](vector<Mint> &p, int i, Mint val)
  {
    if ((int)p.size() <= i)
    {
      p.resize(i + 1);
    }
    p[i] += val;
  };
  vector<vector<Mint>> poly(sz);
  function<void(int, int, int, int)> Dfs = [&](int v, int pv, int who, int d)
  {
    Add(poly[who], d, 1);
    for (int u : tree_edges[v])
    {
      if (u != pv && in_cycle[u] == -1)
      {
        Dfs(u, v, who, d + 1);
      }
    }
  };
  for (int v : cycle_vertices)
  {
    Dfs(v, -1, in_cycle[v], 0);
  }
  function<void(int, int, int, int)> Solve = [&](int i1, int j1, int i2, int j2)
  {
    int len = j1 - i1;
    if (len <= 1)
    {
      return;
    }
    int half = len / 2;
    Solve(i1, i1 + half, i2, i2 + half);
    Solve(i1 + half, j1, i2 + half, j2);
    {
      vector<Mint> p1;
      for (int i = i1; i < i1 + half; i++)
      {
        for (int j = 0; j < (int)poly[i].size(); j++)
        {
          Add(p1, j + ((i1 + half - 1) - i), poly[i][j]);
        }
      }
      vector<Mint> p2;
      for (int i = i2 + half; i < j2; i++)
      {
        for (int j = 0; j < (int)poly[i].size(); j++)
        {
          Add(p2, j + (i - (i2 + half)), poly[i][j]);
        }
      }
      auto prod = p1 * p2;
      for (int i = 0; i < (int)prod.size(); i++)
      {
        freq[i + ((i2 + half) - (i1 + half - 1))] -= prod[i]();
      }
    }
    {
      vector<Mint> p1;
      for (int i = i1; i < i1 + half; i++)
      {
        for (int j = 0; j < (int)poly[i].size(); j++)
        {
          Add(p1, j + (i - i1), poly[i][j]);
        }
      }
      vector<Mint> p2;
      for (int i = i2 + half; i < j2; i++)
      {
        for (int j = 0; j < (int)poly[i].size(); j++)
        {
          Add(p2, j + ((j2 - 1) - i), poly[i][j]);
        }
      }
      auto prod = p1 * p2;
      for (int i = 0; i < (int)prod.size(); i++)
      {
        freq[i + i1 + ((sz - 1) - (j2 - 1)) + 1] += prod[i]();
      }
    }
  };
  Solve(0, (sz + 1) / 2, sz - (sz + 1) / 2, sz);
  Mint ans = 0;
  for (int i = 1; i < (int)freq.size(); i++)
  {
    ans += freq[i] * power(Mint(i), k);
  }
  cout << ans << '\n';
  return 0;
}