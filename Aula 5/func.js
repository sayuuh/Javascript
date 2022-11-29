function somar(a, b){
    console.log(a + b)
}
somar(15, 2)
somar()
somar(14)
somar(1, 4, 5, 6, 23, 54, 21, 43)

function returnSoma(a, b = 0){
    return  a + b
}
console.log(returnSoma(1, 15))

// Armazenar uma função em uma variável 

const vlSomar = function(a, b){
    console.log(a + b)
}
vlSomar(1, 5)

// Arrow function (é uma variável que virou uma função)

const soma = (a, b) => {
    // Bloco lógico
    console.log('Teste Arrow')
    return a + b
}
console.log(soma())

const subtracao = (a, b) => a - b
console.log(subtracao(15, 3))
// JS já entende que não precisa passar o return. 

const teste1 = () => console.log('teste')
teste1()

/*
var a = 20
function teste(){
    var a = 10
    console.log(a)
}
{
    var a = 15
}
teste()
console.log(a)

console.log("LET")
let b = 1
function teste(){
    let b = 2
    console.log(b)
}
{
    let b = 3
    console.log(b)
}
teste()
console.log(b)
*/