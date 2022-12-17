// Evaluating Expressions

// Expressions are made up of values (the numbers) connected by operators (the math signs) that produce a new value the code can use.

// 10 + 30 is an example of expression. Values 10 and 30 are connected by an operator ‘ + ‘.

// When a computer solves the expression 10 + 30 and returns the value 40, it has evaluated the expression. Evaluating an expression reduces the expression to a single value just like solving a math problem reduces the problem to a single number: the answer.

// When Java evaluates an expression it has an order of precedence in which these are going to be calculated just like you do when you do math. 

// There are just a few rules:

// 1. Multiplication and division always go before addition and subtraction.

// 2. We use parentheses to control the order of operations.

// 3. Parts of the expression inside parentheses are evaluated first.

// 4. Parentheses can be nested, which means that there can be parentheses inside parentheses.

// 5. Java evaluates the innermost parentheses first and then the outer ones.

// Example:

// The expression 7 + 6 * 2 + 4 evaluates to 23, not 30, because 6 * 2 is evaluated first. If the expression were (7 + 6) * (2 + 4) it would evaluate to 78, because the (7 + 6) and (2 + 4) inside parentheses are evaluated before multiplication.

// Question: Write a program to print the result of the following statement

// Add a (where a is a keyboard input) and 8, then multiply the result by 2, then subtract 11 from the result and divide it by 5.

import java.util.*;

class TestClass {
    public static void main(String args[] ) throws Exception {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        System.out.println(((a + 8) * 2 - 11) / 5);
    }
}