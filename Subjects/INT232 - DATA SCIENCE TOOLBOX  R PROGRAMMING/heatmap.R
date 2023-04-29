#Heatmap is defined as a graphical representation of data using #colors to visualize the value of the matrix. In this to represent #more common values or higher activities brighter colors basically #reddish colors are used and to less common or activity values #darker colors are preferred. Heatmap is also defined by the name #of the shading matrix.
# Set seed for reproducibility
set.seed(110)

# Create example data
data <- matrix(rnorm(100, 0, 5), nrow = 10, ncol = 10)

# Column names
colnames(data) <- paste0("col", 1:10)
rownames(data) <- paste0("row", 1:10)

# Draw a heatmap
heatmap(data)	
# Remove dendrogram
# Manual color range
my_colors <- colorRampPalette(c("cyan", "darkgreen"))

# Heatmap with manual colors
heatmap(data, col = my_colors(100))   
