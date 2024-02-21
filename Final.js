const usuario = localStorage.getItem('usuario')
const bienvenido = document.getElementById('bienvenido').innerHTML = `Hola ${usuario}`


const saldoActual = Number(localStorage.getItem('saldoActual'))

const saldo = document.getElementById('resultado')
saldo.innerHTML = `Tu saldo disponible es: $ ${saldoActual}.00`

function init() {
   let resultado = document.getElementById('resultado');
   let uno = document.getElementById('uno');
   let dos = document.getElementById('dos');
   let tres = document.getElementById('tres');
   let cuatro = document.getElementById('cuatro');
   let cinco = document.getElementById('cinco');
   let seis = document.getElementById('seis');
   let siete = document.getElementById('siete');
   let ocho = document.getElementById('ocho');
   let nueve = document.getElementById('nueve'); 
   let cero = document.getElementById('cero');
   let borrar = document.getElementById('borrar');
   let salir = document.getElementById('salir');
   let ingresar = document.getElementById('ingresar');
   let retirar = document.getElementById('retirar');

   //Eventos
   uno.onclick = function(e){
    if (resultado.textContent == `Tu saldo disponible es: $ ${saldoActual}.00`) {
        resultado.textContent = '1';
    }else{
       resultado.textContent = resultado.textContent + "1";
    }
   }

   dos.onclick = function(e){
    if (resultado.textContent == `Tu saldo disponible es: $ ${saldoActual}.00`) {
        resultado.textContent = '2';
    }else{
        resultado.textContent = resultado.textContent + '2';
    }
   }

   tres.onclick = function(e){
    if (resultado.textContent == `Tu saldo disponible es: $ ${saldoActual}.00`) {
        resultado.textContent = '3';
    }else{
        resultado.textContent = resultado.textContent + '3';
    }
   }

   cuatro.onclick = function(e){
    if (resultado.textContent == `Tu saldo disponible es: $ ${saldoActual}.00`) {
        resultado.textContent = '4';
    }else{
        resultado.textContent = resultado.textContent + '4';
    }
   }

   cinco.onclick = function(e){
    if (resultado.textContent == `Tu saldo disponible es: $ ${saldoActual}.00`) {
        resultado.textContent = '5';
    }else{
        resultado.textContent = resultado.textContent + '5';
    }
   }
   
   seis.onclick = function(e){
    if (resultado.textContent == `Tu saldo disponible es: $ ${saldoActual}.00`) {
        resultado.textContent = '6';
    }else{
        resultado.textContent = resultado.textContent + '6';
    }
   }

   siete.onclick = function(e){
    if (resultado.textContent == `Tu saldo disponible es: $ ${saldoActual}.00`) {
        resultado.textContent = '7';
    }else{
        resultado.textContent = resultado.textContent + '7';
    }
   }

   ocho.onclick = function(e){
    if (resultado.textContent == `Tu saldo disponible es: $ ${saldoActual}.00`) {
        resultado.textContent = '8';
    }else{
        resultado.textContent = resultado.textContent + '8';
    }
   }
   
   nueve.onclick = function(e){
    if (resultado.textContent == `Tu saldo disponible es: $ ${saldoActual}.00`) {
        resultado.textContent = '9';
    }else{
        resultado.textContent = resultado.textContent + '9';
    }
   }

   cero.onclick = function(e){
    if (resultado.textContent == `Tu saldo disponible es: $ ${saldoActual}.00`) {
        limpiar();
    }else{
        resultado.textContent = resultado.textContent + '0';
    }
   }

   reset.onclick = function(e){
       resetear();
   }

   borrar.onclick = function(e){
    if (resultado.textContent == `Tu saldo disponible es: $ ${saldoActual}.00`) {
        limpiar();
    }else{
        resultado.textContent = resultado.textContent.slice(0,-1)
    }
   }

    ingresar.onclick = function(e){
        let monto = resultado.textContent;
     if (monto == `Tu saldo disponible es: $ ${saldoActual}.00`) {
            limpiar();
        }else{
            let nuevoSaldo = Number(monto) + saldoActual;
            if (nuevoSaldo > 990) {
               alert('No puedes tener en esta cuenta un saldo superior a $990.00')
           } else {
               localStorage.setItem('saldoActual', nuevoSaldo)
           }
           saldo.innerHTML = `Tu saldo disponible es: $ ${saldoActual}.00`
           location.reload()
        }
    }

   retirar.onclick = function(e){
    let monto = resultado.textContent;
    if (monto == `Tu saldo disponible es: $ ${saldoActual}.00`) {
        limpiar();
    }else{
    let monto = Number(resultado.textContent);
    if (monto > saldoActual) {
        alert('Tu saldo actual es de $' + saldoActual + '.00')
    } else{
        let nuevoSaldo = (saldoActual - monto)
        if (nuevoSaldo < 10 ) {
            alert('Tu saldo restante no puede ser inferior a $10.00')
        } else{
            localStorage.setItem('saldoActual', nuevoSaldo)
        }  
    }
    saldo.innerHTML = `Tu saldo disponible es: $ ${saldoActual}.00`
    location.reload()}
   }

   salir.onclick = function redirect(){
    window.location.href="/Inicio.html";
   }

   function resetear(){
    resultado.textContent = '';
    monto = 0;
    operacion = '';
   }

   function limpiar(){
    resultado.textContent = '';
   }
}