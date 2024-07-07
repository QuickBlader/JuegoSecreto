let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario===numeroSecreto);

    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if (numeroDeUsuario> numeroSecreto){
            asignarTextoElemento('p','El numero secreto es Mayor')
        }else{
            asignarTextoElemento('p','El numero secreto es Menor')
        }
        intentos++;
        limpiarCaja()
    }

    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Ingrese un numero del 1 al 10');
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
    // limpiar caja
    limpiarCaja()
    // indicar mensaje de incio intervalo}
    condicionesIniciales()
    // generar numero aleatorio
    // deshabilitar el boton de nuevo juego
    // Incializar el numero intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


function generaNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*10+1);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Se sortearon todos los elementos')        
    }

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generaNumeroSecreto();       
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}


condicionesIniciales();