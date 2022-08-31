/*
// Vamos criar um programa que:
// 1- Peça ao usuário para inserir seu nome, e sua cor favorita. 
const nome = prompt("Digite seu nome")
const cor = prompt("Digite sua cor favorita")
const citacao = prompt("Qual a sua citação favorita?")

// 5- Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas;
const nomeMaiusculo = nome.toUpperCase()

// 2- Em seguida, o programa deve imprimir a mensagem:
// A cor favorita de pessoa é cor;

// 2.1- Vamos fazer o programa duas vezes. Na primeira, com concatenação, 
// 3- Altere a primeira string para que a pessoa também envie sua citação favorita.
// 3.1 -Essa citação deve ser impressa entre aspas.
console.log("A cor favorita de " + nomeMaiusculo + " é " + cor + " e sua citação favorita é \"" + citacao + "\".");

// 2.2- E a segunda com Template Strings.
// 4- Altere a segunda string que criamos, para que seja impressa dessa forma (utilizando apenas um console.log):
console.log(`Nome: ${nomeMaiusculo} \nCor favorita: ${cor}`);

// 6- Exiba no console quantos caracteres tem o nome da pessoa.
console.log(`Quantas letras tem o nome ${nome}? ${nome.length}`);

// 7- Cheque se o nome da pessoa possui a letra A
const verificarLetra = nome.includes("a")
console.log("O nome tem letra A? " + verificarLetra);
*/

//EXERCICIOS DE FIXAÇÃO
// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima no console a mensagem no formato abaixo:
// O e-mail emailDoUsuario foi cadastrado com sucesso. Boas vindas, nomeDoUsuario!

// 2. Adicione à mensagem anterior a quantidade de caracteres presente no nome da pessoa.

const nomeDoUsuario = prompt("Digite seu nome:")
const emailDoUsuario = prompt("Digite seu email:")

console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}! Seu nome tem ${nomeDoUsuario.length} letras`);

const frase = `O email ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}! Seu nome tem ${nomeDoUsuario.length} letras`
const letrasTrocadas = frase.replaceAll("r", "L")
console.log(letrasTrocadas)

console.log("O email possui @? " + emailDoUsuario.includes("@"));
