const list1 = [
    100,
    200,
    300,
    500,
    4000000,
    2
];
list1.sort()
function calcAritmeticMean(list){
    // sumList = 0
    // for( let i = 0; i <list.length ; i++){
    //     sumList += list[i]
    // } 
    
    sumList = list.reduce(
        function(acumValue = 0,newElement ){ //by defaults starts in cero
            return acumValue+newElement
        }
    )
    meanList = sumList/list.length
    return meanList
}

const list1Mid = parseInt( list1.length / 2);

function isEven(number){
    if(number % 2 ===0){
       return true; 
    }else{
        return false;
    }

}

if(isEven(list1.length)){
//we need 2 elements median and mean.

const element1 = list1[list1Mid-1];
const element2 = list1[list1Mid ]

const meanElement1And2= calcAritmeticMean([element1,element2]);

median = meanElement1And2;

}else{
    //The median is in the middle of the list
    median = list1[list1Mid]
}