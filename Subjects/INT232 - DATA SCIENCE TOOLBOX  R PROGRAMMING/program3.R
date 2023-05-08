b=c(10,20,30)
w=0xf+b[1]
#taking the input in vector from user

{
  x=as.integer(readline(prompt = 'Enter 1st element:'))
  y=as.integer(readline(prompt = 'Enter 2nd element:'))
  z=as.integer(readline(prompt = 'Enter 3rd element:'))
  v1=c(x,y,z)
  v1
}

#Adding two vectors
{x1=as.numeric(readline(prompt = ("Enter first number : ")))
  x2=as.numeric(readline(prompt = ("Enter second number : ")))
  x3=as.numeric(readline(prompt = ("Enter third number : ")))
  v1=c(x1,x2,x3)
  y1=as.numeric(readline(prompt = ("Enter first number in v2 : ")))
  y2=as.numeric(readline(prompt = ("Enter second number in v2 : ")))
  v2=c(y1,y2)
  paste(v1+v2)
}

v1=c(10,100,1000,1200)
v2=c(20,30)
paste(v1+v2)

#add, subtract,multiply and divide two vectors
{
  num1 <- as.integer(readline("Enter first num of vector 1: "))
  num2 <- as.integer(readline("Enter second num of vector 1: "))
  v1=c(num1,num2)
  num3 <- as.integer(readline("Enter first num of vector 2: "))
  num4 <- as.integer(readline("Enter second num of vector 2: "))
  v2=c(num3,num4)
  print(v1<v2)
  print(v1>v2)
  print(v1<=v2) #v1<v2 or v1==v2
  print(v1>=v2)
  print(v1==v2)
  print(v1!=v2)
}

#matrix
m=matrix(c(1:6),3,2)
m

m=matrix(c(1:4),3,2)
m

#taking input from user
{
rows=as.integer(readline("Rows of matrix: "))
cols=as.integer(readline("Columns of matrix: "))
x=as.integer(readline("Enter starting element of matrix: "))
y=as.integer(readline("Enter ending element of matrix: "))
m=matrix(c(x:y),rows,cols)
print(m)
}

#logical operators(!,&,&&,|,||,=)
 #if else

x<-as.integer(readline(prompt = 'Enter a number:'))
{
  if(x>0)
{
  print("POSITIVE")
}
else
{
  print("Negative")
}
}

#other way for if else codes:
x<-as.integer(readline(prompt = 'Enter a number:'))
y<-if(x%%2==0) "Even" else "Odd"
print(y)

#checking if age is valid for voting or not
age<-as.integer(readline(prompt='Enter age'))
{
  if(age==0)
    print('Not a valid age')
  else if (age<18)
    print('You are not eligible to vote')
  else
    print('You are eligible to vote')
}

# Program to check if the input number is prime or not
# take input from the user
num = as.integer(readline(prompt="Enter a number: "))
flag = 0
# prime numbers are greater than 1
if(num > 1) {
  # check for factors
  flag = 1
  for(i in 2:(num-1)) {
    if ((num %% i) == 0) {
      flag = 0
      break
    }
  }
} 
if(num == 2)    flag = 1
if(flag == 1) {
  print(paste(num,"is a prime number"))
} else {
  print(paste(num,"is not a prime number"))
}










