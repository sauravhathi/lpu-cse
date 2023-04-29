#*************************************************************#
#*******    BASIC REGULAR EXPRESSIONS IN R         ***********#
#*************************************************************#

#****   grep--->returns the index or value of the matched string                    ***#
#****   grepl--->	returns the Boolean value (True or False) of the matched string   ***#
#**     regexpr--->	return the index of the first match                             ***#
#****   gregexpr--->	returns the index of all matches                             ****#
#***    regexec --->	is a hybrid of regexpr and gregexpr                           ***#
#****   regmatches --->	returns the matched string at a specified index....       *****#
#****   It is used in conjunction with regexpr and gregexpr.                       ****#

#***************      METACHARACTERS- SPECIAL CHARACTERS LIKE !@#$%&()      ************#
dt <- c("RPROGRAMMING%\\","percent") 
grep(pattern = "RPROGRAMMING\\%\\\\",x = dt,value = T)



#detect all strings 
dt <- c("may?","money$","and&") 
grep(pattern = "[a-z][\\?-\\$-\\&]",x = dt,value = T) 

gsub(pattern = "[\\?-\\$-\\&]",replacement = "",x = dt) 

gsub(pattern = "\\\\",replacement = "-",x = "Barcelona\\Spain") 

#*************          QUANTIFIERS      *********************#
number <- "10001000000000100" 

#greedy 
regmatches(number, gregexpr(pattern = "1.*1",text = number)) 

#non greedy 
regmatches(number, gregexpr(pattern = "1.?1",text = number)) 

names <- c("anna","crissy","puerto","cristian","garcia","steven","alex","rudy") 

#doesn't matter if e is a match 
grep(pattern = "e*",x = names,value = T)


#must match t one or more times 
grep(pattern = "t+",x = names,value = T)


#must match n two times
grep(pattern = "n{2}",x = names,value = T)

# ********            SEQUENCES           **********

string <- "I have been to Paris 20 times" 

#match a digit 
gsub(pattern = "\\d+",replacement = "_",x = string) 
regmatches(string,regexpr(pattern = "\\d+",text = string)) 

#match a non-digit 
gsub(pattern = "\\D+",replacement = "_",x = string) 
regmatches(string,regexpr(pattern = "\\D+",text = string)) 

#match a space - returns positions 
gregexpr(pattern = "\\s+",text = string) 

#match a non space 
gsub(pattern = "\\S+",replacement = "app",x = string) 

#match a word character 
gsub(pattern = "\\w",replacement = "k",x = string) 

#match a non-word character 
gsub(pattern = "\\W",replacement = "k",x = string)  

# *********     CHARACTER CLASSES     *********
string <- "20 people got killed in the mob attack. 14 got severely injured" 

#extract numbers 
regmatches(x = string,gregexpr("[0-9]+",text = string)) 

#extract without digits 
regmatches(x = string,gregexpr("[^0-9]+",text = string)) 

# ***************    POSIX CHARACTER CLASSES      *******************

string <- c("I sleep 16 hours\n, a day","I sleep 8 hours\n a day.","You sleep how many\t hours ?")

#get digits 
unlist(regmatches(string,gregexpr("[[:digit:]]+",text = string))) 

#remove punctuations 
gsub(pattern = "[[:punct:]]+",replacement = "",x = string) 

#remove spaces 
gsub(pattern = "[[:blank:]]",replacement = "-",x = string) 

#remove control characters 
gsub(pattern = "[[:cntrl:]]+",replacement = " ",x = string) 

#remove non graphical characters 
gsub(pattern = "[^[:graph:]]+",replacement = "",x = string) 
