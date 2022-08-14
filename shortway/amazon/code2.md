
There were a large number of orders placed on Amazon Prime Day. The orders are packed and are at the warehouse ready to be delivered. The delivery agent needs to deliver them in as few trips as possible.

In a single trip, the delivery agent can choose packages following either of two rules:

Choose two packages with the same weight

Choose three packages with the same weight

Determine the minimum number of trips required to deliver the packages. If it is not possible to deliver all of them, return -1.

Example
```
weights = [2, 4, 6, 6, 4, 2, 4]
The agent needs a minimum of 3 trips as shown below. Return 3 as the answer.
```
![image](https://user-images.githubusercontent.com/61316762/184492725-e95274a8-8f1d-4272-8cc0-3316d8340b36.png)

Function Description
```
Complete the function getMinimumTrips in the editor below.

getMinimumTrips has the following parameter:

    int weights[n]:  the weights of each package

Returns
    int: the minimum number of trips required or -1 if it is not possible to deliver them all

Constraints

1 ≤ n ≤ 105
1 ≤ weights[i] ≤ 109
Input Format For Custom Testing

The first line contains an integer n, the number of elements in weights[].
Each line i of the n subsequent lines (where 0 ≤ i < n) contains an integer, weights[i].Sample Case 0

Sample Input For Custom Testing

STDIN    FUNCTION
-----    --------
7    →   weights[] size, n = 7
1    →   weights = [1, 8, 5, 8, 5, 1, 1] 
8
5
8
5
1
1
Sample Output

3
Explanation
```
![image](https://user-images.githubusercontent.com/61316762/184492744-5cc5fc39-a635-47ea-938a-51d2b7278760.png)
```
It takes 3 trips to deliver all the packages.Sample Case 1

Sample Input For Custom Testing

STDIN    FUNCTION
-----    --------
5    →   weights[] size, n = 5 
3    →   weights = [3, 4, 4, 3, 1] 
4
4
3
1
Sample Output

-1
Explanation
```
Packages with weights 3 and 4 can be removed in groups of two. The package of weight 1 cannot be delivered as it cannot be chosen according to the rules. Since it is not possible to deliver all packages, the answer is -1.

```java
public static int getMinimumTrips(List<Integer> weights)
    {
        int size = weights.size();
        int minTrips = 0;
        Map<Integer, Integer> freq = new HashMap<>();
        for (int i : weights)
        {
            //sauravhathi
            freq.put(i, freq.getOrDefault(i, 0) + 1);
        }
        for (Map.Entry<Integer, Integer> elem : freq.entrySet())
        {
            int i = elem.getValue();
            if (i == 1)
                return -1;
            if (i % 3 == 0)
            {
                minTrips += i / 3;
            }
            else if (i % 3 == 2)
            {
                minTrips += (i - 2) / 3 + 1;
            }
            //saurvahthi
            else
            {
                minTrips += (i - 1) / 3 + 1;
            }
        }
        return minTrips;
    }
```
