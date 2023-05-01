#include<stdio.h>
#include<stdlib.h>
int main()
{
    int f[50], i,st,j,len,c,k;
    for(i=0;i<50;i++)
    {
        f[i]=0;
    }
    X:
        printf("Enter Starting Block and Length of File : ");
        scanf("%d",&st);
        scanf("%d",&len);
        for(j=st;j<(st+len);j++)
        {
            if(f[j]==0)
            {
                f[j]=1;
                printf("\n%d --> %d", j, f[j]);
            }
            else
            {
                printf("\nBlock Already Filled");
                break;
            }
            //printf("\n\n%d",j);
            if(j==(st+len)-1)
            {
                printf("\nFile Alloted to Disk");
                printf("\nWant to Enter More Files (1/0) : ");
                scanf("%d",&c);
                if(c==1)
                {
                    goto X;
                }
                else
                {
                    exit(0);
                }
            }
        }            
}
