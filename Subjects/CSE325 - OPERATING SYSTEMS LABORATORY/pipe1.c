#include<unistd.h>
#include<stdio.h>
#include<stdlib.h>
int main()
{
	int res;
	res = mkfifo("fifo1", 0777);
	printf("Pipe 1 created");
}
