console.log('hello world');

// function declaration
function iAmFunction(){
    console.log(paramString);
}

var iAmFunctionExpression = function(){
    console.log(paramString);
};

// iAmFunction();
// iAmFunctionExpression();

// global variable
var paramString = "i am another string";

// global object
var paramObject = {
    paramString: 'I am string in an object',
    functionInAnObject: function(param){
        console.log(param);
    },
    exploringThis: function() {
        this.functionInAnObject(this.paramString);
    },
    objectInAnObject: {
        functionInSecondLevelObject: function(){
            var objectInFunction = {
                consoleLog: 'i am console log ley'
            };

            return objectInFunction;
        }
    }
};

// // call function
// iAmFunction('5');

// // call function

// // // call functio in an object
// paramObject.functionInAnObject(paramObject.paramString);

// paramObject.exploringThis();

var newObject = {
    newKey: '123',
    newKey2: 123,
    anotherProperty: [
        {
            oneMoreForTheTeam: '1'
        },
        {
            oneMoreFortheTeam: '2'
        },
        {
            oneMoreFortheTeam: [
                'value1',
                'value2',
                'value3'
            ]
        }
    ]
};

var newArray = [
    'banana',
    'apple',
    'strawberries',
    'gojiberry',
    [1, 2, 3 , 4]
];

function myFirstLoop(param) {

    //няма да го ползваме, добавено само като пример за сравнение на избор посредстром променлива и стринг
    var navBarSelector = '.navbar-nav';
    var containerSelectedByParam = document.querySelector(navBarSelector); // променлива

    var containerSelectedByString  = document.querySelector('.navbar-nav'); // string

    containerSelectedByString.innerHTML = '';

    for (var i = 0; i < param.length; i ++) {

        if (!Array.isArray(param[i])) {
            containerSelectedByString.innerHTML += param[i] + '  ';
        }
    }
}

// myFirstLoop(newArray);

// var compareParamOne = 1;
// var comparaParamTwo = '1';
// var compareParamThree = 3;

// // никога не правете това
// // if-ове в global scope-а са лоша практика
// if (compareParamOne == comparaParamTwo && compareParamOne == 1) {

//     console.log('първи случай');
// } else if (compareParamOne >= comparaParamTwo || compareParamOne === comparaParamTwo) {

//     console.log('втори случай');
// } else {

//     console.log('трети случай');
// }




