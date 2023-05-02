// //numero primos de 3 y de 5
// //3 = fizz 5 = buzz

let fizzSeleccionador = document.getElementById("btnFizz");
fizzSeleccionador.addEventListener('click', fizzSelector);
let contenedorListaFizz = document.getElementById("listaNumerosFizz");


let buzzSeleccionador = document.getElementById("btnBuzz");
buzzSeleccionador.addEventListener('click', buzzSelector);
let contenedorListaBuzz = document.getElementById("listaNumerosBuzz");

let fizzbuzzSeleccionador = document.getElementById("btnFizzBuzz");
fizzbuzzSeleccionador.addEventListener('click', fizzbuzzSelector);
let contenedorListaFizzBuzz = document.getElementById("listaNumerosFizzBuzz");


let todosSeleccionador = document.getElementById("btnTodosNumeros");
todosSeleccionador.addEventListener('click', todosSelector);
let contenedorListaTotal = document.getElementById("listaNumerosTotales");


const listaNumeros = [];
// //Se utiliza un ciclo for para que iterar de 1 a 100
function numeroGlobal(){
  for (let numero = 1; numero <=100; numero++) {
    //Los numeros de 1 al 100 son almacenados en la variable i
    //Se utiliza un condicional if para hacer la validación de si el numero al ser dividido es igual a 0
    //
    if ((numero % 3 == 0 && numero % 5 == 0)) {
      listaNumeros.push(numero + " fizzbuzz ");
    } else if ((numero % 3 == 0)) {
      listaNumeros.push(numero + " fizz ");
    } else if ((numero % 5 == 0)) {
      listaNumeros.push(numero + " buzz ");
    } else {
      listaNumeros.push(numero.toString());
    }
  }
}

function fizzSelector() {
  const listaFizz = listaNumeros.filter((element)=>element.includes("fizz"));
  const li = document.createElement("li");
  li.textContent = listaFizz;
  contenedorListaFizz.appendChild(li);
  
}
function buzzSelector() {
  const listaBuzz = listaNumeros.filter((element)=>element.includes("buzz"));
  const li = document.createElement("li");
  li.textContent = listaBuzz;
  contenedorListaBuzz.appendChild(li);
  
}
function fizzbuzzSelector() {
  const listaFizzBuzz = listaNumeros.filter((element)=>element.includes("fizzbuzz"));
  const li = document.createElement("li");
  li.textContent = listaFizzBuzz;
  contenedorListaFizzBuzz.appendChild(li);
  
}
function todosSelector() {
  const listaNumerosTotales = listaNumeros;
  const li = document.createElement("li");
  li.textContent = listaNumerosTotales;
  contenedorListaTotal.appendChild(li);
  
}

numeroGlobal();
console.log(listaNumeros);




