A recently launched supplemental typing keypad gained significant popularity on Amazon Shopping due to its flexibility.

This keypad can be connected to any electronic device and has 9 buttons, where each button can have up to 3 lowercase English letters. The buyer has the freedom to choose which letters to place on a button while ensuring that the arrangement is valid. A keypad design is said to be valid if:

All 26 letters of the English alphabet exist on the keypad.

Each letter is mapped to exactly one button.

```c++
int minimumKeypadClickCount(string input)
{
       char right[9][3] = {
           {'a', 'j', 's'},
           {'b', 'o', 't'},
           {'c', 'p', 'u'},
           {'d', 'k', 'v'},
           {'h', 'm', 'z'},
           {'g', 'l', '@'},
           {'e', 'n', 'w'},
           {'f', 'q', 'x'},
           {'i', 'r', 'y'}};
         int n, count1 = 0, count2 = 0;
            n = input.length();
            for (int i = 0; i < n; i++)
            {
                int d = input[i] - 97;
                d = d % 3;
                count1 += (d + 1);
            }
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < 9; j++)
                {
                    for (int k = 0; k < 3; k++)
                    {
                        if (right[j][k] == input[i])
                        {
                            count2 += (k + 1);
                        }
                    }
                }

//sauravhathi
            }
            return count2;
            
}
```
