function insert(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function Clear(){
    document.querySelector("#resultado").innerHTML = ""
}

function back(){
    var resultado = document.querySelector("#resultado").innerHTML
    document.querySelector("#resultado").innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.querySelector("#resultado").innerHTML
    if(resultado){
        document.querySelector("#resultado").innerHTML = eval(resultado)
    }else{
        document.querySelector("#resultado").innerHTML = "NULL"
    }
}