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
    off = lseek(n,5,SEEK_SET); //pointer will be at 5th location from the beginning
    printf("\nCurrent position is %d\n",off); // to print the position of the pointer
    read(n,buffer,4);
    write(1,buffer,4);
}
