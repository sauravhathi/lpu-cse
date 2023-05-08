{
# print sum of square of first n natural numbers
n=as.numeric(readline())
a=0
for(i in 1:n)
{
  a=a+(i^2)
}
print(paste(a))    
}
