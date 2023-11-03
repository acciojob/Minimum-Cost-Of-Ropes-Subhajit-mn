function calculateMinCost() {
  //your code here
	let arr1 = [];
  for(let i=0; i<arr.length; i++){
	  arr1.push(arr[i]);
  }
  arr1.sort(function (a, b) {
  	return a-b;
  });
	let res = 0;
  while(arr1.length > 1){
	  let first = arr1.shift();
	  let second = arr1.shift();
	  res += first + second;
	  arr1.push(first + second);
	  arr1.sort(function(a, b){
		  return a-b;
	  });
  }
	return res;
}  
