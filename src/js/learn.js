console.log('hello world');

// function declaration
function iAmFunction(){
    console.log(paramString);
}

var iAmFunctionExpression = function(){
    console.log(paramString);
};

iAmFunction();
iAmFunctionExpression();

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