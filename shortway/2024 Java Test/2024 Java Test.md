## 2024 Java test

```
1. Which of the following will import only static members of java.util.Arrays class?

Ans: import static java.util.Arrays;

2. Which of the following is not a property of a JVM?

Ans: It prevents Java bytecode from being easily decoded/decompiled.

3. Object which can store group of other objects is called

Ans: Collection object

4. Non-static nested classes have access to from enclosing class.

Ans: All the members

5. What will be the output for the following code snippet?

<>
ArrayList a1 = new ArrayList();
a1.add("Ravi");
a1.add("Vijay");

Iterator it = a1.iterator();
System.out.println(it.next());
Ans: Ravi

6. Choose the correct option to fill the below code

Answer: sc.nextInt(); sc.next(); sc.nextDouble();

7. Which of the statement is incorrect?

Ans: Every class must contain a main() method.

8. What is the output the following code?

Ans: 1

9. If there are 5 classes, E is derived from D, D from C, C from B and B from A. which class construct will be called first if the object of E or D is created?

Ans: A

10. What will be the output of the following code?

Ans:  a.y = 5
      b.y = 6
      a.x = 2
      b.x = 2
IdentifyMyParts.x = 2
11. We want this code to print the titles of each book twice. Why doesn't it?

Ans: None of the above. The code does print each book title twice.

12. What will be the output for the following code snippet?

<>
HashMap map = new HashMap();
map.put(1, "E-Box");
map.put(2, "Learning and Assessment");
map.put(3, "Platform");
map.remove(0);
System.out.println("Values after remove: "+map);
Ans: Values after remove: {1=E-Box, 2-Learning and Assessment, 3=Platform}

13. How to convert Date object to String?

Ans: SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd"); Sdf.format(new Date());

14. If an exception occurs within the block, the appropriate exception-handler that is associated with the try block handles the exception.

Ans: try

15. Choose the correct option based on this program?

Answer: When executed, this program prints the following: "The removed element is: 1"

16. Choose the option that contains only primitive literals.

Ans: 1.2D, 1f, 'c'

17. What is the output of this program?

Ans: The program runs fine and displays x[0] is 0.

18. What is one of the most important reasons that Java supports extending classes via inheritance?

Ans: Developers minimize duplicate code in new classes by sharing code in a common parent class.

19. Predict the output.

Ans: [Char, acte, r de, cide, s th, e re, spec, t]

20. Consider the following code snippet. If you deserialize the object and print the field term (term is declared as int and is not a transient), what will it print?

Ans: 57

Block has been deleted or is unavailable.

```

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

#### Java
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

#### Java
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

#### C++
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
#### Python
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


