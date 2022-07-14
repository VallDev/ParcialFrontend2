/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

//Aqui van las capturas y  la variable que se necesitan
//Se hace para una mejor semantica y compresion del codigo a la vez de para conservarun orden

//captura de elementos punto 2
const nombreUsuario = document.querySelector("#nombre");
const ciudadUsuario = document.querySelector("#ciudad");
const edadUsuario = document.querySelector("#edad");
const javascriptUsuario = document.querySelector("#javascript");

//captura elemento punto 3
const fila = document.querySelector("#fila");

//captura elemento punto 4
const body = document.querySelector("#sitio");

//captura elemento punto 5
let eventoTeclaF = document.querySelector("#sobre-mi");

//auxiliar para que al volver a presionar el boton, no aparezcan mas veces las materias
let poderPresionar = true;

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let añoActual = new Date();
  let interes = false;

  datosPersona.nombre = prompt("Por favor ingrese su nombre");
  datosPersona.edad = añoActual.getFullYear() - parseInt(prompt("Por favor ingrese el año en que nació"));
  datosPersona.ciudad = prompt("Por favor digite su ciudad de procedencia");
  interes = confirm("¿El lenguaje de programación Javascript es de su interés?");
  if(interes){
    datosPersona.interesPorJs = "Si";
  }else{
    datosPersona.interesPorJs = "No";
  }
  
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  nombreUsuario.innerText = datosPersona.nombre;
  ciudadUsuario.innerText = datosPersona.ciudad;
  edadUsuario.innerText = datosPersona.edad;
  javascriptUsuario.innerText = datosPersona.interesPorJs;

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  if(poderPresionar===true){

    listado.forEach((elemento,index) => {
      fila.innerHTML+=`
      <section class="caja">
      <img src="${elemento.imgUrl}" alt="imagen de html y css"></img>
      <p class="lenguajes">${elemento.lenguajes}</p>
      <p class="bimestre">${elemento.bimestre}</p>
      </section>
      `
    });
    poderPresionar = false;
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  body.classList.toggle("dark");


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener("keypress", function(evento){
  if(evento.key==='f'){
    eventoTeclaF.setAttribute("class", " ");
    console.log(evento.key);
  }
})

