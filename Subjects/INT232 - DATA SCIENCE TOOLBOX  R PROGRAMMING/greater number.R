{
  a=as.numeric(readline())
  b=as.numeric(readline())
  if(a==0 || b==0)
  {
    print(paste('Enter a positive number'))
  }
  else if (a>b)
  {
    print(paste('A is greater'))
  }
  else 
  {
    print(paste('B is greater'))
  }}