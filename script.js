/*
2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro.
*/

let alturaPedro = 1.5;
let alturaLucas = 1.1;

let contagemAnos = 0;

while (alturaPedro >= alturaLucas){
    alturaPedro = alturaPedro + 0.02;
    alturaLucas = alturaLucas + 0.03;
    contagemAnos++
}
console.log(`Pasaram ${contagemAnos} anos e lucas e pedro tem a mesma altura.`)
console.log(`altur pedro ${alturaPedro} altura lucas ${alturaLucas}`)







