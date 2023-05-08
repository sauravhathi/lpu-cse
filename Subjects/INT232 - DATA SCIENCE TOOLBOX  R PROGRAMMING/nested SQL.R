#install.packages("readxl")
library("readxl")
library("sqldf")
d1=read_excel(file.choose())
View(d1)
View(sqldf("select * from d1 limit 10"))# display 10 rows
View(sqldf("select Quantity as 'Q',Profit as 'P' from d1 limit 10"))
#filtering the data
View(sqldf("select Quantity,Discount from d1 where region=='Central' limit 20"))#Sorting
View(sqldf("select * from d1 order by City desc limit 20"))
colnames(d1)[11]<-"State"
View(sqldf("select City,State,Profit from d1 order by City,State desc limit 20"))
sqldf("select City,State,Profit from d1 order by City desc,State  limit 20")
#like
sqldf("select city,profit from d1 where City like 'H%' ")
View(sqldf("select city,profit from d1 where City like 'He%' "))
sqldf("select city,profit from d1 where City like '%H' ")
sqldf("select city,profit from d1 where City like '%H%' ")
#aggregrate functions
sqldf("select sum(Profit) from d1 ")

#Nested select
View(sqldf("select region from d1 where  Profit== (Select max(Profit) from d1)"))
sqldf("select region from d1 where  Profit== (Select min(Profit) from Q2)")

sqldf("select city from d1 where  Profit== (Select max(Profit) from Q2)")
sqldf("select city from d1 where  Profit== (Select min(Profit) from Q2)")

a=sqldf("select Segment from d1 ")
head(a)
b=sqldf("select Segment from d1 order by Profit")
head(b)
#group by
sqldf("Select sum(Sales) from d1 ")
View(sqldf("Select sum(Sales) from d1 where Region in ('Central','West') group by Region"))
sqldf("Select region,sum(Sales) from d1 group by Region")
sqldf("select profit,region from d1 group by region having sum(profit)>0")
sqldf("select profit,region from d1 group by region ")
sqldf("select sales,profit,region from d1 group by region ")
sqldf("select region,sales,profit,sales-profit as cost from d1 group by region ")
















