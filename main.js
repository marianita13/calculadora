const numero1 = document.getElementById('num1')
const numero2 = document.getElementById('num2')
const operando = document.getElementById('operando')
const resultado = document.getElementById('display')
const botones = document.querySelector('#botones')

botones.addEventListener('click', (evento)=>{
    if(evento.target.id=='suma'){
        operando.innerHTML='+'
    }
    if(evento.target.id=='rest'){
        operando.innerHTML='-'
    }
    if (evento.target.id=='divi'){
        operando.innerHTML='/'
    }
    if (evento.target.id=='mult'){
        operando.innerHTML='*'
    }
    if(evento.target.id=='igual'){
        if (operando.innerHTML=='+'){
            let suma=+numero1.value+ (+numero2.value)
            resultado.innerHTML=suma
        }else if (operando.innerHTML=='-'){
            let resta=numero1.value-numero2.value
            resultado.innerHTML=resta
        }else if (operando.innerHTML=='/'){
            let divi=numero1.value/numero2.value
            resultado.innerHTML=divi
        }else if (operando.innerHTML=='*'){
            let mult=numero1.value*numero2.value
            resultado.innerHTML=mult
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

