let cuentas = [
    { user: 'Mali', pass: 123, money: 200 },
    { user: 'Gera', pass: 456, money: 290 },
    { user: 'Maui', pass: 789, money: 67 }
];


const form = document.getElementById('form')

form.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    let usuario = document.getElementById('usuario').value
    let password = Number(document.getElementById('password').value)

    for (let index = 0; index < cuentas.length; index++) {

        if (cuentas[index].user === usuario && cuentas[index].pass === password){
            localStorage.setItem('usuario', cuentas[index].user)
            localStorage.setItem('password', cuentas[index].pass)
            localStorage.setItem('saldoActual', cuentas[index].money)

            window.location.href='/Final.html'
            break
        }else{
            console.log('');
                }
}
})