#include<stdio.h>
#include<fcntl.h>
#include<unistd.h>

int main()
{
	int fd1,fd2,n1,n2;
	char buff1[100], buff2[100];
	n2 = read(0,buff2,100);
	fd2 = open("file2.txt",O_CREAT|O_RDWR,0777);
	write(fd2,buff2,n2);
	
	fd1 = open("file1.txt",O_CREAT|O_RDWR,0777);
	int off = lseek(fd2,-5,SEEK_END);
	read(fd2, buff1, 5);
	write(fd1,buff1,5);
	printf("Number of characters in file2 is : %d\n",n2);
	
}
