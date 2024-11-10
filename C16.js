/* 
    buatlah class class untuk mengolah proses pembuatan mobil di sebuah pabrik mobil.

    data yang diolah adalah sebagai berikut:
        1. tiap varian mobil dibuat perkelas, ambil contoh pabrik toyota yang memiliki varian seperti rush, agya dsb.
        2. dari satu mobil terdapat atribut seperti ban, kursi, puntu dsb.
        3. buatlah fungsi untuk melakukan proses produksi didalam pabrik tersebut per tahun. gunakan algoritma random di javascript
            untuk jumlahnya.
        4. buatlah fungsi untuk melakukan perhitungan garansi setiap mobilnya dengan melakukan simulasi penambahan umur mobil. yang
            menghasilkan status garansi untuk setiap mobil yang telah di produksi.

    Outputnya adalah sebagai berikut:
        total mobil yang ada adalah 12 mobil hasil dari dua kali produksi, dan ketika melakukan simulasi garansi kedua belas mobil dilakukan
        perhitungan status garansi pada tahun 2025.

Driver Code:
class BanMobil {
  constructor(brand, ukuran) {
    
  }
}

class Mobil {

}

class PabrikMobil {
  constructor() {
this.mobil2 = []
  }

  produksiMobil(tahun) {

  }

  simulasiGaransi(tahun) {

  }
}

const toyota = new PabrikMobil()
toyota.produksiMobil(2020)
toyota.produksiMobil(2022)
toyota.simulasiGaransi(2025)

Output:
hasil produksi:

no. 1
varian      : agya
sn          : 451cb423-6398-40cc-9cc3-bd9c20904833
door        : 4
seat        : 5 seater
tyre        : dunlop 15 inch
year        : 2020
warranty    : 1 year

hasil simulasi garansi semua mobil pada tahun 2025:
no. 1
varian      : agya
sn          : 451cb423-6398-40cc-9cc3-bd9c20904833
door        : 4
seat        : 5 seater
tyre        : dunlop 15 inch
year        : 2020
warranty    : 1 year

status on 2025 this guarantee status is expired

Keyword: OOP, Inheritance, Class, Composition, Aggregation, static method, prototype method

*/

class Tyre {
  constructor(brand, size) {
    this.brand = brand;
    this.size = size;
  }
}

// Class dasar untuk kendaraan
class Vehicle {
  constructor(varians, door, seat, year) {
    this.varians = varians;
    this.door = door; 
    this.seat = seat;
    this.year = year;
    this.sn = this.generateSN();
  }

  generateSN() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g, // RegEx
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}

// Class dasar untuk mobil
class Car extends Vehicle {
  constructor(varians, door, seat, tyre, year, guarantee) {
    super(varians, door, seat, year);
    this.tyre = tyre;
    this.guarantee = guarantee;
  }
}

// Merek-merek mobil mewarisi dari Car
class Agya extends Car {
  constructor(tyre, year, guarantee) {
    super("agya", 4, "4 seater", tyre, year, guarantee);
  }
}

class Rush extends Car {
  constructor(tyre, year, guarantee) {
    super("rush", 4, "7 seater", tyre, year, guarantee);
  }
}

class Avanza extends Car {
  constructor(tyre, year, guarantee) {
    super("avanza", 4, "7 seater", tyre, year, guarantee);
  }
}

class Innova extends Car {
  constructor(tyre, year, guarantee) {
    super("innova", 4, "8 seater", tyre, year, guarantee);
  }
}

class Zenix extends Car {
  constructor(tyre, year, guarantee) {
    super("zenix", 4, "8 seater", tyre, year, guarantee);
  }
}

class Camry extends Car {
  constructor(tyre, year, guarantee) {
    super("camry", 4, "5 seater", tyre, year, guarantee);
  }
}

class CarFactory {
  constructor() {
    this.cars = []; // Array untuk menyimpan data
    this.varians = [Agya, Rush, Avanza, Innova, Zenix, Camry];
    this.tyre = [
      new Tyre("dunlop", "15 inch"),
      new Tyre("bridgestone", "16 inch"),
      new Tyre("michelin", "17 inch"),
      new Tyre("goodyear", "18 inch")
    ];
  }

  produce(year) {
    const totalCar = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
    for (let i = 0; i < totalCar; i++) {
      const CarClass = this.varians[Math.floor(Math.random() * this.varians.length)];
      const tyre = this.tyre[Math.floor(Math.random() * this.tyre.length)];
      const guarantee = Math.floor(Math.random() * 3) + 1;

      const car = new CarClass(tyre, year, guarantee);
      this.cars.push(car);

      console.log(`\nno. ${this.cars.length}`);
      console.log(`varian      : ${car.varians}`);
      console.log(`sn          : ${car.sn}`);
      console.log(`door        : ${car.door}`);
      console.log(`seat        : ${car.seat}`);
      console.log(`tyre        : ${car.tyre.brand} ${car.tyre.size}`);
      console.log(`year        : ${car.year}`);
      console.log(`warranty    : ${car.guarantee} year`);
    }
  }

  guaranteeSimulation(simulationYear) {
    console.log(`\nhasil simulasi garansi semua mobil pada tahun ${simulationYear}:`);
    this.cars.forEach((car, index) => {
      console.log(`\nno. ${index + 1}`);
      console.log(`varian      : ${car.varians}`);
      console.log(`sn          : ${car.sn}`);
      console.log(`door        : ${car.door}`);
      console.log(`seat        : ${car.seat}`);
      console.log(`tyre        : ${car.tyre.brand} ${car.tyre.size}`);
      console.log(`year        : ${car.year}`);
      console.log(`warranty    : ${car.guarantee} year`);

      const age = simulationYear - car.year;
      if (age > car.guarantee) {
        console.log(
          `\n status on ${simulationYear} this guarantee status is expired`
        );
      } else {
        console.log(
          `\n status on ${simulationYear} this guarantee status is active`
        );
      }
    });
  }
}

const toyota = new CarFactory()
toyota.produce(2020)
toyota.produce(2022)
toyota.guaranteeSimulation(2025)
