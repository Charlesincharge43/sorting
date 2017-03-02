function split(arr) {
  if(arr.length <= 1) return arr;
  var mid = Math.floor(arr.length / 2);

  return [arr.slice(0, mid), arr.slice(mid)];
}

function merge(arr1, arr2) {
  var mergedArr = [];
  while(arr1.length && arr2.length) {
    if(arr1[0] >= arr2[0]) {
      mergedArr.push(arr2.shift());
    } else {
      mergedArr.push(arr1.shift());
    }
  }
  console.log(arr2);
  if(arr1.length) {
    mergedArr = mergedArr.concat(arr1);
  }
  if(arr2.length) {
    console.log("here")
    mergedArr = mergedArr.concat(arr2);
  }
  return mergedArr;
}

// function recursiveSplit(arr){
//   for(var i=0;i<arr.length();i++){
//     return recursiveSplit(split(arr)[i])
// }

function mergeSort(arr){

  var splitArrays = split(arr);
  var arr1 = mergeSort(splitArrays[0]);
  var arr2 = mergeSort(splitArrays[1]);
  return merge(arr1,arr2)
}
