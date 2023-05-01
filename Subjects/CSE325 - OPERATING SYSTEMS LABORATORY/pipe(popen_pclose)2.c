#include<unistd.h>
#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<fcntl.h>
int main()
{
    FILE *rd;
    char buffer[50];
    rd = popen("ls","w");
    fread(buffer, 1, 50, rd);
    printf("%s\n",buffer);
    pclose(rd);
}
