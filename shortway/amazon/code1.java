As an intern at Amazon, you have been assigned a task to implement the sign-in pages in the Amazon Dummy Website.

There are three sign-in pages, each with its own API:
Example
The website receives the following API requests in order:

register user05 qwerty
A new user with the username "user05" is registered to the website with the password "qwerty".
The return value isRegistered Successfully
login user05 qwerty
There is a user with that username.
The password matches that user's password.
The user is not already logged in.
The login is successful and the return value is Logged In Successfully
logout user05
The user with username "user05" is currently logged in.
The logout is successful and the return value is Logged Out Successfully
Return the array ["Registered Successfully", "Logged In Successfully", "Logged Out Successfully"].
Function Description

Complete the function implementAPI in the editor below.

implementAPI has the following parameter:

    string logs[n]: each of the API requests
Returns
    string[n]: an array of strings where ith string is the return value of the ith API request

Constraints

1 ≤ n ≤ 105
1 ≤ | username |, | password | ≤ 10 (where |s| is the length of string s)
username and password are alphanumeric strings, ranges [0-9, a-z, A-Z]
Input Format For Custom TestingSample Case 0

Sample Input For Custom Testing

STDIN                     FUNCTION
-----                     --------
5                       → logs[] size, n = 5
register david david123 → logs[] description
register adam 1Adam1
login david david123
login adam 1adam1
logout david
Sample Output

Registered Successfully
Registered Successfully
Logged In Successfully
Login Unsuccessful
Logged Out Successfully
Explanation

register david david123: There is no user with the username "david" registered, so the registration is successful.
register adam 1Adam1: There is no user with the username "adam" registered, so the registration is successful.
login david david123: The username and the password for the user match with that in the database, so the login is successful.
login adam 1adam1: The password ("1adam1") does not match the actual password ("1Adam1"), so the login is unsuccessful.
logout david: The user "david" is logged in currently, so the logout is successful.
Sample Case 1

Sample Input For Custom Testing

STDIN                      FUNCTION
-----                      --------
4                       →  logs[] size, n = 4
login harry 12345678    →  logs[] description
register harry 12345678
logout harry
register harry harrycool
﻿
Sample Output

Login Unsuccessful
Registered Successfully
Logout Unsuccessful
Username already exists
﻿
Explanation

login harry 12345678: There is no username "harry" registered so the login is unsuccessful.
register harry 12345678: There is no username "harry" registered so the registration is successful.
logout harry: There is no username "harry" logged in so the logout is unsuccessful.
register harry harrycool: There is already a username "harry" so the registration is unsuccessful.