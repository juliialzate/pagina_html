function validar() {
    // Validación para autor1
    if (document.getElementById('autor1').value.trim() === "") {
        alert("El nombre del autor 1 no puede ser vacío");
        return false;
    }
    // Validación para autor2
    if (document.getElementById('autor2').value.trim() === "") {
        alert("El nombre del autor 2 no puede ser vacío");
        return false;
    }
    // Validación para autor3
    if (document.getElementById('autor3').value.trim() === "") {
        alert("El nombre del autor 3 no puede ser vacío");
        return false;
    }
    // Validación para libro1
    if (document.getElementById('libro1').value.trim() === "") {
        alert("El nombre del libro 1 no puede ser vacío");
        return false;
    }
    // Validación para libro2
    if (document.getElementById('libro2').value.trim() === "") {
        alert("El nombre del libro 2 no puede ser vacío");
        return false;
    }
    // Validación para libro3
    if (document.getElementById('libro3').value.trim() === "") {
        alert("El nombre del libro 3 no puede ser vacío");
        return false;
    }
    // Validación para nacionalidad1
    if (document.getElementById('nacionalidad1').value.trim() === "") {
        alert("La nacionalidad del escritor 1 no puede estar vacía");
        return false;
    }
    // Validación para nacionalidad2
    if (document.getElementById('nacionalidad2').value.trim() === "") {
        alert("La nacionalidad del escritor 2 no puede estar vacía");
        return false;
    }
    // Validación para nacionalidad3
    if (document.getElementById('nacionalidad3').value.trim() === "") {
        alert("La nacionalidad del escritor 3 no puede estar vacía");
        return false;
    }

    // Si todas las validaciones pasan, muestra el mensaje y redirige
    alert("Formulario completado");
    window.location.href = "pagina2.html";
    return false; // Previene el envío del formulario por defecto
}

function redirigir() {
    // Solo redirige si la función validar() retorna true
    if (validar()) {
        window.location.href = "pagina2.html";
    }
}

function guardarDatos() {
	const autor1 = document.getElementById("autor1").value;
	const autor2 = document.getElementById("autor2").value;
	const autor3 = document.getElementById("autor3").value;
	const libro1 = document.getElementById("libro1").value;
	const libro2 = document.getElementById("libro2").value;
	const libro3 = document.getElementById("libro3").value;
	const nacionalidad1 = document.getElementById("nacionalidad1").value;
	const nacionalidad2 = document.getElementById("nacionalidad2").value;
	const nacionalidad3 = document.getElementById("nacionalidad3").value;
	
	sessionStorage.setItem("autor1", autor1);
	sessionStorage.setItem("autor2", autor2);
	sessionStorage.setItem("autor3", autor3);
	sessionStorage.setItem("libro1", libro1);
	sessionStorage.setItem("libro2", libro2);
	sessionStorage.setItem("libro3", libro3);
	sessionStorage.setItem("nacionalidad1", nacionalidad1);
	sessionStorage.setItem("nacionalidad2", nacionalidad2);
	sessionStorage.setItem("nacionalidad3", nacionalidad3);
}
