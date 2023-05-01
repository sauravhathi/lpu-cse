#include<stdio.h>
#include<unistd.h>
#include<semaphore.h>
#include<pthread.h>
#include<sys/types.h>

sem_t empty,full,mutex;
char buff[10];

void *producer()
{
sem_wait(&empty);
sem_wait(&mutex);
printf("producer is producing\n");
scanf("%s", &buff);
sem_post(&mutex);
sem_post(&full);
}
void *consumer()
{
 sem_wait(&full);
 sem_wait(&mutex);
 printf("consumer is consuming\n");
 printf("%s", buff);
 sem_post(&mutex);
 sem_post(&empty);
}
int main()
{
 sem_init(&full,0,0);
 sem_init(&empty,0,1);
 sem_init(&mutex,0,1);
 pthread_t x,y;
 pthread_create(&x,NULL,producer,NULL);
 pthread_create(&y,NULL,consumer,NULL);
 pthread_join(x,NULL);
 pthread_join(y,NULL);
 
}
