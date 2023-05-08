#***********    GGPLOT2  GRAMMAR OF GRAPHICS     ***********#
#                                                           #
#    COMPONENTS OF GRAMMAR OF GRAPHICS                      #
#    1. DATA        :   the dataset                         #
#    2. AESTHETICS  :   the metric onto which we plot data  #
#    3. GEOMETRY    :   visual elements to plot the data    #
#    4. FACET       :   groups by which we divide the data  #
#***********************************************************#

library(ggplot2)

#***   SCATTERPLOTS    ***
# use the built-in iris dataset
View(iris)
ggplot(data=iris, aes(y=Petal.Length, 
                      x=Sepal.Length))+geom_point()
ggplot(data=iris, aes(y=Petal.Length, 
                      x=Sepal.Length,col=Species))+geom_point()
ggplot(data=iris, aes(y=Petal.Length, x=Sepal.Length,
                      shape=Species))+geom_point()
#now do the same scatter plot for different shapes with different colours.
ggplot(data=iris, aes(y=Petal.Length, x=Sepal.Length, col=Species, 
                      shape=Species))+geom_point()
# Visualize the relationship between length and dose from toothgrowth dataset 
# on the basis of supplement.
ggplot(data=ToothGrowth,aes(y=len,x=dose,col=supp,shape=supp))+geom_point()

View(ToothGrowth)
#histogram for housepricing data


dat1<-read.csv(file.choose(),header = TRUE)
str(dat1)
ggplot( aes(x=SalePrice),data=dat1)+
  geom_histogram(bins=50)
ggplot(data=dat1, 
       aes(x=SalePrice))+geom_histogram(bins=50, fill="brown")
ggplot(data=dat1, aes(x=SalePrice))+geom_histogram(bins=50, 
                                  fill="brown",col="black")
ggplot(data=dat1, aes(x=SalePrice, fill=CentralAir))+geom_histogram(bins=50)

ggplot(data=dat1, aes(x=SalePrice, fill=CentralAir))+
  geom_histogram(bins=50,position="fill")

#histogram for garage area (housepricing data) (write your EDA)

ggplot(aes(x=GarageArea,fill=GarageCond),data=dat1)+geom_histogram(bins=50,
                                                                  position = "stack")

#*****   BARPLOT   *******#
ggplot(data=dat1, aes(x=HouseStyle))+geom_bar()
ggplot(data=dat1, aes(x=HouseStyle,
                      fill=CentralAir))+geom_bar()
ggplot(data=dat1, aes(x=HouseStyle,
                fill=CentralAir))+geom_bar(position = "fill")
ggplot(data=dat1, aes(x=HouseStyle, 
                      fill=SaleCondition))+geom_bar(position="fill")
ggplot(data=dat1, aes(x=HouseStyle, 
                      fill=SaleCondition))+geom_bar(position="stack")

# do the stack bar chart for iris dataset.
ggplot(data=iris,aes(x=Sepal.Length,fill=Species))+geom_bar(position = "stack")
ggplot(data=iris,aes(x=Petal.Length,fill=Species))+geom_bar(position="stack")

#****   FREQUENCY-POLYGON   ******#
ggplot(data=dat1, aes(x=SalePrice))+geom_freqpoly(bins=50)
ggplot(data=dat1, aes(x=SalePrice))+geom_freqpoly(bins=20)
ggplot(data=dat1, aes(x=SalePrice, 
                      col=HouseStyle))+geom_freqpoly(bins=60)
ggplot(data=dat1, aes(x=SalePrice, 
                      col=CentralAir))+geom_freqpoly(bins=60)

 #****    BOXPLOTS    *****#
ggplot(data=dat1, aes(x=factor(BedroomAbvGr), 
                      y=SalePrice))+geom_boxplot()
ggplot(data=dat1, aes(x=factor(BedroomAbvGr), y=SalePrice,
                      fill=CentralAir))+geom_boxplot()
ggplot(data=dat1, aes(x=factor(BedroomAbvGr), y=SalePrice, 
                      fill=factor(BedroomAbvGr)))+geom_boxplot()
ggplot(data=dat1, aes(x=factor(BedroomAbvGr),
                      y=SalePrice, fill=GarageType))+geom_boxplot()



#*****    Smooth-Line    ******#
ggplot(data=dat1, 
       aes(x=SalePrice, y=LotArea))+geom_smooth(se=F)
ggplot(data=dat1, aes(x=SalePrice, y=LotArea, 
                      col=CentralAir))+geom_smooth(se=F)
ggplot(data=dat1, aes(x=SalePrice, y=LotArea, 
                      col=HouseStyle))+geom_smooth(se=F)

#**** Applying "lm" (linear model) method   ****#
ggplot(data=dat1, aes(x=SalePrice, y=LotArea))+geom_point()+
  geom_smooth(method="lm",se=F)
ggplot(data=dat1, aes(x=SalePrice, y=LotArea, 
                      col=CentralAir))+geom_point()+
  geom_smooth(method="lm",se=F)
ggplot(data=dat1, aes(x=SalePrice, y=LotArea, 
                      col=HouseStyle))+geom_point()+
  geom_smooth(method="lm",se=F)
ggplot(data=dat1, aes(x=SalePrice, y=LotArea, 
                      col=factor(RoofStyle)))+geom_point()+
  geom_smooth(method="lm",se=F)

library(ggplot2)
ggplot(data=dat1, aes(x=SalePrice, y=LotArea, 
                      col=CentralAir))+geom_point()+
  geom_smooth(method="lm",
              se=F)+facet_grid(~CentralAir)-> o1
o1 +labs(title = "Any Name", fill="CentralAir")->o2
?theme
o2+theme(panel.background = 
           element_rect( fill = "palegreen"))->o3
o3+theme(plot.title = element_text(hjust = 0.5, 
                                   face= "bold",
                                   colour = "blue"))
View(mpg)
ggplot(data = mpg) + 
  geom_point(mapping = aes(x = displ, y = hwy))

ggplot(data = mpg) + 
  geom_point(mapping = aes(x = displ, y = hwy), color = "blue")

ggplot(data = mpg) + 
  geom_point(mapping = aes(x = displ, y = hwy)) +
  facet_grid(drv ~ .)

ggplot(data = mpg) + 
  geom_point(mapping = aes(x = displ, y = hwy)) +
  facet_grid(. ~ cyl)

