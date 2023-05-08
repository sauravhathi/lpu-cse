a="hello"
b="how"
c="are"
d="you"
#print(paste(a,b,c,d)
print(paste(a,b,c,d))
print(paste(a,b,c,d,sep="&*"))
print(paste("Factorial ","a","=","120",sep="",collapse = " " ))#remove the space in adjacent lines

#1. grep()
#It is used for pattern matching and replacement. 
#grep, grepl, regexpr, gregexpr and regexec search 
#for matches with argument pattern within each element of a character vector.
#Here we subsitute the first and other matches with sub and gsub.  
#sub and gsub perform replacement of the first and all matches.

grep("b+", c("ab+", "bda2", "+ccaa", "ad"), perl=TRUE, value=FALSE)


#2. nchar()
 str <- "Big Data"
 nchar(str)

 #3.sprintf()
 #This function makes of the formatting commands that are styled after C. 
 sprintf("%s scored %.2f percent","Matthew", 72.39999)

  #4.substr(): is the substrings of a character vector. The extractor replaces substrings in a character vector.
 
 num <- "veerpal"
substr(num, 4, 5)
 substr(num, 5, 7)
 
 #5. strsplit()
 
 str = "Splitting sentence into words"
strsplit(str, " ")


st1<- "shuBHAm"
print(tolower(st1))
st1<- "shuBHAm"
print(toupper(st1))
