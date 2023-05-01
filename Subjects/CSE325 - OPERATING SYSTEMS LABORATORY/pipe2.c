#include<unistd.h>
#include<stdio.h>
#include<stdlib.h>
#include<fcntl.h>
int main()
{
    int res,n;
	int res1;
	
	res1 = mkfifo("fifo1", 0777);
	printf("Pipe 1 created");
	
    res = open("fifo1", O_WRONLY);
    write(res, "written", 6);
    printf("Process %d finished : ", getpid());
}
