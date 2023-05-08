# create a date
x<-as.Date("2017-01-30")
# specify the format
y<-as.Date("2017-01-30", Formats="%d-%m-%Y")
y

# take a difference
Sys.Date() - as.Date("2020-01-03")

# alternate method with specified units
difftime(Sys.Date(), as.Date("2022-01-30"), units = "hours")
dts=x
weekdays(dts)
months(dts)

quarters(dts)
# create character
character = "2021-4-4"

# convert character with year month and date format
print(strptime(character, "%Y-%m-%d"))
# create character
character = "2021-4-4 02:23:34"

# convert character with year month date
# and Hours minutes and seconds format
print(strptime(character, "%Y-%m-%d %H:%M:%S"))
print(strptime(character, "%Y-%m-%d %H:%M:%S",tz="UTC"))


