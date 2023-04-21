const operando = document.getElementById('operando')
const resultado = document.getElementById('display')
const botones = document.querySelector('#botones')
let num1=''
let nuevo=[]
let result=[]

botones.addEventListener('click', (evento)=>{
    if (evento.target.id=='btn#0'){
        num1=0
        resultado.textContent+=num1
        result.push(num1)
        // numeros2=numeros2+num1
        num1=''
        console.log(result)
    }
    if (evento.target.id=='btn#1'){
        num1=1
        resultado.textContent+=num1
        result.push(num1)
        // numeros2=numeros2+num1
        num1=''
        console.log(result)
    }
    if (evento.target.id=='btn#2'){
        num1=2
        resultado.textContent+=num1
        result.push(num1)
        // numeros2=numeros2+num1
        num1=''
        console.log(result)
    }
    if (evento.target.id=='btn#3'){
        num1=3
        resultado.textContent+=num1
        result.push(num1)
        // numeros2=numeros2+num1
        num1=''
        console.log(result)
    }
    if (evento.target.id=='btn#4'){
        num1=4
        resultado.textContent+=num1
        result.push(num1)
        // numeros2=numeros2+num1
        num1=''
        console.log(result)
    }
    if (evento.target.id=='btn#5'){
        num1=5
        resultado.textContent+=num1
        result.push(num1)
        // numeros2=numeros2+num1
        num1=''
        console.log(result)
    }
    if (evento.target.id=='btn#6'){
        num1=6
        resultado.textContent+=num1
        result.push(num1)
        // numeros2=numeros2+num1
        num1=''
        console.log(result)
    }
    if (evento.target.id=='btn#7'){
        num1=7
        resultado.textContent+=num1
        result.push(num1)
        // numeros2=numeros2+num1
        num1=''
        console.log(result)
    }
    if (evento.target.id=='btn#8'){
        num1=8
        resultado.textContent+=num1
        result.push(num1)
        // numeros2=numeros2+num1
        num1=''
        console.log(result)
    }
    if (evento.target.id=='btn#9'){
        num1=9
        resultado.textContent+=num1
        result.push(num1)
        // numeros2=numeros2+num1
        num1=''
        console.log(result)
    }


    if(evento.target.id=='suma'){
        let suma ='+'
        resultado.textContent+='+'
        result.push(suma)
        // numeros2=''
        console.log(result);
    }
    if(evento.target.id=='rest'){
        let resta = '-'
        resultado.textContent+='-'
        result.push(resta)
        // numeros2=''
        console.log(result);
    }
    if (evento.target.id=='divi'){
        let divi = '/'
        resultado.textContent+='/'
        result.push(divi)
        // numeros2=''
        console.log(result);
    }
    if (evento.target.id=='mult'){
        let mult = '*'
        resultado.textContent+='*'
        result.push(mult)
        // numeros2=''
        console.log(result);
    }

    if(evento.target.id=='igual'){
        nuevo = result.join('')
        console.log(typeof(nuevo));        
    }
    if (evento.target.id=='limpiar'){
        resultado.innerHTML=''
        result=[]
    }
})
