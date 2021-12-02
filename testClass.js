Class TestClass {

	function reverse(number=123456789) {
	 	var reversed = 0;

	 	while (number != 0) {
	  		reversed *= 10;
	  		reversed += number % 10;
	  		number -= number % 10;
	  		number /= 10;
	 	}

	 	return reversed;
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
