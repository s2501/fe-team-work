// виж решението на Марина

function sum(param){


  var total =  0;
    for(var i=0;i<param.length;i++)
      {
        if(isNaN(param[i])){
          continue;
             }
              total += Number(param[i]);
               }
             return total;
            }
console.log(sum([2,3,4]));