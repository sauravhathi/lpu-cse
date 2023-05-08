{
  x=as.integer(readline(prompt='Enter number of data items '))
  print(paste('Enter Sno, name, section,gender and CGPA'))
  sno=c()
  name=c()
  gender=c()
  sec=c()
  CGPA=c()
  for(i in 1:x)
  {
    sno[i]=as.numeric(readline())
    name[i]=readline()
    gender[i]=readline()
    sec[i]=readline()
    CGPA[i]=as.numeric(readline())
  }
  list1<-list("Sno"=sno,
              "Name"=name,
              "Gender"=gender,
              "section"=sec,
                 "CGPA"=CGPA)
  
}
?matrix
{
  n = as.integer(readline("Enter number of students: "))
  stud = matrix(nrow=n,ncol=4,byrow=TRUE)
  colnames(stud) = c("Name", "Roll No.", "Gender", "CGPA")
  for(i in 1:n){
    print(paste("Student ",i))
    name = readline("Enter Student's name: ")
    stud[4*(i-1) + 1] = name
    roll = as.integer(readline("Enter Roll no: "))
    stud[4*(i-1) + 2] = roll
    gender = readline("Enter Gender: ")
    stud[4*(i-1) + 3] = gender
    cgpa = as.numeric(readline("Enter CGPA: "))
    stud[4*(i-1) + 4] = cgpa
  }
  print(stud)
}

{
  n<-as.integer(readline(prompt = "Enter no:of students:"))
  
  df<-data.frame(S.NO=c(),NAME=c(),ROLL=c(),GENDER=c(),CGPA=c())
  count=1
  while (count!=n+1) {
    df.name<-readline("Name:")
    df.roll<-as.integer(readline("roll:"))
    df.gender<-readline("Gender:")
    df.cgpa<-as.numeric(readline("Cgpa:"))
    df<-rbind(df,data.frame(S.NO=c(count),NAME=c(df.name),ROLL=c(df.roll),GENDER=c(df.gender),CGPA=c(df.cgpa)))
    count=count+1
  }
  print(df)
}
