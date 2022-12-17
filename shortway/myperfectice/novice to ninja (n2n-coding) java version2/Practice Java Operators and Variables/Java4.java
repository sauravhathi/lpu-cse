// Naming a variable 

// In Java all variables and function names are case sensitive. This means that capitalization matters.

// MYVAR is not the same as MyVar. It is possible to have multiple distinct variables with the same name but different casing. 

// Things to remember: 

// 1. Variable names can be made up of letters, numbers, and the underscore character ( _ )

// 2. They can’t start with a number. You can use anything from single letters (such as a) to long sentences for variable names.

// 3. A variable can’t contain a space, so use an underscore to separate words.

// 4. It is not allowed to use keywords as variable name. Keywords are some reserved words for Java like int, for, if etc.

// Examples:

// int someVariable = 10

// int Total_price = 100

// Question: A car’s MPG can be calculated using the following formula:

//                        MPG = miles driven / gallons of gas used

// For an input value G for gallons of gas used and miles driven = 100, write a program to calculate and display the car’s MPG.


import java.util.*;

class TestClass {
    public static void main(String args[] ) throws Exception {
        Scanner sc = new Scanner(System.in);
        int G = sc.nextInt();
        System.out.println(100 / G);
    }
}   