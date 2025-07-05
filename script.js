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

const inputLado = document.getElementById("cuadradoInputLado");
const botonArea = document.getElementById("cuadradoAreabtn");
const botonPerimetro = document.getElementById("cuadradoPerimetrobtn");
const spanAreaCuadrado = document.getElementById("spanAreaCuadrado");
const spanPerimetroCuadrado = document.getElementById("spanPerimetroCuadrado");

// Escuchar evento que calcula Area
botonArea.addEventListener("click", () => {
	const cladoA = parseFloat(inputLado.value);
	const cArea = areaCuadrado(cladoA);
	if (isNaN(inputLado) || inputLado <= 0) {
		alert("Por favor ingresa un valor válido para el lado.");
		return;
	}
	spanAreaCuadrado.textContent = cArea;
});
// Escuchar evento que calcula Perimetro
botonPerimetro.addEventListener("click", () => {
	const cladoP = parseFloat(inputLado.value);
	const cPerimetro = perimetroCuadrado(cladoP);
	if (isNaN(inputLado) || inputLado <= 0) {
		alert("Por favor ingresa un valor válido para el lado.");
		return;
	}
	spanPerimetroCuadrado.textContent = cPerimetro;
});

// Obtener referencias de los inputs
const tbase = document.getElementById("trianguloInputBase");
const taltura = document.getElementById("trianguloInputAltura");
const tlado1 = document.getElementById("trianguloInputLado1");
const tlado2 = document.getElementById("trianguloInputLado2");
const tlado3 = document.getElementById("trianguloInputLado3");
// Obtener referencias de botones
const tbotonArea = document.getElementById("trianguloAreabtn");
const tbotonPerimetro = document.getElementById("trianguloPerimetrobtn");
// Obtener referencias de resultados
const spanAreaTriangulo = document.getElementById("spanAreaTriangulo");
const spanPerimetroTriangulo = document.getElementById(
	"spanPerimetroTriangulo"
);

// Evento para calcular área
tbotonArea.addEventListener("click", () => {
	const baseVal = parseFloat(tbase.value);
	const alturaVal = parseFloat(taltura.value);

	if (isNaN(baseVal) || isNaN(alturaVal) || baseVal <= 0 || alturaVal <= 0) {
		alert("Por favor ingresa valores válidos para base y altura.");
		return;
	}
	const tArea = areaTriangulo(baseVal, alturaVal);
	spanAreaTriangulo.textContent = tArea;
});

// Evento para calcular perímetro
tbotonPerimetro.addEventListener("click", () => {
	const lado1Val = parseFloat(tlado1.value);
	const lado2Val = parseFloat(tlado2.value);
	const lado3Val = parseFloat(tlado3.value);

	if (
		isNaN(lado1Val) ||
		lado1Val <= 0 ||
		isNaN(lado2Val) ||
		lado2Val <= 0 ||
		isNaN(lado3Val) ||
		lado3Val <= 0
	) {
		alert("Por favor ingresa valores válidos para los tres lados.");
		return;
	}
	const tPerimetro = perimetroTriangulo(lado1Val, lado2Val, lado3Val); // tu función
	spanPerimetroTriangulo.textContent = tPerimetro;
});
