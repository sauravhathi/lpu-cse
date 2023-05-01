#include <stdio.h>
#include <pthread.h>

int shared = 1;
int l;

void *fun1()
{
  int x;
  pthread_mutex_lock(&l);
  x = shared;
  x++;
  sleep(1);
  shared = x;
  printf("%d\n",shared);
  pthread_mutex_unlock(&l);
}

void *fun2()
{
  int x;
  pthread_mutex_lock(&l);
  x = shared;
  x--;
  sleep(1);
  shared = x;
  printf("%d\n",shared);
  pthread_mutex_unlock(&l);
}

int main()
{
  pthread_t thread1,thread2;
  pthread_mutex_init(&l,NULL);
  pthread_create(&thread1, NULL, fun1, NULL);
  pthread_create(&thread2, NULL, fun2, NULL);
  pthread_join(thread1,NULL);
  pthread_join(thread2,NULL);
}


