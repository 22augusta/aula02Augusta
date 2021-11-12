//concatenar

/*console.log('Hello' + ' ' + "World")

console.log('Hello' + "World")

var myName = 'Augusta';

console.log('Hello' + " " + myName )

let myName2 = 'Maria'

console.log(`Hello ${myName2}`)*/

//---------------

/*const x = 0
    
y = 'Morango'

console.log(x,'\n',y)*/

//____________________________
//Let mes = x;

const input = require ("readline-sync")

const mes = input.question("Qual o mes?")

if(mes === "Fevereiro") {
    console.log("Tem Carnaval")
}

else if(mes === "Junho") {
    console.log("Tem São João")
} 

else if(mes === "Dezembro") {
    console.log('É Natal')
}
else {console.log(`${mes} não é um mês festivo`)}