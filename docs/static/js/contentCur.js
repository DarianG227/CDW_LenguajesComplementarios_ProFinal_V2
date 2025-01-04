//Obtener el parámetro "id" de la URL
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = urlParams.get('id');

    const bottonDes = document.getElementById("botonDescrip");
    const bottonPartic = document.getElementById("botonPart");

    if (bottonDes) {
        bottonDes.addEventListener('click', function() {
            window.location.href = "descripCur.html" + '?id=' + cursoId;
        });
    } else {
        console.log("Botón de 'Presentación' no encontrado");
    }

    if (bottonPartic) {
      bottonPartic.addEventListener('click', function() {
          window.location.href = "participantCur.html" + '?id=' + cursoId;
      });
  } else {
      console.log("Botón de 'Participantes' no encontrado");
  }

    
    //Realizar una petición a la API para obtener los detalles del curso
fetch('https://proyectof2024pd-default-rtdb.firebaseio.com/cursos/' + cursoId + '/contenido/tramos.json')
.then(response => response.json())
.then(tramo => { 

  //Nombre del curso
  const nomCurso = document.getElementById('h1');

  //Nombres de las subtramas izquierdas
  const nombrePrimer = document.getElementById('primerCont-izquierdo');
  const nombreSegundo = document.getElementById('segundoCont-izquierdo');
  const nombreTercero = document.getElementById('tercerCont-izquierdo');
  const nombreCuarto = document.getElementById('cuartoCont-izquierdo');

  //Nombres de las subtramas derechas
  const nombrePrimerDer = document.getElementById('primerCont-derecho');
  const nombreSegundoDer = document.getElementById('segundoCont-derecho');
  const nombreTerceroDer = document.getElementById('tercerCont-derecho');
  const nombreCuartoDer = document.getElementById('cuartoCont-derecho');

  //Nombres de las tramas
  const nombreTramoPri = document.getElementById('unTramo');
  const nombreTramoSeg = document.getElementById('otroTramo');

  const parteIzquierda = document.getElementById('partIzquierda');
  const parteDerecha = document.getElementById('partDerecha');

  //Lista de los detalles de las subtramas izquierda
  const detallesPri = document.getElementById('detallesPrimer');
  const detallesSeg = document.getElementById('detallesSegundo');
  const detallesTer = document.getElementById('detallesTercer');
  const detallesCua = document.getElementById('detallesCuarto');

  //Lista de los detalles de las subtramas derecha
  const detallesPriDer = document.getElementById('detallesPrimerDerecha');
  const detallesSegDer = document.getElementById('detallesSegundoDerecha');
  const detallesTerDer = document.getElementById('detallesTercerDerecha');
  const detallesCuaDer = document.getElementById('detallesCuartoDerecha');

  //Estilos o info
  nombreTramoPri.textContent = tramo.nombre0;
  nombreTramoSeg.textContent = tramo.nombre1;

  //Crear elementos HTML para mostrar los detalles del curso
  const nombre = document.createElement('h1');
  const nombreSub0 = document.createElement('p');
  const nombreSub1 = document.createElement('p');
  const nombreSub2 = document.createElement('p');
  const nombreSub3 = document.createElement('p');

  const nombre1Sub0 = document.createElement('p');
  const nombre1Sub1 = document.createElement('p');
  const nombre1Sub2 = document.createElement('p');
  const nombre1Sub3 = document.createElement('p');

  //Estilos e info
  fetch('https://proyectof2024pd-default-rtdb.firebaseio.com/cursos/' + cursoId + '.json')
    .then(response => response.json())
    .then(curso =>{
        nombre.textContent = curso.nombreCurso;
    })
  
//IZQUIERDA    
fetch('https://proyectof2024pd-default-rtdb.firebaseio.com/cursos/' + cursoId + '/contenido/tramos/subtrama0.json')
    .then(response => response.json())
    .then(sub => {
        nombreSub0.textContent = sub.nombre0;
        nombreSub1.textContent = sub.nombre1;
        nombreSub2.textContent = sub.nombre2;
        nombreSub3.textContent = sub.nombre3;

        if (Array.isArray(sub.detalles0)) {
            sub.detalles0.forEach(objetivo => {
              const li = document.createElement('li');
              li.textContent = objetivo; // Mostrar cada objetivo específico
              detallesPri.appendChild(li);
            });
        }else {
            console.error('"detlles0" no es un arreglo o está ausente en el curso.');
          }
    
          if (Array.isArray(sub.detalles1)) {
            sub.detalles1.forEach(objetivo => {
              const li = document.createElement('li');
              li.textContent = objetivo; // Mostrar cada objetivo específico
              detallesSeg.appendChild(li);
            });
        }else {
            console.error('"detalles1" no es un arreglo o está ausente en el curso.');
          }
    
          if (Array.isArray(sub.detalles2)) {
            sub.detalles2.forEach(objetivo => {
              const li = document.createElement('li');
              li.textContent = objetivo; // Mostrar cada objetivo específico
              detallesTer.appendChild(li);
            });
        }else {
            console.error('"detalles2" no es un arreglo o está ausente en el curso.');
          }
    
          if (Array.isArray(sub.detalles3)) {
            sub.detalles3.forEach(objetivo => {
              const li = document.createElement('li');
              li.textContent = objetivo; // Mostrar cada objetivo específico
              detallesCua.appendChild(li);
            });
        }else {
            console.error('"detalles3" no es un arreglo o está ausente en el curso.');
          }
    })

    //PARTE DERECHA
    fetch('https://proyectof2024pd-default-rtdb.firebaseio.com/cursos/' + cursoId + '/contenido/tramos/subtrama1.json')
    .then(response => response.json())
    .then(sub1 => {
        nombre1Sub0.textContent = sub1.nombre0;
        nombre1Sub1.textContent = sub1.nombre1;
        nombre1Sub2.textContent = sub1.nombre2;
        nombre1Sub3.textContent = sub1.nombre3;

        if (Array.isArray(sub1.detalles0)) {
            sub1.detalles0.forEach(objetivo => {
              const li = document.createElement('li');
              li.textContent = objetivo; // Mostrar cada objetivo específico
              detallesPriDer.appendChild(li);
            });
        }else {
            console.error('"detlles0" no es un arreglo o está ausente en el curso.');
          }
    
          if (Array.isArray(sub1.detalles1)) {
            sub1.detalles1.forEach(objetivo => {
              const li = document.createElement('li');
              li.textContent = objetivo; // Mostrar cada objetivo específico
              detallesSegDer.appendChild(li);
            });
        }else {
            console.error('"detalles1" no es un arreglo o está ausente en el curso.');
          }
    
          if (Array.isArray(sub1.detalles2)) {
            sub1.detalles2.forEach(objetivo => {
              const li = document.createElement('li');
              li.textContent = objetivo; // Mostrar cada objetivo específico
              detallesTerDer.appendChild(li);
            });
        }else {
            console.error('"detalles2" no es un arreglo o está ausente en el curso.');
          }
    
          if (Array.isArray(sub1.detalles3)) {
            sub1.detalles3.forEach(objetivo => {
              const li = document.createElement('li');
              li.textContent = objetivo; // Mostrar cada objetivo específico
              detallesCuaDer.appendChild(li);
            });
        }else {
            console.error('"detalles3" no es un arreglo o está ausente en el curso.');
          }
    })
      
  //Agregar orden correspondiente
  nomCurso.appendChild(nombre);
  // Ordenar correctamente en el DOM
  parteIzquierda.prepend(nombreTramoPri); //Inserta al principio
  parteDerecha.prepend(nombreTramoSeg); //Inserta al principio
  nombrePrimer.appendChild(nombreSub0);
  nombreSegundo.appendChild(nombreSub1);
  nombreTercero.appendChild(nombreSub2);
  nombreCuarto.appendChild(nombreSub3);
  nombrePrimerDer.appendChild(nombre1Sub0);
  nombreSegundoDer.appendChild(nombre1Sub1);
  nombreTerceroDer.appendChild(nombre1Sub2);
  nombreCuartoDer.appendChild(nombre1Sub3);

  })
});


