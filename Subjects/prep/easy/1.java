// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

import java.util.*;

class Solution {
    public boolean isHappy(int n) {
        Set<Integer> set = new HashSet<>();
        while (n != 1) {
            int sum = 0;
            while (n > 0) {
                int digit = n % 10;
                sum += digit * digit;
                n /= 10;
            }
            if (set.contains(sum)) {
                return false;
            }
            set.add(sum);
            n = sum;
        }
        return true;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.isHappy(19));
    }
}

// Approach 1: HashSet, Time Complexity: O(logn), Space Complexity: O(logn)

// Step 1: Create a HashSet to store the sum of the squares of its digits.
// Step 2: Loop until n is 1 or the sum is already in the HashSet.
// Step 3: Calculate the sum of the squares of its digits.
// Step 4: If the sum is already in the HashSet, return false.
// Step 5: Add the sum to the HashSet.
// Step 6: Set n to the sum.
// Step 7: Return true.

// Complexity Analysis

// Time complexity : O(logn). We need to calculate the sum of the squares of its digits until the sum is 1 or the sum is already in the HashSet. The number of digits in the sum is at most logn.

// Space complexity : O(logn). The HashSet stores at most logn elements.

class Solution {
    public boolean isHappy(int n) {
        int slow = n;
        int fast = n;
        do {
            slow = sumOfSquares(slow);
            fast = sumOfSquares(sumOfSquares(fast));
        } while (fast != 1 && fast != slow);
        return fast == 1;
    }

    private int sumOfSquares(int n) {
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        return sum;
    }

    public static void main(String[] args) {
        Solution s = new Solution();
        System.out.println(s.isHappy(19));
    }
}

// Approach 2: Floyd Cycle Detection Algorithm, Time Complexity: O(logn), Space Complexity: O(1)

// Step 1: Create two pointers, slow and fast.
// Step 2: Loop until fast is 1 or fast is equal to slow.
// Step 3: Calculate the sum of the squares of its digits for slow.
// Step 4: Calculate the sum of the squares of its digits for fast twice.
// Step 5: If fast is 1, return true.
// Step 6: If fast is equal to slow, return false.

// Complexity Analysis

// Time complexity : O(logn). We need to calculate the sum of the squares of its digits until the sum is 1 or the sum is already in the HashSet. The number of digits in the sum is at most logn.

// Space complexity : O(1). We only use two integers to store the sum of the squares of its digits.