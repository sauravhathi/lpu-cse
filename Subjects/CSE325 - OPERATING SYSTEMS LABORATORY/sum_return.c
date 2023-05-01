#include<stdio.h>
#include<pthread.h>
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

int main() 
{
    printf("First number: ");
    scanf("%d",&global[0]);

    printf("Second number: ");
    scanf("%d",&global[1]);
    void *result;
    pthread_t tid_sum;
    pthread_create(&tid_sum,NULL,sum,global);
    pthread_join(tid_sum, &result);
    printf("%d", result);

    return 0;
}
