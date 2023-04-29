#Plotly in R Programming Language allows to create interactive web #graphics from 'ggplot2' graphs

install.packages("plotly")
#Basic scatterplot
library(plotly)

fig <- plot_ly(data = iris, x = ~Sepal.Length, 
               y = ~Petal.Length)

fig
#styled scatterplot

#Plotly in R Programming Language allows to create interactive web graphics from #'ggplot2' graphs 
fig <- plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length,
               marker = list(size = 50,
                             color = 'rgba(255, 182, 193, .9)',
                             line = list(color = 'rgba(152, 0, 0, .8)',
                                         width = 10)))
add_markers(fig, color = ~Petal.Length,
            size = ~Petal.Length)
add_markers(fig, color = ~Species)
fig <- layout(fig,title = 'Styled Scatter')

fig

#adding color and symbols to data
fig <- plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length, type = 'scatter',
               mode = 'markers', symbol = ~Species, symbols = c('circle','x','o'),
               color = I('green'), marker = list(size = 9))

fig

#Using dataset diamonds and displaying color, size using column values of carat
d <- diamonds[sample(nrow(diamonds), 1000), ]
View(d)

str(d)
fig <- plot_ly(
  d, x = cut, y = color,
  color = cut, size = cut
)

fig
# import plotly library
library(plotly)

# create plotly visualisation
p <- plot_ly(iris, x = ~Sepal.Width,
             y = ~Sepal.Length)

# adding markers
add_markers(p, color = ~Petal.Length,
            size = ~Petal.Length)
add_markers(p, color = ~Species)
View(iris)

