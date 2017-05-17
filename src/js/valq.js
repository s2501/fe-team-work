function sumDummyObject(myArray) {

    var sum = 0;
    for (i=0;  i < myArray.workWithThis[2].reachMe.length; i++) {
        sum = sum + myArray.workWithThis[2].reachMe[i];
    }
    console.log(sum);
}

sumDummyObject(dummyObject);