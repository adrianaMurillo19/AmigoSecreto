// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaración de variables
let listaAmigos = []; //guardar los amigos que se vayan ingresando

//Declaración de funciones
/**
 * Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
 */
function agregarAmigo(){

    // se captura el dato ingresado
    let nombreAmigo = document.querySelector('#amigo').value;

    //validar dato
    // Se valida si la cadena está vacía o si contiene solo espacios en blanco.
    if(nombreAmigo.trim() === ''){
        alert('Por favor, inserte un nombre');
    } else {
        console.log("guardado");
        listaAmigos.push(nombreAmigo);
        
        //visualizar nombres
        mostrarAmigos(listaAmigos);

        // Limpiamos el campo después de agregar un amigo
        limpiarCampo();
    }
    return listaAmigos;
}

/* Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
*/
function limpiarCampo(){
    document.querySelector('#amigo').value = '';
}

/**
 * Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
 */
function mostrarAmigos(arr) {
    //Obtener el elemento ul por su id
    const lista = document.getElementById('listaAmigos');

    //Limpiar la lista antes de añadir nuevos elementos 
    lista.innerHTML = '';

    //Iterar sobre el arreglo y crear un elemento  para cada amigo
    arr.forEach(amigos => {
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = amigos;
        lista.appendChild(nuevoLi);
    });
}


/**
 * Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
 */
function sortearAmigo(elemento){

    //Obtener el elemento ul por su id
    const lista = document.getElementById('sortear');

    lista.innerHTML = '';

    const elementoUl = document.createElement('ul');
    elementoUl.textContent(elemento);
   // lista.appendChild(elementoUl);

    obtenerElementoAleatorio(lista.appendChild(elementoUl));
}

/**
 * Selecciona un elemento aleatorio del arreglo de amigos.
 * @param {Array} arr El arreglo de amigos.
 * @returns {string} El nombre de un amigo seleccionado al azar.
 */
function obtenerElementoAleatorio(arr) {
    if (arr.length === 0) {
        return null; // Devuelve null si la lista está vacía
    }
    const indiceAleatorio = Math.floor(Math.random() * arr.length);
    return arr[indiceAleatorio];
}

/**
 * Sortea un amigo de la lista y lo muestra en la página.
 */
function sortearAmigo() {
    // se obtiene el elemento ul donde se mostrará el resultado
    const listaResultado = document.getElementById('resultado');

    //se limpia el contenido anterior
    listaResultado.innerHTML = '';

    //se selecciona un amigo aleatorio de la listaAmigos global
    const amigoGanador = obtenerElementoAleatorio(listaAmigos);

    // se muestra el amigo secreto
    if (amigoGanador) {
        const nuevoUl = document.createElement('ul');
        nuevoUl.textContent = `Tú amigo secreto es: ${amigoGanador}`;
        
        listaResultado.appendChild(nuevoUl);
    } else {
        // Mostrar un mensaje si no hay amigos en la lista
        alert('La lista está vacía');
    }
}

