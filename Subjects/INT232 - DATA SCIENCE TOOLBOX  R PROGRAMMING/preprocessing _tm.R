# read file
a=read.csv(file.choose(),header=TRUE)
str(a)
summary(a)
View(a)

# build corpus: collection of doc
# each tweet will be consider as documents
# VectorSource() function 
# creates a corpus of 
# character vectors
library(tm)
corpus<-iconv(a$text)
corpus<- Corpus(VectorSource(corpus))
inspect(corpus[1:5])

# data cleaning

corpus<- tm_map(corpus,tolower)
inspect(corpus[1:5])


corpus<-tm_map(corpus,removePunctuation)# remove puntuations like , .
inspect(corpus[1:5])


corpus<- tm_map(corpus,removeNumbers)
inspect(corpus[1:5])


cleanset<-tm_map(corpus,removeWords,stopwords('english'))# remove common words
inspect(cleanset[1:5])
#Transformation is performed using tm_map() function to replace, for example, special characters #from the text like "@", "#", "/".

removeURL<- function(x)gsub('¦','',x)
cleanset<-tm_map(cleanset,content_transformer(removeURL))
inspect(cleanset[1:5])

cleanset<-tm_map(cleanset , removeWords,c('anyone','walker16'))#remove speific words

cleanset<-tm_map(cleanset,gsub,pattern='debates',replacement='debate')

cleanset<-tm_map(cleanset,stripWhitespace)
inspect(cleanset[1:5])
