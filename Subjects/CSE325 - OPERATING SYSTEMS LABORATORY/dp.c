#include<semaphore.h>
#include<pthread.h>
#include<unistd.h>
#include<stdio.h>
int i =0;
sem_t chopstic [5];
void *phil()
{
 for (i=0;i<5;i++)
{
 sem_wait(&chopstic[i]);
 sem_wait(&chopstic[(i+1)%5]);
 printf("eating now\n");
 sem_post(&chopstic[i]);
 sem_post(&chopstic[(i+1)%5]);
 printf("thinking\n");
}
}
int main()
{
 for (i=0;i<5;i++){
 sem_init(&chopstic[i],1,1);
}
pthread_t p;
pthread_create(&p,NULL,phil,NULL);
pthread_join(p,NULL);
}
