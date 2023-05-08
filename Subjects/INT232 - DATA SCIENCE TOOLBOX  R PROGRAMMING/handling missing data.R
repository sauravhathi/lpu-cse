#, handling missing data
#is.na() Function for Finding Missing values
#A logical vector is returned by this function that indicates all #the NA values present.
x<- c(NA, 3, 4, NA, NA, NA)
is.na(x)
#is.nan() Function for Finding Missing values: 
x<- c(NA, 3, 4, NA, NA, 0 / 0, 0 / 0)
is.nan(x)
#Removing NA or NaN values
x <- c(1, 2, NA, 3, NA, 4)
d <- is.na(x)
x[!d]
x <- c(1, 2, 0 / 0, 3, NA, 4, 0 / 0)
x
x[! is.na(x)]

# Creating a data frame
df <- data.frame (c1 = 1:8,
                  c2 = factor (c("B", "A", "B", "C",
                                 "A", "C", "B", "A")))
df

# Filling some NA in data frame
df[4, 1] <- df[6, 2] <- NA
df
na.omit(df)

# Printing all the levels(NA is not considered one)
levels(df$c2)

# fails if NA is encountered
#na.fail- halts and does not proceed if NA is encountered
na.fail (df)

# excludes every row containing even one NA
na.exclude (df)

