

let previousTitle = document.title

window.addEventListener('blur', ()=>{
    previousTitle = document.title
    document.title = '¡No te vayas!, ¡Vuelve! 🫣' 
});


window.addEventListener('focus', () =>{
    document.title = previousTitle
})

const btnCopiar = document.querySelector(".btn__copy") 




const encriptar = () => {
    var input = document.querySelector(".input__text").value.toLowerCase();

    var textoEncriptado = input.replace(/e/img, "enter")
    var textoEncriptado = textoEncriptado.replace(/o/igm, "ober")
    var textoEncriptado = textoEncriptado.replace(/i/igm, "imes")
    var textoEncriptado = textoEncriptado.replace(/a/igm, "ai")
    var textoEncriptado = textoEncriptado.replace(/u/igm, "ufat")

    document.querySelector(".imagen__img").style.display = "none";
    document.querySelector(".text__mensaje").style.display = "none";
    document.querySelector(".paragraph__respuesta").innerHTML = textoEncriptado;
    document.querySelector(".respuesta__title").style.display = "show";
    document.querySelector(".respuesta__title").style.display = "inherit";
    document.querySelector(".btn__copy").style.display = "show";
    document.querySelector(".btn__copy").style.display = "inherit";
}



const desencriptar = () => {
   
    var input = document.querySelector(".input__text").value.toLowerCase();

    var textoEncriptado = input.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");


    document.querySelector(".imagen__img").style.display = "none";
    document.querySelector(".text__mensaje").style.display = "none";
    document.querySelector(".paragraph__respuesta").innerHTML = textoEncriptado;
    document.querySelector(".respuesta__title").style.display = "show";
    document.querySelector(".respuesta__title").style.display = "inherit";
    document.querySelector(".btn__copy").style.display = "show";
    document.querySelector(".btn__copy").style.display = "inherit";
}



btnCopiar.addEventListener("click", copiar = () =>{
    let contenido = document.querySelector(".paragraph__respuesta").textContent;
    navigator.clipboard.writeText(contenido);

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Texto copiado con exito',
        showConfirmButton: false,
        timer: 1700
      })
})


