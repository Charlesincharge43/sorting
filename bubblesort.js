function bubbleSort(arr) {
  var Endingindex=arr.length-1;

  while(Endingindex>0){
    for(var i=0;i<Endingindex;i++){
      //compare arr[i] and arr[i+1]
      comparisonCounter+=1;
      if(arr[i]>arr[i+1]){
        console.log(arr[i]+' is bigger than '+arr[i+1]+'... swapping')

        var currentEl=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=currentEl;
        console.log(arr)

        swapCounter+=1;
      }
    }
    Endingindex-=1;
  }


  return arr;
}

bubbleSort([3,2,1])
