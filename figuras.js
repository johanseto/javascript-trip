console.group('cuadrado')

console.log("hello ma nigga")
const ladoCuadrado = 5;
console.log('los cuadrados miden :' + ladoCuadrado)

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}


console.log('el perimetro del cuadrado es ' + perimetroCuadrado)

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado ** 2;
}


console.log('el area del cuadrado es ' + areaCuadrado)

console.groupEnd()
    //Codigo triangulo

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value)
    alert(area)
}

function perimetroTriangulo(ladoa, ladob, ladoc) {
    return ladoa + ladob + ladoc;
}

function areaTriangulo(ladoa, ladob, ladoc) {
    altura = Math.sqrt(ladoc ** 2 - (ladoa / 2) ** 2);
    area = ladoa * altura / 2;
    return area
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const ladoa = input1.value;
    const input2 = document.getElementById("inputTriangulo2");
    const ladob = input2.value;
    const input3 = document.getElementById("inputTriangulo3");
    const ladoc = input3.value;
    const area = areaTriangulo(ladoa, ladob, ladoc)
    alert(area)
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const ladoa = +input1.value;
    const input2 = document.getElementById("inputTriangulo2");
    const ladob = +input2.value;
    const input3 = document.getElementById("inputTriangulo3");
    const ladoc = +input3.value;
    const perimetro = perimetroTriangulo(ladoa, ladob, ladoc)
    alert(perimetro)
}