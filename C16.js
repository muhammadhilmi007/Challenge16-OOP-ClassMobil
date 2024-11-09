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

*/

class BanMobil {
  constructor(brand, ukuran) {
    this.brand = brand;
    this.ukuran = ukuran;
  }
}

class Mobil {
  constructor(varian, pintu, kursi, ban, tahun, garansi) {
    this.varian = varian;
    this.pintu = pintu;
    this.kursi = kursi;
    this.ban = ban;
    this.tahun = tahun;
    this.garansi = garansi;
    this.sn = this.generateSN(); // generate serial number
  }

  generateSN() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0, // Kembalikan angka acak antara 0 (inklusif) dan 16 (eksklusif)
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}

class PabrikMobil {
  constructor() {
    this.mobil2 = [];
    this.varian = ["agya", "rush", "avanza", "innova", "zenix", "camry"];
    this.ban = [
      new BanMobil("dunlop", "15 inch"),
      new BanMobil("bridgestone", "16 inch"),
      new BanMobil("michelin", "17 inch"),
      new BanMobil("goodyear", "18 inch")
    ];
  }

  produksi(tahun) {
    const jumlahMobil = Math.floor(Math.random() * (8 - 4 + 1)) + 4; // Math Floor - Mengembalikan bilangan bulat terbesar yang kurang dari atau sama dengan argumen
    for (let i = 0; i < jumlahMobil; i++) {
      const varian =
        this.varian[Math.floor(Math.random() * this.varian.length)];
      const pintu = Math.random() > 0.5 ? 4 : 2;              
      const kursi = Math.floor(Math.random() * 3 + 4) + " seater";
      const ban = this.ban[Math.floor(Math.random() * this.ban.length)];
      const garansi = Math.floor(Math.random() * 3) + 1;

      const mobil = new Mobil(varian, pintu, kursi, ban, tahun, garansi);
      this.mobil2.push(mobil);

      console.log(`\nno. ${this.mobil2.length}`);
      console.log(`varian      : ${mobil.varian}`);
      console.log(`sn          : ${mobil.sn}`);
      console.log(`door        : ${mobil.pintu}`);
      console.log(`seat        : ${mobil.kursi}`);
      console.log(`tyre        : ${mobil.ban.brand} ${mobil.ban.ukuran}`);
      console.log(`year        : ${mobil.tahun}`);
      console.log(`warranty    : ${mobil.garansi} year`);
    }
  }

  simulasiGaransi(simulasiTahun) {
    console.log(`\nhasil simulasi garansi semua mobil pada tahun ${simulasiTahun}:`);
    this.mobil2.forEach((mobil, index) => { // forEach - Menjalankan fungsi untuk setiap elemen dalam array
      console.log(`\nno. ${index + 1}`);
      console.log(`varian      : ${mobil.varian}`);
      console.log(`sn          : ${mobil.sn}`);
      console.log(`door        : ${mobil.pintu}`);
      console.log(`seat        : ${mobil.kursi}`);
      console.log(`tyre        : ${mobil.ban.brand} ${mobil.ban.ukuran}`);
      console.log(`year        : ${mobil.tahun}`);
      console.log(`warranty    : ${mobil.garansi} year`);

      const umur = simulasiTahun - mobil.tahun;
      if (umur > mobil.garansi) {
        console.log(
          `\n status on ${simulasiTahun} this guarantee status is expired`
        );
      } else {
        console.log(
          `\n status on ${simulasiTahun} this guarantee status is active`
        );
      }
    });
  }
}

const toyota = new PabrikMobil()
toyota.produksi(2020)
toyota.produksi(2022)
toyota.simulasiGaransi(2025)
