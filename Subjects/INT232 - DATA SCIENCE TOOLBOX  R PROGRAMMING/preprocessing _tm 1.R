#Word Cloud is a data visualization technique used for #representing text data in which the size of each word #indicates its frequency or importance
# read file
a=read.csv(file.choose(),header=TRUE)
str(a)
summary(a)
View(a)

# build corpus: collection of doc
# each tweet will be consider as documents
library(tm)
#iconv-This uses system facilities to convert a character #vector between encodings: the 'i' stands for #'internationalization'.
#x	A character vector.
#from	A character string describing the current encoding.
#to	A character string describing the target encoding.
#sub	character string. If not NA it is used to replace any non
#-convertible bytes in the input. (This would normally be a #single character, but can be more. If "byte", the indication #is "<xx>" with the hex code of the byte.
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


removeURL<- function(x)gsub('¦','',x)
cleanset<-tm_map(cleanset,content_transformer(removeURL))
inspect(cleanset[1:5])

cleanset<-tm_map(cleanset , removeWords,c('anyone','walker16'))#remove speific words

cleanset<-tm_map(cleanset,gsub,pattern='debates',replacement='debate')

cleanset<-tm_map(cleanset,stripWhitespace)
inspect(cleanset[1:5])
dtm = TermDocumentMatrix(a)
m = as.matrix(dtm)
m
v = sort(rowSums(m), decreasing = TRUE)
d = data.frame(word = names(v), freq = v)
head(d, 10)
#random.order-plot words in random order. If false, they will #be plotted in decreasing frequency
#rot.per-proportion words with 90 degree rotation
#max.words-Maximum number of words to be plotted. least frequent terms dropped
#min.freq-words with frequency below min.freq will not be plotted
library(wordcloud)

wordcloud(words = d$word, 
          freq = d$freq,
          min.freq = 1, 
          max.words = 500,
          random.order = FALSE, 
          rot.per = .80, 
          colors = brewer.pal(8, "Dark2"))
