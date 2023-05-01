//Program to create a thread. The thread prints numbers from zero to n, where value of n is passed from the main process to the thread. The main process also waits for the thread to finish first and then prints from 20-24.

#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <pthread.h>
#include <string.h>
void *thread_function(void *arg);
int i,n,j;
int main()
{
	int *m="5";
	pthread_t a_thread;  //thread declaration
	void *result;
	pthread_create(&a_thread, NULL, thread_function, m); //thread is created
	pthread_join(a_thread, &result); //process waits for thread to finish . Comment this line to see the difference
	printf("Thread joined\n");
	for(j=20;j<25;j++)
	{
		printf("%d\n",j);
		sleep(1);
	}
	printf("thread returned %s\n",result);
}

void *thread_function(void *arg) 
{       // the work to be done by the thread is defined in this function
	int sum=0;
	n=atoi(arg);
	for(i=0;i<n;i++)
	{
	printf("%d\n",i);
	sleep(1);
	}
	pthread_exit("Done"); // Thread returns "Done"
}

