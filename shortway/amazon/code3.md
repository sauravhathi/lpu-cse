Amazon stores its data on different servers at different locations. From time to time, due to several factors, Amazon needs to move its data from one location to another. This challenge involved keeping track of the locations of Amazon's data and report them at the end of the year.


At the start of the year, Amazon's data was located at n different locations. Over the course of the year, Amazon's data was moved from one server to another m times. Precisely, in the operation, the data was moved from movedFrom(il to movedTo[] Find the locations of the data after all m moving operations. Return the locations in ascending order.

```java
int n, m;
int findDataLocations(int locations[], int movedFrom[], int movedTo[])
{

   unordered_map<int, int> mp;
   for (int i = 0; i < m; i++)
   {

      mp[movedFrom[i]] = movedTo[i];
   }

   for (int i = 0; i < n; i++)
   {

      if (mp.find(locations[i]) != mp.end() and mp[locations[i]] != -1)
      {

         int tar = mp[locations[i]];

         mp[locations[i]] = -1;

         while (mp.find(tar) != mp.end() and mp[tar] != -1)
         {
            tar = mp[tar];

            mp[tar] = -1;
         }

         locations[i] = tar;
      }
   }

   sort(locations, locations + n);
   for (int i = 0; i < n; i++)
   {
      return locations[i];
   }
}
```
