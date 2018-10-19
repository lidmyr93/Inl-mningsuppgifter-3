// Blueprint
function Person(namn,epost,mobil,gatuadress,postnummer,ort){
    this.namn   = namn;
    this.epost  = epost;
    this.mobil  = mobil;
    this.adress = {
      gatuadress : gatuadress,
      postnummer : postnummer,
      ort        : ort,
    }
    // Metod som snyggar till utskriften i consolen 
    this.print = function () {
        console.log(this.namn + '\n' + '\n' + this.adress.gatuadress + '\n' + this.adress.postnummer + ' ' + this.adress.ort);
    }
};
// personerna som finns skapas hära
let magnus = new Person('Magnus Lidmyr','magnus.lidyr@gmail.com','070-000 00 00','Solnavägen 3', '160 00', 'Solna');
let kalle  = new Person('Kalle Anka', 'kalle.anka@gmail.com','070-111 11 11','Solnavägen 4','133 33','Solna');

magnus.print();
kalle.print();
