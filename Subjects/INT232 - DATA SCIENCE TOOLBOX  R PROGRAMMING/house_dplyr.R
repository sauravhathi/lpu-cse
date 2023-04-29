#         ************Data Manipulation************
#
#modifying data to make it easier to read and to be more organized. 
#We manipulate data for analysis and visualization.
#data collection process done by machines involves a lot of errors and inaccuracies in reading. 
#Data manipulation is also used to remove these inaccuracies and make data more accurate and precise.




#To load datasets package
library("datasets")
#To load iris dataset
data(iris)
summary(iris)




#     *************Sample()******************

#to generate a sample of a specific size from a vector or a dataset, either with or without replacement.
#The basic syntax of sample() function is as follows:

#sample(data, size, replace = FALSE, prob = NULL)

#data can be a vector or a dataframe
#size represents the size of the sample
#replace is used to set the values again repeated if it is set to true
#prob: a vector of probability weights for obtaining the elements of the vector being sampled




data=c(23,45,21,34,5,6,7,8,86,45,3)

# get 4 random elements
print(sample(data,4))

# get 1 random element
print(sample(data,1))




#To return 5 random rows from iris dataset
index<-sample(1:nrow(iris), 5)
index
iris[index,]


#   *********************Table()***************************

#used to create a frequency table to calculate the occurrences of unique values of a variable.
#The table() function generates an object of the table class.
#For example:

#To find the frequency distribution of Species in iris table
data(iris)
freq.table <- table(iris$Species)
head(freq.table)


# *************dplyr Package for data manipulation********************


#There are different ways to perform data manipulation in R, such as using Base R functions 
#like subset(), with(), within(), etc., Packages like data.table, ggplot2, reshape2, readr, etc.,
#and different Machine Learning algorithms.


#**********************R with() function*************



#with() function enables us to evaluate an R expression within the function to be passed 
#as an argument. It works on data frames only. That is why the outcome of the evaluation 
#of the R expression is done with respect to the data frame passed to it as an argument.

#Syntax:

#with(data-frame, R expression)


Num <- c(100,100,100,100,100)
Cost <- c(1200,1300,1400,1500,1600)

data_A <- data.frame(Num,Cost,stringsAsFactors = FALSE)
data_A

with(data_A, Num*Cost)
with(data_A, Cost/Num)

#with() function does not alter the original data frame at any cost. 
#It gives the output separately for every value associated with the columns of the data frame.




# **************************** R within() function ****************



#within() function calculates the outcome of the expression within itself but with a 
#slight difference. It allows us to create a copy of the data frame and add a column that
#would eventually store the result of the R expression.

#Syntax:

#within(data frame, new-column <- R expression)


Num <- c(100,100,100,100,100)
Cost <- c(1200,1300,1400,1500,1600)

data_A <- data.frame(Num,Cost,stringsAsFactors = FALSE)

within(data_A, Product <- Num*Cost)
within(data_A, Q <- Cost/Num)






#   ---------------dplyr package to perform data manipulation in R---------------


#is a structure of data manipulation that provides a uniform #set of verbs, helping to resolve the most frequent data #manipulation hurdles.

install.packages(dplyr)
library(dplyr)

data=read.csv(file.choose())
View(data)
#transmute() creates a new data frame containing only the specified computations.
arrange(data, land_value)
# Finding rows with NA value
data %>% filter(is.na(age))

# Finding rows with no NA value
data %>% filter(! is.na(age))

# Arranging name according to the age
data.name<- arrange(data, age)
View(data.name)
# startswith() function to print only ht data
View(select(data, starts_with("rooms")))

# -startswith() function to print
# everything except ht data
View(select(data, -starts_with("rooms")))

# Printing column 1 to 2
View(select(data, 1: 2))

# Printing data of column
# heading containing 'a'
View(select(data, contains("a")))

# Printing data of column
# heading which matches 'ro'
select(data, matches("ro"))
# Calculating a variable x3 which is sum of height
# and age printing with price and room
#mutate() creates new columns that are functions of existing variables
View(mutate(data, x3 = price + rooms))

# Calculating a variable x3 which is sum of price
# and room printing only x3
#transmute() creates a new data frame containing only the specified computations.
View(transmute(data, x3 = price + rooms))


# Calculating mean of age
summarise(data, mean = mean(price))

# Calculating min of age
summarise(data, med = min(price))

# Calculating max of age
summarise(data, med = max(price))

# Calculating median of age
summarise(data, med = median(price))


# Printing three rows
sample_n(data, 3)

# Printing 50 % of the rows
sample_frac(data, 0.01)

