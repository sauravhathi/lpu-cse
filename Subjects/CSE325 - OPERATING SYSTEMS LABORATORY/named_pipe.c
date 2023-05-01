#include<unistd.h>
#include<stdio.h>
#include<stdlib.h>
#include<fcntl.h>
int main()
{
    int res,n;
    char buffer[100];
    res = open("fifo1", O_RDONLY);
    n = read(res, buffer, 100);

    printf("Total bytes read = %d\n", n);
    printf("%s was sent to pipe", buffer);
    printf("Process %d is finished", getpid());
}
