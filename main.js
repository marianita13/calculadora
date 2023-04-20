const numero1 = document.getElementById('num1')
const numero2 = document.getElementById('num2')
const operando = document.getElementById('operando')
const resultado = document.getElementById('display')
const botones = document.querySelector('#botones')
let num1=''
let numeros=[]

botones.addEventListener('click', (evento)=>{
    if (evento.target.id=='btn#0'){
        num1=0
        resultado.textContent+=num1
        num1=''
    }
    if (evento.target.id=='btn#1'){
        num1=1
        resultado.textContent+=num1
        num1=''
    }
    if (evento.target.id=='btn#2'){
        num1=2
        resultado.textContent+=num1
        num1=''
    }
    if (evento.target.id=='btn#3'){
        num1=3
        resultado.textContent+=num1
        num1=''
    }
    if (evento.target.id=='btn#4'){
        num1=4
        resultado.textContent+=num1
        num1=''
    }
    if (evento.target.id=='btn#5'){
        num1=5
        resultado.textContent+=num1
        num1=''
    }
    if (evento.target.id=='btn#6'){
        num1=6
        resultado.textContent+=num1
        num1=''
    }
    if (evento.target.id=='btn#7'){
        num1=7
        resultado.textContent+=num1
        num1=''
    }
    if (evento.target.id=='btn#8'){
        num1=8
        resultado.textContent+=num1
        num1=''
    }
    if (evento.target.id=='btn#9'){
        num1=9
        resultado.textContent+=num1
        num1=''
    }


    if(evento.target.id=='suma'){
        resultado.textContent+='+'
    }
    if(evento.target.id=='rest'){
        resultado.textContent+='-'
    }
    if (evento.target.id=='divi'){
        resultado.textContent+='/'
    }
    if (evento.target.id=='mult'){
        resultado.textContent+='*'
    }

    if(evento.target.id=='igual'){

    }
    if (evento.target.id=='limpiar'){
        resultado.innerHTML=''
    }
})

