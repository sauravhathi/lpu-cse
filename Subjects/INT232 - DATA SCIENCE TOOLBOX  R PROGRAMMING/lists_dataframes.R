v1=c(1.2,2L,TRUE)
class(v1)- # all components treated as common datatype

x<-list(2.5,TRUE,1:3)
x
class(x)# all components are treated as different datatype
class(x[1])# will consider whole list
class(x[[1]]) #will consider first element of list

typeof(x)
typeof(x[["a"]])

x<-list("a"=2.5,"b"= TRUE,"c"=1:3)
x

x$a #accessing elements using component name
x[1] # accessing elements using index
x["a"]
str(x)

# Adding new component to this list
x[["d"]]<-20L
x

str(x)
x[5]='john'
str(x)

#Deletion from list
x[5]<-NULL
str(x)

#taking boolean input
a=as.logical(readline
             (prompt=
                "Enter a boolean value (true or false)"))
x[5]<-a
str(x)

#task
{
  w=readline(prompt = "Enter the first (String) element : ")
  x=as.complex(readline(prompt = "Enter the second (complex) element : "))
  y=as.numeric(readline(prompt = "Enter the third (Numeric) element : "))
  z=as.character(readline(prompt = "Enter the fourth (chars) element : "))
  l=list("w"=w,
         "x"=x,
         "y"=y,
         "z"=z);
  print("List Created!!");
  
  newEle=readline(prompt = "Enter the new (String) element to add : ")
  l[["newEle"]]=newEle;
  
  i=readline(prompt = "Enter the index at which you want to delete the element : ")
  l[i]=NULL
  paste("List element deleted at : ",i);
  
  print(l)
  
}

#Dataframes
d1<-data.frame("SN"=1:3,
               "Age"=c(21,67,26),
               "Name"=c("Jason","Dora","Flora"))
d1
str(d1)
names(d1)
names(x)

#accessing the specific elements in dataframe
d1$Name

library(help="datasets")
str(trees)
head(trees,n=3)
head(trees,n=10)
head(trees)
tail(trees)
tail(trees,n=3)

trees[10:20,]
trees[,1:2]
trees[,-2]
dim(trees)
trees[1,3]
trees[3,2]

trees[trees$Height>82,]