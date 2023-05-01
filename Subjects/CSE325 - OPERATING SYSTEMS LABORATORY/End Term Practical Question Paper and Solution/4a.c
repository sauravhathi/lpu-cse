#include<stdio.h>
#include<unistd.h>
#include<fcntl.h>
int main()
{
	int fd,n;
	fd = open("file2.txt",O_RDONLY);
	char buff[100];
	int k = lseek(fd,10,SEEK_SET);
	n = read(fd,buff,15);
	write(1,buff,n);
}
