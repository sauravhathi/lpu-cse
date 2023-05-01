#include<unistd.h>
#include<stdio.h>
#include<fcntl.h>
#include<stdlib.h>
 
int main()
{

    int t1,t2,p,i,n,ab;
    p=getpid();                
    printf("enter the number of levels\n");
	fflush(stdout);
    scanf("%d",&n);                
    printf("root %d\n",p);
	fflush(stdout);
    for(i=1;i<n;i++)
    {
        t1=fork();
            
        if(t1!=0)
            t2=fork();        
        if(t1!=0 && t2!=0)        
            break;            
        printf("child pid %d   parent pid %d\n",getpid(),getppid());fflush(stdout);
    }   
        waitpid(t1,&ab,0);
        waitpid(t2,&ab,0);
    return 0;
}