//Obtener el parámetro "id" de la URL
const urlParams = new URLSearchParams(window.location.search);
const cursoId = urlParams.get('id');

const bottonCont = document.getElementById("botonContent");
const bottonPartic = document.getElementById("botonPart");

if (bottonCont) {
    bottonCont.addEventListener('click', function() {
        window.location.href = "contentCur.html" + '?id=' + cursoId;
    });
} else {
    console.log("Botón de 'Contenido' no encontrado");
}

if(bottonPartic){
  bottonPartic.addEventListener('click', function(){
    window.location.href = "participantCur.html" + '?id=' + cursoId;
  });
} else{
  console.log("Botón de 'Participantes' no encontrado.")
}

//Realizar una petición a la API para obtener los detalles del curso
fetch('https://proyectof2024pd-default-rtdb.firebaseio.com/cursos/' + cursoId + '.json')
  .then(response => response.json())
  .then(curso => {
    console.log(curso);
    const descripSec1 = document.getElementById('sec1');
    const descripSec2 = document.getElementById('sec2');
    const descripSec3 = document.getElementById('sec3');
    const descripSec4 = document.getElementById('sec4');
    const nomCurso = document.getElementById('h1');
    const objEspe = document.getElementById('objEspe');
    const obGeneral = document.getElementById('objGeneral');

    //Crear elementos HTML para mostrar los detalles del curso
    const nombre = document.createElement('h1');
    const duracion = document.createElement('p');
    const valor = document.createElement('p');
    const imagen = document.createElement('img');
    const presentacion = document.createElement('p');
    const imagen2 = document.createElement('img');
    const nivel = document.createElement('p');

    //Estilos e info
    nombre.textContent = curso.nombreCurso;
    duracion.textContent = 'Duración: ' + curso.duracionCurso + ' meses';
    valor.textContent = 'Valor: $' + curso.valorCurso;
    nivel.textContent = 'Nivel: ' + curso.nivelCurso;
    imagen.src = curso.imgCurso;
    imagen.classList.add('img1');
    obGeneral.textContent = curso.objGeneral;
    presentacion.textContent = curso.presentacionCurso;
    imagen2.src= curso.imgAdicional;
    imagen2.classList.add('imgA');

        
    //Agregar orden correspondiente
    nomCurso.appendChild(nombre);
    descripSec1.appendChild(presentacion);
    descripSec1.appendChild(duracion);
    descripSec1.appendChild(nivel);
    descripSec1.appendChild(valor);
    descripSec2.appendChild(imagen);
    descripSec4.appendChild(imagen2);

    if (Array.isArray(curso.objEspecificos)) {
        curso.objEspecificos.forEach(objetivo => {
          const li = document.createElement('li');
          li.textContent = objetivo; // Mostrar cada objetivo específico
          objEspe.appendChild(li);
        });
    }else {
        console.error('"objEspecifico" no es un arreglo o está ausente en el curso.');
      }
    })
    .catch(error => {
      console.error('Error al obtener los datos de la API:', error);
    }); 