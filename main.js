const operando = document.getElementById('operando')
const resultado = document.getElementById('display')
const botones = document.querySelector('#botones')
let num1=''
let variable=''
let numeros2=''
let result=[]
let total;

botones.addEventListener('click', (evento)=>{
    if (evento.target.id=='btn#0'){
        num1=0
        resultado.textContent+=num1
        numeros2+=num1
    }
    if (evento.target.id=='btn#1'){
        num1=1
        resultado.textContent+=num1
        numeros2+=num1
    }
    if (evento.target.id=='btn#2'){
        num1=2
        resultado.textContent+=num1
        numeros2+=num1
    }
    if (evento.target.id=='btn#3'){
        num1=3
        resultado.textContent+=num1
        numeros2+=num1
    }
    if (evento.target.id=='btn#4'){
        num1=4
        resultado.textContent+=num1
        numeros2+=num1
    }
    if (evento.target.id=='btn#5'){
        num1=5
        resultado.textContent+=num1
        numeros2+=+num1
    }
    if (evento.target.id=='btn#6'){
        num1=6
        resultado.textContent+=num1
        numeros2+=+num1
    }
    if (evento.target.id=='btn#7'){
        num1=7
        resultado.textContent+=num1
        numeros2+=num1
    }
    if (evento.target.id=='btn#8'){
        num1=8
        resultado.textContent+=num1
        numeros2+=num1
    }
    if (evento.target.id=='btn#9'){
        num1=9
        resultado.textContent+=num1
        numeros2+=num1
    }


    if(evento.target.id=='suma'){
        resultado.textContent+='+'

        if (numeros2==''){
            result.push('+')
        }else{
            result.push(+numeros2)
            result.push('+')
            numeros2=''
        }
    }
    if(evento.target.id=='rest'){
        resultado.textContent+='-'

        if (numeros2==''){
            result.push('-')
        }else{
            result.push(+numeros2)
            result.push('-')
            numeros2=''
        }
    }
    if (evento.target.id=='divi'){
        resultado.textContent+='/'

        if (numeros2==''){
            result.push('/')
        }else{
            result.push(+numeros2)
            result.push('/')
            numeros2=''
        }
    }
    if (evento.target.id=='mult'){
        resultado.textContent+='*'

        if (numeros2==''){
            result.push('*')
        }else{
            result.push(+numeros2)
            result.push('*')
            numeros2=''
        }
    }

    if(evento.target.id=='igual'){
        console.log(result)
        result.push(+numeros2)
        console.log(result);
        for (i=0; i<result.length; i++){
            if (result[i]=='+'){
                total=result[i-1]+result[i+1]
                result.splice(i-1,4,total)
                i=0
            }else if (result[i]=='-'){
                total=result[i-1]-result[i+1]
                result.splice(i-1,3,total)
                i=0
            }else if (result[i]=='*'){
                total=result[i-1]*result[i+1]
                result.splice(i-1,3,total)
                i=0
            }else if (result[i]=='/'){
                total=result[i-1]/result[i+1]
                result.splice(i-1,3,total)
                i=0
            }
        result=[]
        numeros2=''
        result.push(total)
        resultado.textContent=total

    }
    if (evento.target.id=='limpiar'){
        resultado.innerHTML=''
        result=[]
        numeros2=''
        variable=''
        console.log(result);
    }
    }
})
