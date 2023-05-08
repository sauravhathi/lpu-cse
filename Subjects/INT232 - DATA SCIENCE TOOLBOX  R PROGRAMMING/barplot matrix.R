# Create the data for the chart
A <- c(17, 32, 8, 53, 1)

# Plot the bar chart
barplot(A, xlab = "X-axis", ylab = "Y-axis", main ="Bar-Chart")
#Creating a Horizontal Bar Chart
#Now to make it horizontal new parameter is added.
barplot(A, horiz=TRUE )
barplot(A, horiz = TRUE, xlab = "X-axis",
        ylab = "Y-axis", main ="Bar-Chart")
#names.arg: This parameter is a vector of names appearing under each bar in #bar chart.
# Create the data for the chart
A <- c(17, 2, 8, 13, 1, 22)
B <- c("Jan", "feb", "Mar", "Apr", "May", "Jun")

# Plot the bar chart 
barplot(A, names.arg = B, xlab ="Month", 
        ylab ="Articles", col ="green", 
        main ="Article chart")


colors = c("green", "orange", "brown")
months <- c("Mar", "Apr", "May", "Jun", "Jul")
regions <- c("East", "West", "North")

# Create the matrix of the values.
Values <- matrix(c(2, 9, 3, 11, 9, 4, 8, 7, 3, 12, 5, 2, 8, 10, 11),
                 nrow = 3, ncol = 5, byrow = TRUE)

# Create the bar chart
barplot(Values, main = "Total Revenue", names.arg = months,
        xlab = "Month", ylab = "Revenue",
        col = colors, beside = TRUE)

# Add the legend to the chart
legend("topleft", regions, cex = 0.7, fill = colors)


colors = c("green", "orange", "brown")
months <- c("Mar", "Apr", "May", "Jun", "Jul")
regions <- c("East", "West", "North")

# Create the matrix of the values.
Values <- matrix(c(2, 9, 3, 11, 9, 4, 8, 7, 3, 12, 5, 2, 8, 10, 11),
                 nrow = 3, ncol = 5, byrow = TRUE)

# Create the bar chart
barplot(Values, main = "Total Revenue", names.arg = months,
        xlab = "Month", ylab = "Revenue",
        col = colors)

# Add the legend to the chart
legend("topleft", regions, cex = 0.7, fill = colors)
