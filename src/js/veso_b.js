var dummyObject = {
    workWithThis: [
        {
            dontReachMe: '1'
        },
        {
            dontReachMe: '2'
        },
        {
            reachMe: [
                2,
                3,
                4
            ]
        }
    ]
};
var param = dummyObject.workWithThis[2];




var summed = 0;



for (var key in param) {
    summed += param[key];
};
console.log(summed);


