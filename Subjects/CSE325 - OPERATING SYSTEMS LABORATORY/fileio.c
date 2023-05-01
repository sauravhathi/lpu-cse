#include<unistd.h>
#include<sys/types.h>
#include<fcntl.h>
int main()
{
	int n,fd;
	char buff[100];
	n = read(0,buff,100);
	fd = open("file1.txt",O_CREAT|O_RDWR,0777);
	write(fd,buff,n);
}
