// Formulas Cuadrado
function perimetroCuadrado(lado) {
	return lado * 4;
}
function areaCuadrado(lado) {
	return lado * lado;
}
// Formulas Triangulo
function perimetroTriangulo(lado1, lado2, base) {
	return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
	return (base * altura) / 2;
}
//Formulas Circulo
const PI = Math.PI;
function diametroCirculo(radio) {
	return radio * 2;
}
function perimetroCirculo(radio) {
	const diametro = diametroCirculo(radio);
	return diametro * PI;
}
function areaCirculo(radio) {
	return radio * radio * PI;
}

// Aquí interactuamos con el HTML
//Selección de Label para imprimir resultado
const inputLado = document.getElementById("cuadradoInputLado");
const botonArea = document.getElementById("cuadradoAreabtn");
const botonPerimetro = document.getElementById("cuadradoPerimetrobtn");
const spanAreaCuadrado = document.getElementById("spanAreaCuadrado");
const spanPerimetroCuadrado = document.getElementById("spanPerimetroCuadrado");

// Escuchar evento que calcula Area
botonArea.addEventListener("click", () => {
	const cladoA = parseFloat(inputLado.value);
	const cArea = areaCuadrado(cladoA);
	spanAreaCuadrado.textContent = cArea;
});
// Escuchar evento que calcula Perimetro
botonPerimetro.addEventListener("click", () => {
	const cladoP = parseFloat(inputLado.value);
	const cPerimetro = perimetroCuadrado(cladoP);
	spanPerimetroCuadrado.textContent = cPerimetro;
});

function calcularPerimetroTriangulo() {
	const tLado1 = document.getElementById("tLado1");
	const value1 = Number(tLado1.value);
	const tLado2 = document.getElementById("tLado2");
	const value2 = Number(tLado2.value);
	const tBase = document.getElementById("tBase");
	const value3 = Number(tBase.value);
	const tAltura = document.getElementById("tAltura");
	const value4 = Number(tAltura.value);

	const tPerimetro = perimetroTriangulo(value1, value2, value3);
	alert(tPerimetro);
}

function calcularAreaTriangulo() {
	const tLado1 = document.getElementById("tLado1");
	const value1 = Number(tLado1.value);
	const tLado2 = document.getElementById("tLado2");
	const value2 = Number(tLado2.value);
	const tBase = document.getElementById("tBase");
	const value3 = Number(tBase.value);
	const tAltura = document.getElementById("tAltura");
	const value4 = Number(tAltura.value);

	const tArea = areaTriangulo(value3, value4);
	alert(tArea);
}

function calcularPerimetroCirculo() {
	const inputCirculo = document.getElementById("InputCirculo");
	const cValue = parseFloat(inputCirculo.value);

	const cPerimetro = perimetroCirculo(cValue).toFixed(2);
	alert(cPerimetro);
}

function calcularAreaCirculo() {
	const inputCirculo = document.getElementById("InputCirculo");
	const cValue = parseFloat(inputCirculo.value);

	const cArea = areaCirculo(cValue).toFixed(2);
	alert(cArea);
}
