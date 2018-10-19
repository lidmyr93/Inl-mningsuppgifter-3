// funktion som tar emot Radien från anropet och räknar ut volymen och arean av en sfär.
function klot(x){
    volym = (4 * Math.PI * (Math.pow(x,3))) / 3; // Volym uträkning
    area  = 4 * Math.PI * (Math.pow(x,2));       // area uträkning
    console.log('Volymen är ' + volym.toFixed(2) + '\n' + 'Arean är '+ area.toFixed(2)); // Utskrift med toFixed() för att undvika alla decimaler.
}
klot(10); // anrop med valfri (radie)
