install.packages(dplyr)

data=read.csv(file.choose())
View(data)
# Finding rows with NA value
data %>% filter(is.na(age))

# Finding rows with no NA value
data %>% filter(! is.na(age))

# Arranging name according to the age
data.name<- arrange(data, age)
View(data.name)
# startswith() function to print only ht data
View(select(data, starts_with("rooms")))

# -startswith() function to print
# everything except ht data
View(select(data, -starts_with("rooms")))

# Printing column 1 to 2
View(select(data, 1: 2))

# Printing data of column
# heading containing 'a'
View(select(data, contains("a")))

# Printing data of column
# heading which matches 'na'
select(data, matches("ro"))
# Calculating a variable x3 which is sum of height
# and age printing with ht and age
View(mutate(data, x3 = price / rooms))

# Calculating a variable x3 which is sum of height
# and age printing only x3
View(transmute(data, x3 = price / rooms))


# Calculating mean of age
summarise(data, mean = mean(price))

# Calculating min of age
summarise(data, med = min(price))

# Calculating max of age
summarise(data, med = max(price))

# Calculating median of age
summarise(data, med = median(price))


# Printing three rows
sample_n(data, 3)

# Printing 50 % of the rows
sample_frac(data, 0.01)

