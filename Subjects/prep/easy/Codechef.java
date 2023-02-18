
// You have N wooden sticks, which are labeled from 1 to N. The i-th stick has a length of Li. Your friend has challenged you to a simple game: you will pick three sticks at random, and if your friend can form a triangle with them (degenerate triangles included), he wins; otherwise, you win. You are not sure if your friend is trying to trick you, so you would like to determine your chances of winning by computing the number of ways you could choose three sticks (regardless of order) such that it is impossible to form a triangle with them.

// Input
// The input file consists of multiple test cases.

// Each test case starts with the single integer N followed by a line with the integers L1, ..., LN.
// The input is terminated with N = 0, which should not be processed.
 

// Output
// For each test case, output a single line containing the number of triplets.
 

// Constraints
// 3 ≤ N ≤ 2000
// 1 ≤ Li ≤ 1000000
 

// Example
// Input:
// 3
// 4 2 10
// 3
// 1 2 3
// 4
// 5 2 9 6
// 0
// Output:
// 1
// 0
// 2

// pyhton
while True:
	n = int(input())
	if n == 0:
		break
	arr = list(map(int, input().split()))
	arr.sort()
	count = 0
	for i in range(2, n):
		l = i - 1
		f = 0
		while f < l:
			if (arr[f] + arr[l]) < arr[i]:
				count += l - f
				f += 1
			else:
				l -= 1
	print(count)

/* package codechef; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		Scanner sc=new Scanner(System.in);
		while(true)
		{
			int n=sc.nextInt();
			if(n==0)
			break;
			int arr[]=new int[n];
			for(int i=0;i<n;i++)
			arr[i]=sc.nextInt();
			Arrays.sort(arr);
			int count=0;
			// https://github.com/sauravhathi
			for(int i=2;i<n;i++)
			{
				int l=i-1;
				int f=0;
				while(f<l)
				{
					if((arr[f]+arr[l])<arr[i])
					{
						count+=l-f;
						f++;
					}
					else
					l--;
				}
			}
			System.out.println(count);
		}
	}
}


#include <iostream>
#include <algorithm>
using namespace std;

int main() {
	// your code goes here
	int n;
	while(true)
	{
	    cin>>n;
	    if(n==0)
	    break;
	    int arr[n];
	    for(int i=0;i<n;i++)
	    cin>>arr[i];
	    sort(arr,arr+n);
	    int count=0;
	    // https://github.com/sauravhathi
	    for(int i=2;i<n;i++)
	    {
	        int l=i-1;
	        int f=0;
	        while(f<l)
	        {
	            if((arr[f]+arr[l])<arr[i])
	            {
	                count+=l-f;
	                f++;
	            }
	            else
	            l--;
	        }
	    }
	    cout<<count<<endl;
	}
	return 0;
}