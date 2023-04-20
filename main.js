const numero1 = document.getElementById('num1')
const numero2 = document.getElementById('num2')
const operando = document.getElementById('operando')
const resultado = document.getElementById('display')
const botones = document.querySelector('#botones')
let num1=0

botones.addEventListener('click', (evento)=>{
    if(evento.target.id=='suma'){
        operando.innerHTML='+'
        num1=numero1.value
        numero1.value=''
    }
    if(evento.target.id=='rest'){
        operando.innerHTML='-'
        num1=numero1.value
        numero1.value=''
    }
    if (evento.target.id=='divi'){
        operando.innerHTML='/'
        num1=numero1.value
        numero1.value=''
    }
    if (evento.target.id=='mult'){
        operando.innerHTML='*'
        num1=numero1.value
        numero1.value=''
    }
    if(evento.target.id=='igual'){
        if (operando.innerHTML=='+'){
            let suma=+num1 + (+numero1.value)
            resultado.innerHTML=suma
            numero1.value=''
        }else if (operando.innerHTML=='-'){
            let resta=num1 - numero1.value
            resultado.innerHTML=resta
            numero1.value=''
        }else if (operando.innerHTML=='/'){
            let divi=num1 / numero1.value
            resultado.innerHTML=divi
            numero1.value=''
        }else if (operando.innerHTML=='*'){
            let mult=num1 * numero1.value
            resultado.innerHTML=mult
            numero1.value=''
        }else{
            alert('Selecciona una operación')
        }
    }
    if (evento.target.id=='limpiar'){
        resultado.innerHTML=''
        operando.innerHTML=''
        numero1.value=''
        numero2.value=''
    }
})

