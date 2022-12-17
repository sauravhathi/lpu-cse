// Variables

// The word variable in programming describes a place to store information such as numbers, text, lists of numbers & text and so on.

// When an expression evaluates to a value, you can use that value later by storing it in a variable.

// To assign a value to a variable, mention the type of value followed by a name for the variable, followed by the equal sign (=) which is called the assignment operator and then the value to store in the variable. 

// For example,  int price = 500

// Question: Write a program to assign the value a (where a is a keyboard input) to the variable first, then assign the contents of first to variable second. Print the variable second.

import java.util.*;

class TestClass {
    public static void main(String args[] ) throws Exception {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int first = a;
        int second = first;
        System.out.println(second);
    }
}