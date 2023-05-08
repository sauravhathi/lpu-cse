#***********    GGPLOT2  GRAMMAR OF GRAPHICS     ***********#
#                                                           #
#    COMPONENTS OF GRAMMAR OF GRAPHICS                      #
#    1. DATA        :   the dataset                         #
#    2. AESTHETICS  :   the metric onto which we plot data  #
#    3. GEOMETRY    :   visual elements to plot the data    #
#    4. FACET       :   groups by which we divide the data  #
#***********************************************************#

library(ggplot2)

#***   SCATTERPLOTS    ***#
ggplot(data=iris, aes(y=Petal.Length, 
                      x=Sepal.Length))+geom_point()
ggplot(data=iris, aes(y=Petal.Length, 
                      x=Sepal.Length,col=Species))+geom_point()
ggplot(data=iris, aes(y=Petal.Length, x=Sepal.Length,
                      shape=Species))+geom_point()
ggplot(data=iris, aes(y=Petal.Length, x=Sepal.Length, col=Species, 
                      shape=Species))+geom_point()

str(house)

house<-read.csv(file.choose(),header = TRUE)
library(dplyr)
house1<- house[,-1]
house1 <- house %>% select(c(-1))
View (house)
#histogram
ggplot(data = house, aes(x=price))+ geom_histogram()
#ggplot(data = house, aes(x=price))+ geom_histogram(bin=50)
ggplot(data=house,aes(x=price))+
geom_histogram(bins=50,fill="brown")
ggplot(data=house, aes(x=price))+
geom_histogram(bins=50,fill="brown",col="black")
ggplot(data=house, aes(x=price, fill=air_cond))+geom_histogram
(bins=50)
ggplot(data=house, aes(x=price, fill= factor(air_cond)
))+
  geom_histogram(bins=50,position="fill")

#*****   BARPLOT   *******#
#to see distribution of continous variable we use histogram
#to see distribution of categorical variable we use barplot
ggplot(data=house, aes(x=waterfront))+geom_bar()
ggplot(data=house, aes(x=waterfront,
                      fill=air_cond))+geom_bar()
ggplot(data=house, aes(x=waterfront,
                      fill=air_cond))+geom_bar(position = "fill")
ggplot(data=house, aes(x=waterfront,
                      fill=sewer))+geom_bar(position="fill")

#****   FREQUENCY-POLYGON   ******#
# an alternative to a histogram used to see a distribution of continous #variable
ggplot(data=house, aes(x=price))+geom_freqpoly()
#increase variation
ggplot(data=house, aes(x=price))+geom_freqpoly(bins=50)
ggplot(data=house, aes(x=price))+geom_freqpoly(bins=100)
ggplot(data=house, aes(x=price, 
                      col=air_cond))+geom_freqpoly(bins=60)

# Modify formatting of axis
pl +  scale_x_continuous(labels = comma)

pl +                                                           # Remove axis labels & ticks
  theme(axis.text.x = element_blank(),
        axis.ticks.x = element_blank(),
        axis.text.y = element_blank(),
        axis.ticks.y = element_blank())

 #****    BOXPLOTS    *****#
# how does continous var change w.r.t. ategorical var
#outliers are beyond the avg value
ggplot(data=house, aes(x=factor(rooms), 
                      y=price))+geom_boxplot()
ggplot(data=house, aes(x=factor(rooms), 
                      y=price, fill=factor(rooms)))+geom_boxplot()
ggplot(data=house, aes(x=factor(rooms), 
                      y=price, fill=air_cond))+geom_boxplot()
ggplot(data=house, aes(x=factor(rooms), 
                      y=price, fill=sewer))+geom_boxplot()


#*****    Smooth-Line    ******#
#how does one continous variable change w.r.t to other continous var
ggplot(data=house, 
       aes(y=price, x=living_area))+geom_smooth()

ggplot(data=house, aes(y=price, x=living_area), 
                      col=air_cond))+geom_smooth(se=F)
ggplot(data=house, aes(y=price, x=living_area), 
                      col=heat))+geom_smooth(se=F)

#**** Applying "lm" (linear model) method   ****#
ggplot(data=house, aes(y=price, x=living_area))+geom_point()+
  geom_smooth(method="lm",se=F)
ggplot(data=house, aes(y=price, x=living_area, 
                      col=air_cond))+geom_point()+
  geom_smooth(method="lm",se=F)
ggplot(data=house, aes(y=price, x=living_area, 
                      col=heat))+geom_point()+
  geom_smooth(method="lm",se=F)

##facets
ggplot(data=house, aes(y=price, x=living_area, 
                      col=air_cond))+geom_point()+
  geom_smooth(method="lm",se=F)+facet_grid(~air_cond)
ggplot(data=house, aes(y=price, x=living_area, 
                      col=fireplaces))+geom_point()+
  geom_smooth(method="lm",se=F)+facet_grid(~fireplaces)
ggplot(data=house, aes(y=price, x=age, 
                      col=fireplaces))+geom_point()+
  geom_smooth(method="lm",se=F)+facet_grid(~fireplaces)


