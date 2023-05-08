{
  x= as.integer(readline(prompt = 'Enter a number'))
  num=function(x)
  {
    return (x+2)
  }
  paste("The entered number after addition is", num(x))
}

#Checking even odd 
{
  x= as.integer(readline(prompt = 'Enter a number'))
  evenOdd=function(x)
  {
    if(x%%2==0)
    return ("even")
    else
      return ("Odd")
  }
  print(evenOdd(x))
}

#Task
#calculating area
{
  r= as.integer(readline(prompt = 'Enter the radius of circle:'))
  l= as.integer(readline(prompt = 'Enter the length of rectangle:'))
  b= as.integer(readline(prompt = 'Enter the breadth of rectangle:'))
  
  areaOfCircle = function(r)
  {
    return (pi*r*r)
  }
  areaOfRect = function(l,b)
  {
    return (l*b)
  }
  periOfRect = function(l,b)
  {
    return (2*(l+b))
  }
  
  print(paste("area of circle", areaOfCircle(r)))
  print(paste("area of rectangle", areaOfRect(l,b)))
  print(paste("perimeter of rectangle", periOfRect(l,b)))
  
}
{
x=as.integer(readline(prompt = 'Enter a number'))
y=as.integer(readline(prompt = 'Enter another number'))
print(sum(x,y))
}

