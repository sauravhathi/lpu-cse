colors = c("green", "orange", "brown")
months <- c("Mar", "Apr", "May", "Jun", "Jul")
regions <- c("East", "West", "North")
# Create the matrix of the values.
Values <- matrix(c(2, 9, 3, 11, 9, 4, 8, 7, 3, 12, 5, 2, 8, 10, 11), nrow = 3, ncol = 5, byrow = TRUE)
# Create the bar chart
# elments can be forced to be unstacked by using beside=True
barplot(Values, main = "Total Revenue", names.arg = months, xlab = "Month", ylab = "Revenue",   col = colors, beside = TRUE)
# Add the legend to the chart
legend("topleft", regions, cex = 0.7, fill = colors)
#Basic Barplot in R
values <- c(0.4, 0.75, 0.2, 0.6, 0.5)
barplot(values)
#adding colorbar
plot(values,col = "#1b98e0")
#Horizontal Barplot
barplot(values,horiz = TRUE)
#Barplot with labels
group <- LETTERS[1:5]
barplot(values,names.arg = group)
#Stacked Barplot with Legend
data <- data.frame(A = c(0.2, 0.4), 
                   B = c(0.3, 0.1),  C = c(0.7, 0.1), D = c(0.1, 0.2),  E = c(0.3, 0.3))
rownames(data) <- c("Group 1", "Group 2")
data
barplot(as.matrix(data),col = c("#1b98e0", "#353436"))
legend("topright",       legend = c("Group 1", "Group 2"),       fill = c("#1b98e0", "#353436"))
#Grouped Barplot with Legend
barplot(as.matrix(data),  col = c("#1b98e0", "#353436"),  beside = TRUE)
legend("topright",       legend = c("Group 1", "Group 2"), fill = c("#1b98e0", "#353436"))
library("ggplot2")
data_ggp <- data.frame(group, values)
ggplot(data_ggp, aes(x = group, y = values)) +  
  geom_bar(stat = "identity")


