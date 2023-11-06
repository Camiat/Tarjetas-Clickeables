//3-Tarjetas clickeables: Genera una serie de tarjetas en el DOM, cada una con un
//contenido diferente. Permite que el usuario haga clic en una tarjeta para expandirla y
//mostrar más detalles.

// Trabajo en jean
function cambiarImagen(){
    let imagenJean = document.getElementById("imagenJean");
    imagenJean.src ="images/jean2.jpg"
};

function restaurarImagen(){
  let imagenJean = document.getElementById("imagenJean");
  imagenJean.src = "images/jean1.jpg" 
};



//trabajo en boton Jean

function mostrarDescripcion(){
    let descripcion = document.getElementById("oculto");
    descripcion.className = "visible";

    let boton = document.getElementById("boton");
    boton.className = "elemento-oculto"
}


//trabajo en saco
function cambiarImagenB(){
    let imagenSaco = document.getElementById("imagenSaco");
    imagenSaco.src ="images/saco2.jpg"
};

function restaurarImagenB(){
  let imagenSaco = document.getElementById("imagenSaco");
  imagenSaco.src = "images/saco1.jpg" 
};

//trabajo en boton saco
function mostrarDescripcionB(){
    let descripcionB = document.getElementById("ocultoB");
    descripcionB.className = "visibleB";

    let botonB = document.getElementById("botonB");
    botonB.className = "elemento-ocultoB"
}

//trabajo en camisa
function cambiarImagenC(){
    let imagenCamisa = document.getElementById("imagenCamisas");
    imagenCamisa.src ="images/camisa2.jpg"
};

function restaurarImagenC(){
  let imagenCamisa = document.getElementById("imagenCamisas");
  imagenCamisa.src = "images/camisas1.jpg" 
};

//boton camisa

function mostrarDescripcionC(){
    
    let descripcionC = document.getElementById("ocultoC");
        descripcionC.className = "visibleC";

    let botonC = document.getElementById("botonC");
    botonC.className = "elemento-ocultoC"
   
}
