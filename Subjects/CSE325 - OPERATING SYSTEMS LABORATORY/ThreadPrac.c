#include<unistd.h>
#include<stdio.h>
#include<pthread.h>
#include<stdlib.h>
void *fibo();
void *fact();
int main()
{
pthread_t t1,t2;
pthread_create(&t1,NULL,&fibo,NULL);
pthread_create(&t2,NULL,&fact,NULL);
pthread_join(t1,NULL);
pthread_join(t2,NULL);
}

void *fact()
{
int i,n,f=1;
printf("Factorial of : ");
scanf("%d",&n);
for(i=1;i<=n;i++)
{
f=f*i;
}
printf("\nFactorial of %d is : %d\n",n,f);
}

void *fibo()
{
sleep(3);
int ft=0,st=1,nt,i,n;
printf("Enter no of terms");
scanf("%d",&n);
printf("Fibonacci Series: ");
for(i=0;i<=n;i++)
{
printf("%d",ft);
nt=ft+st;
ft=st;
st=nt;
}
}
