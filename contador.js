let contador = 0
const contadorelement = document.querySelector(".contador")
const sumarbutton = document.querySelector(".sumar")
const restarbutton = document.querySelector(".restar")
const resetearbutton = document.querySelector(".resetear")

function sumar(){
    contadorelement.innerHTML = parseInt(contadorelement.innerHTML) +1
}

function restar(){
    contadorelement.innerHTML = parseInt(contadorelement.innerHTML) -1
}

function resetear (){
    contadorelement.innerHTML = parseInt(contadorelement.innerHTML) = 0
}

sumarbutton.addEventListener("click", sumar);
restarbutton.addEventListener("click",restar)
resetearbutton.addEventListener("click", resetear);