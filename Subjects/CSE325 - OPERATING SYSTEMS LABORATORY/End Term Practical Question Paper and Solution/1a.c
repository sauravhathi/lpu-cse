#include<unistd.h>
#include<stdio.h>
#include<stdlib.h>
#include<fcntl.h>

int main()
{
    int fd[2],n;
    char buffer[100];
    pid_t p;
    pipe(fd);
    p = fork();
    if(p>0)
    {
        close(fd[1]);
        n = read(fd[0], buffer, 100);
        write(1, buffer, n);
        
    }
    else
    {
        close(fd[0]);
        printf("Passing values to Parent\n");
        write(fd[1],"Hello\n",6);
        wait();
        
    }
}
