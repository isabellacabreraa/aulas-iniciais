let temperatura = [28,31,27,29,30,32,33];// Domingo a Sábado

let dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

let temperaturaTotal = 0;
for (let i = 0; i < temperatura.length; i++) {
     temperaturaTotal += temperatura[i];  
}

let mediaTempSemana = temperaturaTotal/temperatura.length
console.log(`A temperatura média da semana é: ${mediaTempSemana}`);

let tempMax= temperatura[0];
let diaTempMax = 0;
for (let i = 0; i < temperatura.length; i++) {
   if (temperatura[i] > tempMax){
    tempMax = temperatura [i];
    diaTempMax = 0
   } 
}
console.log("Temperatura máxima: " + tempMax +" graus " + "no " + dias[diaTempMax]);


let tempMin = temperatura[0];
let diaTempMin = 0;
for (let i = 0; i < temperatura.length; i++) {
    if (temperatura[i] < tempMin){
        tempMin = temperatura [i];
        diaTempMin = 0
    }   
}
console.log("Temperatura minima: " + tempMin +" graus " + "no " + dias[diaTempMin]);




