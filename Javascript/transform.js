function carrusel(botonder,botonizq,cart){
	let cartasIndex = 0;
	let transformder = document.getElementById(botonder);
	let transformizq = document.getElementById(botonizq);
	
	transformder.onclick = () => showCartas();
	transformizq.onclick = () => showCartas();


	function showCartas(){
				
	    var i;
	    var slidescart = document.getElementsByClassName(cart);
	    for (i = 0; i < slidescart.length; i++) {
		    slidescart[i].classList.remove ("mirar");
	    }
	    cartasIndex++;

	    if(cartasIndex > slidescart.length) {
	    	cartasIndex = 1
	    }
	    slidescart[cartasIndex-1].classList.add("mirar");
	}
}

carrusel("derecha_accion","izquierda_accion","carta_accion");
carrusel("derecha_animacion","izquierda_animacion","carta_animacion");
carrusel("derecha_suspenso","izquierda_suspenso","carta_suspenso");
carrusel("derecha_terror","izquierda_terror","carta_terror");
carrusel("derecha_drama","izquierda_drama","carta_drama");
carrusel("derecha_comedia","izquierda_comedia","carta_comedia");
carrusel("derecha_ciencia","izquierda_ciencia","carta_ciencia");



/*menu principal*/

function menuCategorias(){
	let enlaces = document.querySelectorAll("#menu_principal li")
	let i = 0;

	enlaces.forEach((element) => {
		element.addEventListener("click", (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove("activo"))
			evento.target.classList.add("activo");
		});
	});
}
	menuCategorias();


