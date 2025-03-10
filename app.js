let numeroSecretro = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let  elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', "Ganaste. Ya fueron sorteado todos los numeros posibles.")
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function verificarIntento(){
    let numeroDeUsusario = parseInt(document.getElementById("valorUsuario").value);
    if(intentos > 4){
        asignarTextoElemento('p',"LOSE. Superaste el limite de intentos. Comienza un juego nuevo")
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if (numeroDeUsusario === numeroSecretro){
            asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1)? "vez.": "veces."}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            if(numeroDeUsusario > numeroSecretro){
                asignarTextoElemento('p',"El numero es menor")
            }else{
                asignarTextoElemento('p',"El numero secreto es mayor")
            }
            intentos++;
            limpiarCaja();
        }
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del numero secreto");
    asignarTextoElemento('p',`Elige un numero del 1 al ${numeroMaximo}`);
    numeroSecretro = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();

