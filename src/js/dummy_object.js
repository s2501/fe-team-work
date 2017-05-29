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

console.log(dummyObject.workWithThis[3].reachMe)