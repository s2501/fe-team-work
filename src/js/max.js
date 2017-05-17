function sumThisShit(sum) {

		var totalSum = sum.reduce(function(a, b) {
			return a + b;
		}, 0);
     	console.log(totalSum);
}

sumThisShit(dummyObject.workWithThis[2].reachMe);

