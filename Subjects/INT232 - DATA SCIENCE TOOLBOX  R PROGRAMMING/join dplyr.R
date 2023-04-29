library(dplyr)
df1 = data.frame(ID = c(1, 2, 3, 4, 5),
                 w = c('a', 'b', 'c', 'd', 'e'),
                 x = c(1, 1, 0, 0, 1),
                 y=rnorm(5),
                 z=letters[1:5])
df1
df2 = data.frame(ID = c(1, 7, 3, 6, 8),
                 a = c('z', 'b', 'k', 'd', 'l'),
                 b = c(1, 2, 3, 0, 4),
                 c =rnorm(5),
                 d =letters[2:6])
df2
df3 = inner_join(df1, df2, by = "ID")# inner join
df3
left_join(df1, df2, by = "ID")
View(mtcars)
mtcars$model <- rownames(mtcars)
mtcars$model
first <- mtcars[1:20, ]
second <- mtcars[10:32, ]
#INTERSECT selects unique rows that are common to both the data frames.
View(intersect(first, second)) #Rows that appear in both x and y.
x=data.frame(ID = 1:7, ID1= 10:16)
y=data.frame(ID = 1:3,  ID1 = 12:14)
x
y

union(x,y)#Rows that appear in either or both x and y.
union_all(x,y)
df <- c(-10,2, NA)

View(setdiff(first, second))#Rows that appear in x but not y.
