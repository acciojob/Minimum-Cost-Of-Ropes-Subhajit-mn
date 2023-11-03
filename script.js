function calculateMinCost() {
	//your code here
	let str = document.getElementById("rope-lengths");
	ler arr1 = str.split(",");
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
	let output = document.getElementById("result");
	output.innerText = res;
	return res;
}  

