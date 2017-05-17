var param = dummyObject.workWithThis[2];

var summed = 0;

for (var key in param) {
    summed += param[key];
};
console.log(summed);


