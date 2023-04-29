#To install the whole tidyverse package type this:

install.packages("tidyverse")

# or can install with tidyr as well

install.packages("tidyr")
# load the tidyr package
library(tidyr)
library(dplyr)
library("magrittr")
# %>% is a special operator in R found in the magrittr and tidyr packages. 
# %>% lets you pass objects to functions elegantly, and helps you make your code more readable. The following two lines of code are equivalent.

# Without the %>% operator


a <- filter(mtcars, carb > 1)
b <- group_by(a, cyl)
c <- summarise(b, Avg_mpg = mean(mpg))
d <- arrange(c, desc(Avg_mpg))
print(d)


# With the %>% operator
mtcars %>%
  filter(carb > 1) %>%
  group_by(cyl) %>%
  summarise(Avg_mpg = mean(mpg)) %>%
  arrange(desc(Avg_mpg))
