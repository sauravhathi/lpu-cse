#include<unistd.h>
#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<fcntl.h>
int main()
{
    FILE *rd;
    char buffer[50];
    sprintf(buffer, "Rajat");
    rd = popen("wc -c","w");
    fwrite(buffer, sizeof(char), strlen(buffer), rd);
    pclose(rd);
}
