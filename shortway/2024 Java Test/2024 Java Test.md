## 2024 Java test

### Write a program to concatenate two strings using lambda expressions. The lambda expression takes two strings as argument and returns the concatenated string.

Input format
The input consists of two strings.

Output format
The output prints the concatenated string.

Sample test cases

**Input 1**
Hello

World

**Output 1**
Hello World
```java
import java.util.function.*;
import java.util.Scanner;

class Main{

//sauravhathi
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String saurav1 = sc.nextLine();
        String saurav2 = sc.nextLine();
        Consumer<String> c = (x) -> System.out.println(x);
        c.accept(saurav1+" "+saurav2);
    }
}
```

### Valid Initial Configuration
Valid Initial Configuration: Nurikabe logical game (sometimes called Islands in the Stream) is a binary determination puzzle. The puzzle is played on a typically rectangular grid of cells, some of which contain numbers. You must decide for each cell if it is white or black (by clicking on them) according to the following rules:


All of the black cells must be connected.
Each numbered cell must be part of a white island of connected white cells.
Each island must have the same number of white cells as the number it contains (including the numbered cell).
Two islands may not be connected.
There cannot be any 2×2 blocks of black cells.
Unnumbered cells start out grey and cycle through white and black when clicked. Initially numbered cells are white in color.


**Problem Statement:**
Write a program to check whether the given board configuration is a valid initial configuration. Below figure is the sample valid initial configuration.


Input Format:
First line of the input is an integer N that gives the number of rows and columns of the grid.
Next N lines will have the board configuration with **N*N** cells. Assume that the maximum number in a cell can be 10. Grey colored cells are represented by the integer 20 in the matrix representation of the input configuration.

Output Format:
Output **“Yes”** (without quotes) if the given configuration is a valid initial configuration. Print **“No”** otherwise (without quotes).
Refer sample input and output for formatting specifications.

Sample Input 1:


    5
    20 20 1 20 3
    20 20 20 20 20
    20 20 20 20 20
    20 20 20 20 20
    6 20 3 20 20

Sample Output 1:


    Yes

Sample Input 2:


    5
    20 20 1 20 3
    20 20 20 20 20
    20 20 12 20 20
    20 20 20 20 20
    6 20 3 20 20

Sample Output 2:


    No

```java
import java.util.Scanner;
 class Main
{
            //sauravhathi
    public static void main(String[] args)
    {
                //sauravhathi
        int n,i,j;
        int[][] a=new int[50][50];
        Scanner sc=new Scanner(System.in);
        n=sc.nextInt();
        for(i=0;i<n;i++)
        {
                    //sauravhathi
            for(j=0;j<n;j++)
            {
                a[i][j]=sc.nextInt();
            }
        }
        //sauravhathi
        for(i=0;i<n;i++)
        {
            for(j=0;j<n;j++)
            {
                if(a[i][j]>10 && a[i][j]!=20)
                {
                    System.out.println("No");
                    return;
                }
            }
        }        //sauravhathi
        System.out.println("Yes");
    }
            //sauravhathi
}
```
```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, i, j;
    int a[50][50];
    cin >> n;
    //sauravhathi
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            cin >> a[i][j];
        }
    }
    for (i = 0; i < n; i++)
    {
        // sauravhathi
        for (j = 0; j < n; j++)
        {
            if (a[i][j] > 10 && a[i][j] != 20)
            {
                cout << "No";
                return 0;
            }
        }
        //sauravhathi
    }
    cout << "Yes";
    return 0;
}
```
```python
n = int(input())
for i in range(n):
    for j in range(n):
        a[i][j] = int(input())
for i in range(n):
    for j in range(n):
    #sauravhathi
        if a[i][j] > 10 and a[i][j] != 20:
            print("No")
            return
print("Yes")
```
###  Using Java Library ArrayList as a List implementation, create a normal 52-card deck
Using Java Library ArrayList as a List implementation, create a normal 52-card deck with“Spades”, “Hearts“Diamonds’, ‘Clubs” as suit names and “Ace”, “2”, “3”,“4”5″, “6”, “7”, “8”, “9”, “10”, “Jack, “Queen”, “King” as rank names.Write a program that takes as input: (1) the number of hands to deal and (2) the number of cards in each hand and generates required hands with pseudo-random output, using Java Library Random with seed as 0, to shuffle the cards.


**Input format :**



    Enter number of hands on first line
    Enter number of cards per hand on next line
**Output format :**


    One hand is printed on each line


