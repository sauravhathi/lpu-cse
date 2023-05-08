library(twitteR)
library(tidyr)
library(dplyr)
library(tidyverse)
library(tidytext)
appname <- "twitter"
key <- "IaOlqcW3Xpfcbta95h5hpAhYO"
secret <- "xGXgxzXyzHfJ74wOqfrjclXv2w5D3jgYMd1Upberf6R2kiJF9o"
access<-"1249574362987950081-RmsmLnbBsDdlJPxw8egmnByOyS0DFv"
access_secret="3NhlIUQAJDLXadz3BMlrNUHX3kAQSZ4ldF0cPG68I0mSq"


setup_twitter_oauth(key, secret, access, access_secret)

a <- searchTwitter("#COVID",n=100,lang = "en")

a_df <- twListToDF(a) # Convert to data frame
write.csv(a_df,file="COVID2.csv")
x=read.csv("COVID2.csv")



# Q1)
a_df=read.csv(file.choose())
head(a_df$text,n=1)


#Q2) 
library(syuzhet)
#The get_nrc_sentiment function returns a data frame in #which each row represents a sentence from the original #file. 
mysentiment_tech<-get_nrc_sentiment((a_df$text))
mysentiment_tech
Sentimentscores_tech<-data.frame(colSums(mysentiment_tech[,]))
Sentimentscores_tech


names(Sentimentscores_tech)<-"Score"
Sentimentscores_tech<-cbind("sentiment"=rownames(Sentimentscores_tech),Sentimentscores_tech)
rownames(Sentimentscores_tech)<-NULL

#*************************************************************************************


ggplot(data=Sentimentscores_tech,aes(x=sentiment,y=Score))+
  geom_bar(aes(fill=sentiment),stat = "identity")+coord_flip()+
  theme(legend.position="none")+
  xlab("Sentiments")+ylab("scores")+ggtitle("COVID RESPONSE ANALYSIS")

#Q3 
library(tm)

corpus = iconv(a_df$text, "latin1", "UTF-8")
corpus<- Corpus(VectorSource(corpus))
toSpace <- content_transformer(function (x , pattern ) gsub(pattern, " ", x))
docs=corpus
docs <- tm_map(docs, toSpace, "/")
docs <- tm_map(docs, toSpace, "@")
docs <- tm_map(docs, toSpace, "\\|")
corpus=docs
corpus<- tm_map(corpus,tolower)
corpus<-tm_map(corpus,removePunctuation)# remove puntuations like , .
corpus<- tm_map(corpus,removeNumbers)
cleanset<-tm_map(corpus,removeWords,stopwords('english'))# remove common words
removeURL<- function(x)gsub('http[[:alnum:]]=','',x)
cleanset<-tm_map(cleanset,content_transformer(removeURL))
x=cleanset


tdm<-TermDocumentMatrix(cleanset)
tdm # display information
tdm<-as.matrix(tdm)
v=sort(rowSums(tdm))

library(wordcloud)
w<-data.frame(names(v),v)
colnames(w)<-c('word','freq')
set.seed(1234)
wordcloud(words=w$word,freq=w$freq)

library(wordcloud2)
wordcloud2(w, size=10,color = "random-light", backgroundColor = "grey")
wordcloud2(w,size=5,shape = 'circle')

