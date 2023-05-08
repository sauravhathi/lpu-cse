{
  n=readline('Enter the length of array')
  a=c()
  for ( i in 1:n)
  {
    a[i]=as.integer(readline())
  }
  print(paste("Entered array is:"))
  for ( i in 1:n)
  {
    print(paste(a[i]))
  }
}

#Factors
BloodGroup=c("AB+","B+","O+","AB+","O+","AB+")
fact=factor(BloodGroup)
fact
fact=factor(BloodGroup,levels=c("AB+","O+"))
fact
fact=factor(BloodGroup,levels=c("AB+","B+","O+"),labels=c(1,2,3))
fact
