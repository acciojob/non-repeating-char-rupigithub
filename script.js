function firstNonRepeatedChar(str) {
 // Write your code here
	let l = str.length;
	for(let i=0 i<l-1 i++){
		if(str.charAt(i) != str.charAt(i+1)){
				return i;
			}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
