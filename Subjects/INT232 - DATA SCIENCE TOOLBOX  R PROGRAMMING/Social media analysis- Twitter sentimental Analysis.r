### Setup Auth####
library(twitteR)
appname <- ""
key <- ""
secret <- ""
access<-""
access_secret=""
setup_twitter_oauth(key, secret, access, access_secret)

b=read.csv(file.choose(),stringsAsFactors=F)
b=b[,-1]
##### tm ####
library(tm)

corpus = iconv(b$text, "latin1", "UTF-8")
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

write.csv(tdm,"tdm.csv")
#### sentimental analysis #####
library(syuzhet)
data=read.csv("tdm.csv")
mysentiment_tech<-get_nrc_sentiment(data$X)
#calculationg total score for each sentiment
Sentimentscores_tech<-data.frame(colSums(mysentiment_tech[,]))
names(Sentimentscores_tech)<-"Score"
Sentimentscores_tech<-cbind("sentiment"=rownames(Sentimentscores_tech),Sentimentscores_tech)
rownames(Sentimentscores_tech)<-NULL
Sentimentscores_tech_r=Sentimentscores_tech
#********************************************************************************* 
library(ggplot2)
ggplot(data=Sentimentscores_tech,aes(x=sentiment,y=Score))+
geom_bar(aes(fill=sentiment),stat = "identity")+
theme(legend.position="none")+
xlab("Sentiments")+ylab("scores")+ggtitle("R Program")