console.group('cuadrado')

console.log("hello ma nigga")
const squareSide = 5;
console.log('los cuadrados miden :' + squareSide)

function squarePerimeter(squareSide) {
    return squareSide * 4;
}


console.log('The perimeter of the square is ' + squarePerimeter)

function squareArea(squareSide) {
    return squareSide ** 2;
}


console.log('The square area is ' + squareArea)

console.groupEnd()
    //Codigo Triangle

function calcSquarePerimeter() {
    const input = document.getElementById("inputSquare");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert(perimeter)
}

function calcSquareArea() {
    const input = document.getElementById("inputSquare");
    const value = input.value;
    const area = squareArea(value)
    alert(area)
}

function trianglePerimeter(sideA, sideB, sideC) {
    return sideA + sideB + sideC;
}

function triangleArea(sideA, sideB, sideC) {
    height = Math.sqrt(sideC ** 2 - (sideA / 2) ** 2);
    area = sideB * height / 2;
    return area
}

function calcTriangleArea() {
    const input1 = document.getElementById("inputTriangle1");
    const sideA = input1.value;
    const input2 = document.getElementById("inputTriangle2");
    const sideB = input2.value;
    const input3 = document.getElementById("inputTriangle3");
    const sideC = input3.value;
    const area = triangleArea(sideA, sideB, sideC)
    alert(area)
}

function calcTrianglePerimeter() {
    const input1 = document.getElementById("inputTriangle1");
    const sideA = +input1.value;
    const input2 = document.getElementById("inputTriangle2");
    const sideB = +input2.value;
    const input3 = document.getElementById("inputTriangle3");
    const sideC = +input3.value;
    const perimeter = trianglePerimeter(sideA, sideB, sideC)
    alert(perimeter)
}