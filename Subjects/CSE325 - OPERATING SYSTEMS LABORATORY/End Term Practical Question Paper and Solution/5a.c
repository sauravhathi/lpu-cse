#include<stdio.h>
#include<sys/types.h>
#include<unistd.h>

int main()
{
	pid_t p1,p2,p3,p4;
	p1 = fork();
	if(p1==0)
	{
		p3 = fork();
		if(p3>0)
		{
			print("ID of p1 : %d",getpid());
			print("ID of parent of p1 : %d",getppid());
		}
	}	
}
