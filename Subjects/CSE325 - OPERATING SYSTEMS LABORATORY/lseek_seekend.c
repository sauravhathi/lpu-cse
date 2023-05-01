#include<stdio.h>
#include<unistd.h>
#include<sys/types.h>
#include<fcntl.h>
#include<fcntl.h>

int main()
{
	int n,off;
    char buffer[10];
    n=open("file1.txt",O_RDWR);
    read(n,buffer,5); //reads first 5 characters
    write(1,buffer,5);
    off=lseek(n,-5,SEEK_END); //pointer is placed at 5th position from the END
    printf("\nCurrent position is %d\n",off); //Note the value for 'off' carefully
    read(n,buffer,5);
    write(1,buffer,5);
}
