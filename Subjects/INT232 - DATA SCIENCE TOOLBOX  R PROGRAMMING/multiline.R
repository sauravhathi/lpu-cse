# Define 2 vectors
cars <- c(1, 3, 6, 4, 9)
trucks <- c(2, 5, 4, 5, 12)
g_range <- range(0, cars, trucks)
plot(cars, type="o", col="blue", ylim=g_range, 
     axes=FALSE, ann=FALSE)
# Graph trucks with red dashed line and square points
lines(trucks, type="o", pch=22, lty=2, col="red")

# Create a title with a red, bold/italic font
title(main="Autos", col.main="red", font.main=4)

# Label the x and y axes with dark green text
title(xlab="Days", col.lab=rgb(0,0.5,0))
title(ylab="Total", col.lab=rgb(0,0.5,0))
legend(1, 2, legend=c("Equation 1", "Equation 2"),
       fill = c("blue","red")