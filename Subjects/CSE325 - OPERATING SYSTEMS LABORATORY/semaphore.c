#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
void inc();
void dec();
int shared = 1;
sem_t s;
int main()
{
  sem_init(&s,0,1); //1st arg: address of semaphore var, 2nd arg: no. of process sharing, 3rd arg: initialisation
  pthread_t thread1,thread2;
  pthread_create(&thread1, NULL, inc, NULL);
  pthread_create(&thread2, NULL, dec, NULL);
  pthread_join(thread1,NULL);
  pthread_join(thread2,NULL);
}

void inc()
{
  int x;
  sem_wait(&s);
  x=shared;
  x++;
  sleep(1);
  shared = x;
  sem_post(&s);
  printf("%d\n",shared );
}
void dec()
{
  int x;
  sem_wait(&s);
  x=shared;
  x--;
  sleep(1);
  shared = x;
  sem_post(&s);
  printf("%d\n",shared );
}
