// function soma (numero1,numero2){
//    return numero1+numero2 
// }
// console.log(soma(9,7));

// function areaquadrado (lado){
//    return lado**2;
// }
// console.log(areaquadrado(6));
// let 1= prompt(1?)
// let 2= prompt(2?)
// let 3= prompt(3?)

// let media=function(1,2,3){
// return (1,2,3)/3;
// }
// console.log ( media(3,7,9))

let estados=['DF', 'GO', 'AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE', 'AC', 'AP', 'AM', 'PA', 'RO', 'RR', 'TO', 'ES', 'MG', 'RJ', 'SP', 'PR', 'SC', 'RS', 'MS', 'MG'];

let i=0;
while (i<estados.length){
   console.log(i);
   console.log(estados[i]);
   i=i+1;
}

for (let i = 0; i < estados.length; i++) {
   console.log(i);
   console.log(estados[i]);
   }

   let idade= parseInt(prompt('numero'));
   if(idade>17        ){
      console.log('pode dirigir');
   }

   else{
      console.log('ilegal dirigir');

   }
