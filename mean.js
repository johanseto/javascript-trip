const list1 = [
    100,
    200,
    300,
    500
];

let sumList1 = 0;

for( let i=0; i <list1.length ; i++){
    sumList1 += list1[i]
}

const meanList1 = list1 / list1.length


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