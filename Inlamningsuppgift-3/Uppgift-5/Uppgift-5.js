// En funktion som genererar 1000 tal mellan 1 och 6 med hjälp av en for-sats.
// Alla tal pushas in i en array som heter rolls[] som sedan returnerar rolls[].
function randomDice(){ 
    let rolls = []; // Tom array som ska ta emot alla siffror
    for (i = 0; i < 1000; i++){
        rolls.push(Math.ceil(Math.random() * 6 )); // Generatorn och push till rolls[].
 }
 return rolls;
}
// Print funktion som tar emot rolls[] och sorterar siffrorna.
function print(){
   let rollsResult = randomDice(); // Anrop på funktionen randomDice() som lagrar resultatet i en variabel.
   let value = [0,0,0,0,0,0];      // En array där siffrorna ska sorteras.
   // Iteration över arrayen
   for (let numb in rollsResult){
       // Hämtar alla ettor och lägger in dom i value[] på index 0, osv.
       if      (rollsResult[numb] == 1){ value[0]++ } 
       else if (rollsResult[numb] == 2){ value[1]++ }
       else if (rollsResult[numb] == 3){ value[2]++ }
       else if (rollsResult[numb] == 4){ value[3]++ }
       else if (rollsResult[numb] == 5){ value[4]++ }
       else if (rollsResult[numb] == 6){ value[5]++ }
   };

console.log( 'Ettor\t Tvåor\t Treor\t Fyror\t Femmor\t Sexor \n',
            value[0],'\t',value[1],'\t',value[2],'\t',value[3],'\t',value[4],'\t',value[5]
    );
}

print();