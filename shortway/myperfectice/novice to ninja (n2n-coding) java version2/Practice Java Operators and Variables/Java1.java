// Java operators

// We can use Java to perform mathematical calculations like 5 + 6, 6 / 2 etc.

// The basic symbols used to perform mathematical operations are called operators. Operators tell Java what to do with the numbers surrounding them. The Plus sign(+) adds numbers, the minus sign (-) subtracts numbers, the asterisk (*) multiplies numbers and the slash (/) divides numbers. 

// Example:

// The output of the code System.out.print(300 + 100) will be 400.  

// Question: Write a program in Java to print the result of the following mathematical operations. Each result should be printed in a separate line.

// 1. Sum of 200 and 300

// 2. Divide 250 by 50

// 3. Difference of 500 and 100

// 4. Product of 'a' and 50, where 'a' is a keyboard input


import java.util.*;

class TestClass {
    public static void main(String args[] ) throws Exception {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        System.out.println(200 + 300);
        System.out.println(250 / 50);
        System.out.println(500 - 100);
        System.out.println(a * 50);
    }
}