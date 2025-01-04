const urlParams = new URLSearchParams(window.location.search);
const cursoId = urlParams.get('id');

const bottonCont = document.getElementById("botonContent");
const bottonDes = document.getElementById("botonDescrip");

if (bottonCont) {
    bottonCont.addEventListener('click', function() {
        window.location.href = "contentCur.html" + '?id=' + cursoId;
    });
} else {
    console.log("Botón de 'Contenido' no encontrado");
}

if(bottonDes){
    bottonDes.addEventListener('click', function(){
      window.location.href = "descripCur.html" + '?id=' + cursoId;
    });
} else{
    console.log("Botón de 'Descripción' no encontrado.")
}

fetch('https://proyectof2024pd-default-rtdb.firebaseio.com/cursos/'  + cursoId + '.json')
  .then(response => response.json())
  .then(curso => {

    const section1 = document.getElementById("sSec1");
    const section2 = document.getElementById("sSec2");
    const section3 = document.getElementById("sSec3");

    const lista = document.getElementById("tutor");

    //console.log(cursoId);

    let contador = 0;

    for (let key in curso.participantes) {
        const participante = curso.participantes[key];
        fetch('https://proyectof2024pd-default-rtdb.firebaseio.com/alummnos/'  + participante + '.json')
        .then(response => response.json())
        .then(alumno =>{



            const parr = document.createElement('p');
            parr.classList.add("nombres");

            parr.textContent = alumno.nombreAlumno + ', ' + alumno.provinciaAlumno + '.';

            if(contador >= 5){
                section2.appendChild(parr);
                contador = contador+1;

                if(contador > 10){
                    section3.appendChild(parr);
                }
            }
            else{
                section1.appendChild(parr);
                contador = contador + 1;
            }
            

            

            /*console.log(alumno);

            parr.textContent = alumno.nombreAlumno + ', ' + alumno.provinciaAlumno;
            console.log(parr);
            
            section1.appendChild(parr);*/
        })
    }

    for (let key in curso.tutores) {
        const tutor = curso.tutores[key];
        
        const li = document.createElement("li");
        li.classList.add("lis");

        li.textContent = tutor + ".";

        lista.appendChild(li);
    }

  })