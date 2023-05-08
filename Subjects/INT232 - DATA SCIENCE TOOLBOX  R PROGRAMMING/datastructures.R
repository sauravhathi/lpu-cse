#data structures in R
#VECTORS-store ordered set of values, values should be of specific(same) type only

#Vector Creation

# Atomic vector of type character.
print("abc")

# Atomic vector of type numeric.
print(12.5)

# Atomic vector of type integer.
print(63L)

# Atomic vector of type logical.
print(TRUE)

# Atomic vector of type complex.
print(2+3i)

# Atomic vector of type raw.
print(charToRaw('hello'))


#Multiple Elements Vector
#Using colon operator with numeric data

# Creating a sequence from 5 to 13.
v <- 5:13
print(v)

# Creating a sequence from 6.6 to 12.6.
v <- 6.6:12.6
print(v)

# If the final element specified does not belong to the sequence then it is discarded.
v <- 3.8:11.4
print(v)

#Using sequence (Seq.) operator
# Create vector with elements from 5 to 9 incrementing by 0.4.
print(seq(5, 9, by = 0.4))

#Create vector mentioning maximum length of the vector
vec2 <- seq(1, 10, length.out = 7)

# Printing vectors
print(vec2)


#Using C function
subject_name <- c("John","Jane","Smith","Jia")
temperature <- c (98.1,98.6,101.4,97.2)
flu_status <- c(FALSE,FALSE,TRUE,FALSE)

#all values in a vector
subject_name
temperature
flu_status


#Accessing Vector Elements

#specific values
subject_name[2]

#accessing more than one element
subject_name[c(2,3)]

#2nd index value will be excluded from the result
temperature[c(-2,-4)]

#range including both
temperature[1:2]

#TO PRINT first two values:
temperature[c(TRUE,TRUE,FALSE,FALSE)]

temperature[c(0,0,0,1)]

#The non-character values are coerced to character type if one of the elements is a character.
# The logical and numeric values are converted to characters.
s <- c('apple','red',5,TRUE)
print(s)

#Vector Manipulation
#Vector arithmetic

# Create two vectors.
v1 <- c(3,8,4,5,0,11)
v2 <- c(4,11,0,8,1,2)


# Vector addition.
a<- v1+v2
print(a)

# Vector subtraction.
a <- v1-v2
print(a)

# Vector multiplication.
a <- v1*v2
print(a)

# Vector division.
a <- v1/v2
print(a)

#Vector Element Recycling

v1 <- c(3,8,4,5,0,11)
v2 <- c(4,11)
# V2 becomes c(4,11,4,11,4,11)

a <- v1+v2
print(a)

a <- v1-v2
print(a)

#Vector Element Sorting
v <- c(3,8,4,5,0,30)
a <- sort(v)
print(a)

# Sort the elements in the reverse order.
a <- sort(v, decreasing = TRUE)
print(a)

# Sorting character vectors.
v <- c("Red","Blue","yellow","violet")
a <- sort(v)
print(a)

# Sorting character vectors in reverse order.
a <- sort(v, decreasing = TRUE)
print(a)

#Vector Length
v <- c(3,8,4,5,0,30)
a <- length(v)
print(a)

#Repeat Vectors
a <- rep(c(1,2,3), each = 3)
a

a <- rep(c(1,2,3), times = 3)
a

a <- rep(c(1,2,3), times = c(5,2,1))
a




#factor: nominal values will be presented 
gender<- factor(c("MALE","FEMALE","MALE","FEMALE"))
gender

blood<-factor(c("O","AB+","O","AB+"))
blood
              
blood<-factor(c("O","AB+","O","AB+"),levels=c("A","B","AB","AB+","O","O+"))
blood


a<- list("A", "B", "C")
a

subject_name <- c("John","Jane","Smith","Jia")
temperature <- c (98.1,98.6,101.4,97.2)
flu_status <- c(FALSE,FALSE,TRUE,FALSE)
#LIST:different datatypes
subject1<- list(fullname=subject_name[1],
                temperature=temperature[1],
                gender=gender[1],
                blood=blood[1])
subject1

#specific value from list:
subject1$fullname

#data frames: list of vectors or factors
data1<- data.frame(subject_name,temperature,flu_status,
                   gender,blood,stringsAsFactors = FALSE)
data1

data1$subject_name
#all rows from first column
data1[,1]

#all columns from first row
data1[1,]

data1[c(1,3),c("temperature","gender")]

data1[-2,c(-1,-3,-5)]

data1[c(1,3),c(2,4)]

#matrices:
mat<-matrix(c('A','B','C','D','E','F'),nrow = 2)
mat

mat<-matrix(c('A','B','C','D','E','F'),ncol = 2)
mat

mat[,1]


