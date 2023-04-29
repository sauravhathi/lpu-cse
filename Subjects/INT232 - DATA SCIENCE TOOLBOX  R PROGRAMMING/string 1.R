a="hello"
b="how"
c="are"
d="you"
#print(paste(a,b,c,d)
print(paste(a,b,c,d))
print(paste(a,b,c,d,sep="&*"))
print(paste("Factorial ","a","=","120",sep="",collapse = " " ))#remove the space in adjacent lines

#1. grep()
#It is used for pattern matching and replacement. 
#grep, grepl, regexpr, gregexpr and regexec search 
#for matches with argument pattern within each element of a character vector.
#Here we subsitute the first and other matches with sub and gsub.  
#sub and gsub perform replacement of the first and all matches.

#grep("b+", c("ab+", "bda2", "+ccaa", "ad"), perl=TRUE, value#=FALSE)


#2. nchar()
 str <- "Big Data"
 nchar(str)

 #3.sprintf()
 #This function makes of the formatting commands that are styled after C. 
 sprintf("%s scored %.2f percent","Matthew", 72.39999)

  #4.substr(): is the substrings of a character vector. The extractor replaces substrings in a character vector.
 
 num <- "aashima"
substr(num, 4, 5)
 substr(num, 5, 7)
 
 #5. strsplit()
 
 str = "Splitting sentence into words"
strsplit(str, " ")


st1<- "shuBHAm"
print(tolower(st1))
st1<- "shuBHAm"
print(toupper(st1))
str <- paste(c(1:3), "4", sep = ":")
print (str)

#agrep() function in R Language is used to search for #approximate matches to pattern within each element #of the given string.
# R program to illustrate
# agrep function

# Creating string vector
x <- c("GFG", "gfg", "AASHI", "aashi")

# Calling agrep() function
agrep("gfg", x)
agrep("Aashi", x)
agrep("gfg", x, ignore.case = TRUE)
agrep("Aashi", x, ignore.case = TRUE)
# R program to illustrate
# agrep function

# Creating string vector
x <- c("GFG", "gfg", "AASHI", "aashi")

# Calling agrep() function
agrep("gfg", x, ignore.case = TRUE, value = TRUE)
agrep("G", x, ignore.case = TRUE, value = TRUE)
agrep("aashi", x, ignore.case = FALSE, value = FALSE)
agrep("AASHI", x, ignore.case = FALSE, value = FALSE)	
#Definitions of grep & grepl:

#The grep R function searches for matches of certain character #pattern in a vector of character strings and returns the #indices that yielded a match.

#The grepl R function searches for matches of certain character #pattern in a vector of character strings and returns a logical #vector indicating which elements of the vector contained a #match.
x <- c("d", "a", "c", "abba")
grep("a", x)
grepl("a", x)  
grep("a|c", x)
grepl("a|c", x)
library(tidyr)
library(tidyverse)
string1 <- "This is a string"
str_length(c("a", "R for data science", NA))
#To combine two or more strings, use str_c():
str_c("x", "y")
#Use the sep argument to control how they're separated:
str_c("x", "y", sep = ", ")


name <- "Hadley"
time_of_day <- "morning"
birthday <- FALSE

str_c(
  "Good ", time_of_day, " ", name,
  if (birthday) " and HAPPY BIRTHDAY",
  "."
)
#> [1] "Good morning Hadley."