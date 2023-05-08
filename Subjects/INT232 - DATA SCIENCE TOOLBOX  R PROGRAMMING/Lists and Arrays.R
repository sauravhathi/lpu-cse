#Take input from the user and create a list.
{sno=c(1:5)
name=c("veer","jai","ajay","rahul","rohit")
CGPA=c(6:10)
list1=list("Rollno"=sno,"Student Name"=name,"CGPA"=CGPA)
list1}
class(list1[[3]])
class(list1)
typeof(list1)
list1[["Gender"]]<-c("F","M","M","M","M")
list1
list1[["Gender"]]=NULL
list1
list1[4]=NULL
list1
list1$`Student Name`
list1[3]
list1[[3]]
list1[[3]][2]
l1=list1[[2]][-5]
l1=list1[[2]][5]
list1$`Student Name`

#Arrays
{
  name=c()
 n=as.integer(readline('Enter size of array: ')) 
  for(i in 1:n)
  {
    name[i]=readline()
  }
name
}

{
  n=as.integer(readline('No. of students:'))
  Roll=c()
  Name=c()
  CGPA=c()
  for(i in 1:n)
  {
    Roll[i]=as.integer(readline())
    Name[i]=readline()
    CGPA[i]=as.integer(readline())
  }
  l1=list("Roll no"=Roll,"Name"=Name,"CGPA"=CGPA)
  l1
}











