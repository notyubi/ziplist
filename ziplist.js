const fakelist1 = ['a', 'b', 'c', 'd'];
const fakelist2 = [1, 2, 3, 4];

function ziplist(list1, list2) {
  const finalList = [];
  for (let i = 0; i < list1.length; i++) {
    finalList.push(list1[i], list2[i]);
  }
  return finalList;
}
console.log(ziplist(fakelist1, fakelist2));

function ziplistUnder(l1, l2) {
  return _.flatten(_.zip(l1, l2));
}

console.log(ziplistUnder(fakelist1, fakelist2));
