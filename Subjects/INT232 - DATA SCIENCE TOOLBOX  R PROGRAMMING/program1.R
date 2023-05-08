#assigning string type value to variable
mystring<-"Hello World"
print(mystring)

#assigning number type value to variable
age<-24
print(age)

#asking the user at run time to input the value
{x<-readline(prompt = "Enter your name: ")
print(x)}

#multiple lines of input from user
{name<-readline(prompt = "Enter your name: ")
  age<-readline(prompt = "Enter your age: ")
  paste("Hello",name,"!! Your age is ", age)}

#adding two numbers 
x<-67
y=28
paste(x+y)

#Subtracting two numbers 
z=x-y
paste("Subtraction: ",z)

#Multiplying two numbers 
z=x*y
paste("Multiplication: ",z)

#Dividing two numbers 
z=x/y
paste("Division: ",z)


