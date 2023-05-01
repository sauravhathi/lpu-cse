#include<stdio.h>
#include<fcntl.h>
#include<unistd.h>
int main()
{
	char buff[100],buff2[100];

	int fd = open("file2.txt",O_RDWR,0777);
	int n = read(fd,buff,100);
	
	for(int i=n;i>=0;i--)
	{
		buff2[n-i] = buff[i];		
	}
	write(1,buff2,n+1);
}
