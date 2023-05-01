#include<pthread.h>
#include<semaphore.h>
#include<unistd.h>
#include<stdlib.h>
#include<sys/types.h>
#include<stdio.h>
sem_t mutex,wrt;
void *reader();
void *writer();
int rc=0;
int main()
{
	sem_init(&mutex,0,1);
	sem_init(&wrt,0,1);
	pthread_t rd,wt;
	pthread_create(&rd,NULL,reader,NULL);
	pthread_create(&wt,NULL,writer,NULL);
	pthread_join(rd,NULL);
	pthread_join(wt,NULL);
}

void *writer()
{
	sem_wait(&wrt);
	printf("writer is writing\n");
	sem_post(&wrt);
}

void *reader()
{
	sem_wait(&mutex);
	rc++;
	if(rc==1)
	{
		sem_wait(&wrt);
	}

	sem_post(&mutex);
	printf("reader is reading\n");

	sem_wait(&mutex);
	rc--;
	if(rc==0)
		sem_post(&wrt);
	sem_post(&mutex);

}
