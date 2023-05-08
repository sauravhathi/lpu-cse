# ---------------------- working on diebetes (decision tree)

data = read.csv(file.choose())
summary(data)

str(data)

head(data,10)
tail(data,15)
# looking for missing values

sum(is.na(data))

# checking the dimension of dataset
dim(data)


install.packages("DataExplorer")
library(DataExplorer)

DataExplorer::create_report(data)

# barplot
plot_density(data)

# when i try to plot entire dataset it will directly take categorical variable
plot_bar(data)

# i have used histogram to see the distribution of contineous variable
plot_histogram(data)

colnames(data)
# qq_plot is used to compare the shapes of distributions
plot_qq(data, by="Outcome")

plot_scatterplot(split_columns(data)$continuous, by = "Glucose")

# moving towards model building
# Encoding target variable
library(caTools)
data$Outcome=factor(data$Outcome, levels=c(0,1))

split= sample.split(data$Outcome,SplitRatio=0.85)
training_set=subset(data,split==TRUE)
test_set=subset(data,split==FALSE)

colnames(training_set)

#4.scaling
training_set[-9]=scale(training_set[-9])
test_set[-9]=scale(test_set[-9])
head(training_set[-9],4)

#fitting train data into model
library(rpart)
fit_model = rpart(Outcome~., training_set)


y_pred=predict(fit_model,test_set[-9],type='class')
#6. Calculating confusion matrix
cm=table(test_set[,9],y_pred)
cm
library(caret)
confusionMatrix(cm)


# fitting KNN
# fitting KNN to train_set and predicting on test_set
library(class)

y_pred = knn(train = training_set[,-9],test = test_set[,-9],
             cl=training_set[,9],k=5)



# confusion matrix
cm = table(test_set[,9],y_pred)
cm

confusionMatrix(cm)

#5.Implement Naive bayes
library(e1071)
fit_naive=naiveBayes(x=training_set[-9],
                     y=training_set$Outcome)

y_pred=predict(fit_naive,newdata=test_set[-9])

#6. Calculating confusion matrix
cm=table(test_set[,9],y_pred)
cm

confusionMatrix(cm) 