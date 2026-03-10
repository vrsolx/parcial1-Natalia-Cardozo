let contador

function solicitarServicio1() {

    contador++

    alert("Servicios solicitados: " + contador)

}

function registrar() {

    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("correo").value

    let regex = /@/

    if (nombre == "") {
        alert("Nombre obligatorio")
    }

    if (regex.test = correo) {
        alert("Correo válido")
    }

}

Javascript 
// 1. Seleccionamos los botones por su ID
const botonClaro = document.getElementById('btn-claro');
const botonOscuro = document.getElementById('btn-oscuro');

// 2. Función para activar el Modo Oscuro
botonOscuro.addEventListener('click', () => {
    // Agregamos la clase al body
    document.body.classList.add('dark-mode');
});

// 3. Función para volver al Modo Claro
botonClaro.addEventListener('click', () => {
    // Removemos la clase del body
    document.body.classList.remove('dark-mode');
});
