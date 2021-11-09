const input = require ("readline-sync")

console.log("Olá!Sejam Bem vindos")

const idade = input.question("Qual sua idade?")

if (idade>=18 && idade<21) {
    console.log("Pode entrar, mas não pode beber")
 }
else if (idade>=21) {
    console.log("Pode entrar e tbm pode beber")
}
else { 
    console.log ("Não pode entrar BB")
}