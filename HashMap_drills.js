const HashMap = require('./HashMap');


function main() {
  let lotr = new HashMap;
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legalos');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');
  

  // console.log(lotr);

  // console.log(lotr.get('Maiar'));
  // console.log(lotr.get('Hobbit'));

  // There is a discrepancy when compared to what should have been inputted. The number 
  //of values of Maiar and Hobbit should be 2, but this is only returning the last 
  //instance that was added, because the value was overwritten.

  //Capacity = 24
  //The hash map got 50% full, and then was resized to 3 times its length (8 * 3)
  //but 50% of that was never reached, so there was not another resize.
}

main();

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

// WhatDoesThisDo();
//What does this output?
//It outputs 20, 10

//3.1
// [0] 22, [1] 55, [2], [3], [4] 4, [5] 15, [6] 28, [7] 17, [8] 88, [9] 31, [10] 10
//3.2
// [0], [1] 28 - 19 - 10, [2] 20, [3] 19, [4], [5] 5, [6] 15 - 33, [7], [8] 17

//4 Remove Duplicates

function removeDuplicates(string) {
  const hashDuplicates = new Map();
  let newString = '';

  string.split('').forEach(letter => {
    if (!hashDuplicates.has(letter)) {
      hashDuplicates.set(letter, '');
      newString += letter;
    }
  });
  // console.log(newString);
}

removeDuplicates('google all that you think can think of');

function palindrome(string) {
  //a palindrome has either 1 or an even # of occurences of a letter
  let strObj = {};
  let strsplit = string.split('');
  strsplit.forEach(char => {
    if(char in strObj) {
      strObj[char] = strObj[char] + 1;
    } else {
      strObj[char] = 1;
    }
  });
  let count = 0;
  for(const [key, value] of Object.entries(strObj)) {
    if(value === 1) {
      count ++;
    }
    if (value % 2 === 1 && value !==1) {
      return false;
    }
  }
  if(count > 1) {
    return false;
  }
  return true;
}

// console.log(palindrome('acecarr')); //T
// console.log(palindrome('north')); //F

//6. Anagram grouping
//Given ['east','cars', 'acre', 'arcs', 'teas', 'eats', 'race']
//will get [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
function anagramGrouping(arr) {
  let anagramMap = new Map();
  for (let i = 0; i <arr.length; i++) {
    let splitArr = arr[i].split('').sort().join('');
    if(!anagramMap.has(splitArr)) {
      anagramMap.set(splitArr, [arr[i]]);
    } else {
      anagramMap.set(anagramMap.get(splitArr), anagramMap.get(splitArr).push(arr[i]));
    }
  }

  let ans = [];
  Array.from(anagramMap.values()).forEach(e => {
    let eType = typeof(e);
    if(eType === 'object') {
      ans.push(e);
    }
  });
  return ans;
}

console.log(anagramGrouping(['east','cars', 'acre', 'arcs', 'teas', 'eats', 'race']));