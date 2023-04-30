// The Map Interface

// let map = new Map();
// map.set("key1", "value1");
// map.set("key2", "value2");
// map.set("key3", "value3");
// console.log(map);
// map.delete("key3");
// console.log(map);
// console.log(map.has("key2"));
// map.clear();
// console.log(map);

// let values = map.values();

// console.log(values);
// values = [...values];
// console.log(values);

// let entries = map.entries();
// console.log([...entries]);

// Exercise:
// Check if two strings are anagrams are not using Map()
// Anagrams are words that can be written using the same letters, but in a different order.
// For example, the following words are anagrams:
// "abcd" and "dcba", "god" and "dog".

let areAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let map1 = new Map();
  for (let char of str1) {
    if (map1.has(char)) {
      map1.set(char, map1.get(char) + 1);
    } else {
      map1.set(char, 1);
    }
  }
  let map2 = new Map();
  for (let char of str2) {
    if (map2.has(char)) {
      map2.set(char, map2.get(char) + 1);
    } else {
      map2.set(char, 1);
    }
  }
  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    }
  }
  return true;
};

console.log(areAnagrams("abcd", "dcba"));

// 2. Sets in JS

let set = new Set();
set.add("value1");
set.add("value2");
set.add("value3");
console.log(set);
set.delete("value2");
console.log(set);
console.log(set.has("value1"));
set.clear();
console.log(set);


// Exercise:
// Given an array, there are 2 elements which are repeating. Find the two repeating elements in the array.
// Eg: [1,2,3,3,4,5,5] -> [3, 5]
// Use Set() to solve the problem.