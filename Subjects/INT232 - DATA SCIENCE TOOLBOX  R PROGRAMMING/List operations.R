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
  print(paste(l))
  newEle=readline(prompt = "Enter the new (String) element to add : ")
  l[["newEle"]]=newEle;
  print(paste(l))
  i=readline(prompt = "Enter the index at which you want to delete the element : ")
  l[i]=NULL
  paste("List element deleted at : ",i);
  print(paste(l))
}