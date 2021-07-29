//helpers

function isEven(number){
    return number % 2 ===0;
    

}

function calcAritmeticMean(list){
    // sumList = 0
    // for( let i = 0; i <list.length ; i++){
    //     sumList += list[i]
    // } 
    
    sumList = list.reduce(
        function(acumValue = 0,newElement ){ //by defaults starts in cero
            return acumValue+newElement;
        }
    )
    meanList = sumList/list.length;
    return meanList;
}

function  calcMedian(list){
    if(isEven(list.length)){
    //we need 2 elements median and mean.
    const listMid = parseInt( list.length / 2);
    const element1 = list[listMid-1];
    const element2 = list[listMid ]

    const meanElement1And2= calcAritmeticMean([element1,element2]);

    median = meanElement1And2;

    }else{
        //The median is in the middle of the list
        median = list[listMid]
    }

    return median;
}

// General median

const salariesColombia = colombia.map(
    function(person){
        return person.salary;
    }
);

const salariesColSorted = salariesColombia.sort(
    function(salaryA,salaryB){
        return salaryA-salaryB;

    }
);





generalColMedian = calcMedian(salariesColSorted);

//top 10% median

const spliceStart = salariesColSorted.length*(100-10)/100;
const spliceCount = salariesColSorted.length - spliceStart;
const top10ColSalaries = salariesColSorted.splice(spliceStart,spliceCount);
top10ColMedian = calcMedian(top10ColSalaries);
console.log({generalColMedian,top10ColMedian})