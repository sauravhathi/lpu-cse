name=readline(prompt = 'Enter your name:')
name

readline(prompt = 'Enter your section:')->section
section

{
name=readline(prompt = 'Enter your name:')
readline(prompt = 'Enter your section:')->section
paste('Hello!!',name,'Your section is',section,sep = "_")
}

paste0('Hi','Who are you?','30')

#Variables
a<-10
b<-20
paste('a=',a,'b=',b)

a=25
b=-30
paste('a=',a,'b=',b)

#Datatypes
a=15
typeof(a)

a=15L
typeof(a)

a=1.5
typeof(a)

a='TRUE is boolean'
typeof(a)

a=TRUE
typeof(a)

a=8i+10
typeof(a)

#vectors
v=c(15,85,9999)
v

class(v)

v=c(15L,35L,9999L)
v
class(v)

v=5.8976L  #error bcz either decial value or L will be used
v
class(v)

#TASK-1
{
  a1=5
  b1=6L
  c1=TRUE
  d1=3+5i
  e1="Aryant"
  f1='a'
  
  paste("type of a1",typeof(a1),
        "type of b1",typeof(b1),
        "type of c1",typeof(c1),
        "type of d1",typeof(d1),
        "type of e1",typeof(e1),
        "type of f1",typeof(f1))
}

v=c('hello',7,TRUE)
v
class(v)

v=c(15,78.9,999)
v
class(v)

v=c(15L,40.5,TRUE)
v
class(v)

v=c(TRUE,4+3i)
v
class(v)

#Preference of vector classes-
#character, complex,numeric,integer,logical








