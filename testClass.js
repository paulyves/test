Class TestClass {

	function reverse(number) {
	 	let digit, result = 0

		while( number ){
			digit = number % 10;  
			result = (result * 10) + digit;
			number = number/10|0; 
		}  
	  
		return result
	}

	function fizzBuzz(limit=10) {

		for(var i=1;i<=limit;i++){
		   console.log(((['Fizz'][i%3] || '') + (['Buzz'][i%5] || '')) || i)
		} 
		
		return;
	}
	function swap (number, anotherNumber) {
	
		number = number + anotherNumber;
		anotherNumber = number - anotherNumber;
		number = number - anotherNumber;
		
		return { number, anotherNumber };
	  } 
}
