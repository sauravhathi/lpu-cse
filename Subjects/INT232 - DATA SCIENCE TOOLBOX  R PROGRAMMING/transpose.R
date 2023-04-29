transpose = function()
{
  nrow = as.integer(readline("Enter number of rows : "))
  ncol = as.integer(readline("Enter number of columns : "))
  
  mtx = matrix(nrow = nrow, ncol = ncol)
  for(i in 1:nrow)
  {
    for(j in 1:ncol)
    {
      mtx[i,j] = as.integer(readline(paste("Enter element [",i,",",j,"]: ")))
    }
  }
  print(mtx)
  
  trans=matrix(nrow=ncol, ncol=nrow)
  
  for(i in 1:nrow)
  {
    for(j in 1:ncol)
    {
      trans[j,i]=mtx[i,j]
    }
  }
  print(trans)
}


transpose()