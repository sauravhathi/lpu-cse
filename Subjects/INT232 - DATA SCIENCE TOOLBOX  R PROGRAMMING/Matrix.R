
v1=c(6,7,9)
v2=c(1,2,3)
v1+v2
v1=c(6,7,9)
v2=c(1,2,3,4,5,6)
v1+v2
fun1=function(x,y,z)
{
v1<-c(x,y,z)
v1
class(v1)
v2=c(10,20,30)
class(v2)
print(v1+v2)

}
input1=function()
{
  x=as.numeric(readline('Enter first element of vector '))
  y=as.numeric(readline('Enter second element of vector '))
  z=as.numeric(readline('Enter third element of vector '))
  
}
input1()
fun1(x,y,z)

#matrix
x=matrix(c(1:9),3,3)
x
x=matrix(c(1:9),3,3,byrow=TRUE)
x
x=matrix(c(1:6),3,3)
x
x=matrix(c(1:9),nrow=1)
x
x=matrix(c(1:9),ncol=1)
x
class(x)
typeof(x)
{
  x=as.integer(readline('Enter start value: '))
  y=as.integer(readline('Enter end value: '))
  r1=as.integer(readline('Rows: '))
  c1=as.integer(readline('Columns: '))
  mat=matrix(data=c(x:y),r1,c1)
  mat
}
input<-function()
{
  a=as.integer(readline('Starting value in Matrix1:'))
  b=as.integer(readline('Last value in Matrix1:'))
  r1=as.integer(readline('Rows:'))
  c1=as.integer(readline('Columns:'))
  m1=matrix(c(a:b),r1,c1)
  print(m1)
  x=as.integer(readline('Starting value in Matrix2:'))
  y=as.integer(readline('Last value in Matrix2:'))
  r2=as.integer(readline('Rows:'))
  c2=as.integer(readline('Columns:'))
  m2=matrix(c(x:y),r2,c2)
  m2
  return (m1)
}
#operations on Matrix:
operations<-function(m1,m2)
{
  print(m1+m2)
  print(m1-m2)
  print(m1*m2)
  print(m1/m2)
  print(m1 %% m2)
  print(m1^m2)
  print(m1==m2)
  print(m1>m2)
  print(m1<m2)
  print(m1!=m2)
}
input()
operations(m1,m2)


{
mat=matrix(sample(letters),6,6)
mat
}
l1=list("S.No."=c(1:5),
        "Rollno."=c(1140:1144),"Name"=c('A','B','C','D','E'))
l1
l1$Name
l1[1]
l1["Name"]
l1[["Gender"]]=c('F','M','F','M','M')
l1
l1["Name"]
l1[["Gender"]]<-NULL
l1

str(l1)
str(l1[1])
l1[1]=as.character(l1[1])












