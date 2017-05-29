function marina(){
	var paramOne;
	for (var i = 0; i < dummyObject.workWithThis[2].reachMe.length ; i++){

        if(paramOne) {

		      paramOne += dummyObject.workWithThis[2].reachMe[i];
        } else {

            paramOne = dummyObject.workWithThis[2].reachMe[i];
        }
    }

	console.log(paramOne);
}

marina();

function fnIfElse(param){
	if(param > 5) {
		console.log('po-golqmo ot 5');
	}else{
		console.log('po-malko ili ravno ot 5');
	}
}