//Función que obtiene los datos de la API y crea las cards
function obtenerDatos() {
    // Utilizamos la función fetch para obtener los datos de la API , La función fetch es una API web que permite realizar solicitudes HTTP asincrónicas, lo que significa que puede solicitar datos de recursos en línea sin tener que recargar la página web completa.
    fetch('https://proyectof2024pd-default-rtdb.firebaseio.com/cursos.json')
    //Del profe:https://cursos-d52c4-default-rtdb.firebaseio.com/cursos.json
    // El navegador enviará una solicitud HTTP GET al servidor que aloja la API para obtener los datos.
    //Luego, la respuesta a esa solicitud se pasa a la función .then(),se crea el objeto response, que guarda la PROMESA Y donde se llama a .json() para convertir los datos en formato JSON a un objeto JavaScript.
      .then(response => response.json())
      .then(data => {//Recibe esos datos y crea la variable data que va a contener todos los datos en formato JSON que se obtienen utilizando la función fetch.
        // Obtener el elemento contenedor para las cards
        const cardDeck = document.getElementById('card-deck');
        cardDeck.innerHTML = ''; //limpia todo lo que hay en la card anterior(esto hace que siempre que se ejecute la funcion la card cargue de nuevo y no muestre info que ya tenga cargado)

        let row; // Variable para la fila actual
        let count = 0; // Contador para controlar las columnas

        // Iterar sobre los datos y crear una card para cada objeto
        for (let key in data) {//La variable data contiene los datos en formato JSON que se obtienen utilizando la función fetch.
            const objeto = data[key];//se utiliza para recorrer los objetos dentro de data. En cada iteración, la variable key tomará el valor de una de las propiedades de data. La variable objeto se utiliza para almacenar el objeto que se encuentra en la posición key de data.

            // Crear una nueva fila cada 4 tarjetas
            if (count % 4 === 0) {
                row = document.createElement('div');
                row.classList.add('row', 'mb-4'); // Agrega márgenes entre filas
            cardDeck.appendChild(row);
            }

        // Crear los elementos HTML para la card
        const cardCol = document.createElement('div');
        const card = document.createElement('div'); //Aquí se está creando un nuevo elemento HTML div y asignándolo a la variable card. Luego se agrega la clase "card" a ese elemento utilizando el método classList.add().
        const imagen = document.createElement('img');
        const cardBody = document.createElement('div');
        const titulo = document.createElement('h5');
        const duracion = document.createElement('p');
        const valor = document.createElement('p');
        const descripcion = document.createElement('p');
        const nivel = document.createElement('p');
        const botonDet = document.createElement('button');

        // Estilos e información
        cardCol.classList.add('col-md-3', 'd-flex'); // Cada tarjeta ocupa 1/4 de la fila y usa flexbox para alinearse
        card.classList.add('card', 'flex-grow-1'); // Crece uniformemente dentro de la columna
        imagen.classList.add('card-img-top');
        imagen.src = objeto.imgCurso;
        cardBody.classList.add('card-body');
        titulo.classList.add('card-title');
        titulo.textContent = objeto.nombreCurso;
        duracion.classList.add('card-text');
        duracion.textContent ='Duración: ' + objeto.duracionCurso + ' meses';
        valor.classList.add('card-text');
        valor.textContent = 'Valor: $' + objeto.valorCurso;
        descripcion.classList.add('card-text');
        descripcion.textContent = objeto.descripcionCurso;
        nivel.classList.add('card-text');
        nivel.textContent = 'Nivel: ' + objeto.nivelCurso;
        botonDet.classList.add('btn', 'btn-primary');
        botonDet.textContent = 'Detalle';


        //Agregar el evento de click al botón para redirigir a otra página
        botonDet.addEventListener('click', function(){
            window.location.href = "descripCur.html" + '?id=' + key;
        });

        // Agregar los elementos a la card, crea los elementos HTML que conforman una tarjeta y los agrega en el orden correspondiente, para finalmente agregar la tarjeta completa al contenedor de tarjetas.
        cardBody.appendChild(titulo);
        cardBody.appendChild(descripcion);
        cardBody.appendChild(duracion);
        cardBody.appendChild(nivel);
        cardBody.appendChild(valor);
        cardBody.appendChild(botonDet);

        card.appendChild(imagen);
        card.appendChild(cardBody);

        cardCol.appendChild(card);

        // Agregar la tarjeta a la fila actual
        row.appendChild(cardCol);

        count++; // Incrementar el contador
        }
    });
}
// Ejecutar la función obtenerDatos al cargar la página
obtenerDatos();

// Ejecutar la función obtenerDatos cada 5 segundos utilizando setInterval
setInterval(obtenerDatos, 5000);