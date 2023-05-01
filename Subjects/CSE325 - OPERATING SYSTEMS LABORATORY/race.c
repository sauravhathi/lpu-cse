/* Program to show the race condition.
Program create two threads: one to increment the value of a shared variable and second to decrement thev value of shared variable. Both the threads are executed, so the final value of shared variable should be same as its initial value. But due to race condition it would not be same. */

#include<pthread.h>
#include<stdio.h>
#include<stdlib.h>

int shared = 1;

void *fun1()
{
    int x;
    x=shared;//thread one reads value of shared variable
    x++;  //thread one increments its value
    sleep(1);  //thread one is preempted by thread 2
    shared=x; //thread one updates the value of shared variable
}

void *fun2()
{
    int y;
    y=shared;//thread two reads value of shared variable
    y--;  //thread two increments its value
    sleep(1); //thread two is preempted by thread 1
    shared=y; //thread one updates the value of shared variable
}

int main()
{
	pthread_t thread1, thread2;
	
	pthread_create(&thread2, NULL, fun2, NULL);
	pthread_create(&thread1, NULL, fun1, NULL);
	pthread_join(thread1, NULL);
	pthread_join(thread2, NULL);
	printf("Final value of shared is %d\n",shared); //prints the last updated value of shared variable
}



/* the final value of shared variable should have been 1 but it will be either 2 or 0 depending upon which thread executes first. This happened because the two processes were not synchronized. When one thread was modifying the value of shared variable the other thread must not have read its value for modification. This can be achieved using locks or semaphores */
  
