#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>
#include<string.h>
#include<sys/shm.h>
#include<sys/types.h>
int main()
{
    int i;
    void *shared_mem;
    char buff[100];
    int shmid;
    shmid = shmget((key_t)2345, 100,0777|IPC_CREAT);//create shared memory segment
    printf("Key of Shared memory is : %d\n",shmid);
    shared_mem = shmat(shmid, NULL, 0);//process attach to shared memory 0 is flag
    printf("Process attatch at %X\n", (int)shared_mem);
    printf("Enter Some Data to write : ");
    read(0,buff,100);
    strcpy(shared_mem, buff);//data written to shared memory
    printf("You Entered : %s\n", shared_mem);

}
