"""datatypes in R
1. Numeric
2. Integer
3. Character
4. Logical
5. Complex
6. Raw
"""
#1. Numeric
x=10
class(x)
#2. Integer
x=10L
class(x)
#3. Character
x='Hi there'
class(x)
#4. Logical
x=T 
#or
x=TRUE
class(x)
#5. complex datatype
x=5i+3
class(x)
#6. Raw 
x=charToRaw('Hi there')
class(x)
print(x)
raw(length=10)

#Adding two numbers by taking input from user
fun1<- function()
{
x=as.logical(readline(prompt='Enter first variable'))
y=as.logical(readline('Enter second variable'))
z=x+y
paste('Result= ',z)
}
fun1()
a=c(20,34)
a[a %% 2==0]



