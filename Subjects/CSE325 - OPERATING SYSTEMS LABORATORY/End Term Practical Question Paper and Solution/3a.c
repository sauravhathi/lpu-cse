#include<pthread.h>
#include<stdio.h>
#include<unistd.h>
#include<stdlib.h>
int global[2];

void *sum(void *args)
{
    int *args_array;
    args_array = args;
    int n1,n2,sum=0;
    n1 = args_array[0];
    n2 = args_array[1];
    sum = n1+n2;
    pthread_exit(sum);
}

void *sub(void *args)
{
    int *args_array;
    args_array = args;
    int n1,n2,sub=0;
    n1 = args_array[0];
    n2 = args_array[1];
    sub = n1-n2;
    pthread_exit(sub);
}

int main()
{
	pthread_t t1,t2;
	printf("Enter Value of n1 : ");
	scanf("%d",&global[0]);
	printf("\nEnter Value of n2 : ");
	scanf("%d",&global[1]);
	void *result1, *result2;
	
	pthread_create(&t1,NULL,sum,global);
	pthread_create(&t2,NULL,sub,global);
	pthread_join(t1,&result1);
	pthread_join(t2,&result2);
	int n1= result1;
	int n2= result2;
	printf("\n\n%d", n1*n2);
}
