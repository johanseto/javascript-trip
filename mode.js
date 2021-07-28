const list1 = [
    100,
    200,
    300,
    500,
    4000000,
    2,1,2,2,5,2,2,,3,3,1,2,3
];

const list1Count ={}
list1.map(
    function(element){
        if(list1Count[element]){
            list1Count[element] +=1;
        }else{
            list1Count[element] = 1;
        }

    }
)

const list1CountArray = Object.entries(list1Count).sort(
    function(elementA,elementB){
       return  elementA[1] - elementB[1];

    }
)

const moda = list1CountArray[list1CountArray.length - 1]