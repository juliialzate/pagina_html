window.onload = function() {
    const autor1 = sessionStorage.getItem("autor1");
	const autor2 = sessionStorage.getItem("autor2");
	const autor3 = sessionStorage.getItem("autor3");
	const libro1 = sessionStorage.getItem("libro1");
	const libro2 = sessionStorage.getItem("libro2");
	const libro3 = sessionStorage.getItem("libro3");
	const nacionalidad1 = sessionStorage.getItem("nacionalidad1");
	const nacionalidad2 = sessionStorage.getItem("nacionalidad2");
	const nacionalidad3 = sessionStorage.getItem("nacionalidad3");
	
    document.getElementById("autor1").textContent = autor1;
    document.getElementById("autor2").textContent = autor2;
    document.getElementById("autor3").textContent = autor3;
    document.getElementById("libro1").textContent = libro1;
    document.getElementById("libro2").textContent = libro2;
    document.getElementById("libro3").textContent = libro3;
    document.getElementById("nacionalidad1").textContent = nacionalidad1;
    document.getElementById("nacionalidad2").textContent = nacionalidad2;
    document.getElementById("nacionalidad3").textContent = nacionalidad3;
}


function cambiarEstilo () {
    const hojaEstilo = document.getElementById('estilo');
        if (hojaEstilo.getAttribute('href') === 'estilos1.css'){
            hojaEstilo.setAttribute('href' , 'estilos2.css');
        }
        else{
            hojaEstilo.setAttribute('href' , 'estilos1.css');
    }

}
