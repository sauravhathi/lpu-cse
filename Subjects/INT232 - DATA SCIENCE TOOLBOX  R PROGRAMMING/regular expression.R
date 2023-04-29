install.packages("stringr")
library(stringr)
#A regular expression (aka regex) is a sequence of characters that #define a search pattern, mainly for use in pattern matching with #text strings. Typically, regex patterns consist of a combination #of alphanumeric characters as well as special characters.

#The following provides examples to show how to use the escape #syntax to find and replace metacharacters. 

# substitute $ with !
sub(pattern = "\\$", "\\!", "I love R$")

#substitute ^ with carrot
sub(pattern = "\\^", "carrot", "My daughter has a ^ with almost every meal!")
# substitute \\ with whitespace

#To replace the first matching occurrence of a pattern use sub():

#To replace all matching occurrences of a pattern use gsub():
gsub(pattern = "\\\\", " ", "I\\need\\space")
new <- c("New York", "new new York", "New New New York")
new
# Default is case sensitive
sub("New", replacement = "Old", new)
sub("New", replacement = "Old", new, ignore.case = TRUE)
gsub("New", replacement = "Old", new)
gsub("New", replacement = "Old", new, ignore.case = TRUE)
x <- "I like this! #this, @wheres_my, I like R (v3.2.2) #rrrrrrr2015"

# remove space or tabs
gsub(pattern = "[[:blank:]]", replacement = "", x)


# replace punctuation with whitespace
gsub(pattern = "[[:punct:]]", replacement = " ", x)


# remove alphanumeric characters
gsub(pattern = "[[:alnum:]]", replacement = "", x)

#To find exactly where the pattern exists in a string use regexpr():
x <- c("v.111", "0v.11", "00v.1", "000v.", "00000")

regexpr("v.", x)