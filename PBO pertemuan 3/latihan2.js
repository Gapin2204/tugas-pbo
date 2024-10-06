class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this._nama = nama;  // properti diubah menjadi private dengan konvensi _
        this._jenis = jenis;
        this._panjang = panjang;
        this._lebar = lebar;
    }

    // Getter dan setter untuk nama
    get nama() {
        return this._nama;
    }

    set nama(namaBaru) {
        this._nama = namaBaru;
    }

    // Getter dan setter untuk jenis
    get jenis() {
        return this._jenis;
    }

    set jenis(jenisBaru) {
        this._jenis = jenisBaru;
    }

    // Getter dan setter untuk panjang
    get panjang() {
        return this._panjang;
    }

    set panjang(panjangBaru) {
        this._panjang = panjangBaru;
    }

    // Getter dan setter untuk lebar
    get lebar() {
        return this._lebar;
    }

    set lebar(lebarBaru) {
        this._lebar = lebarBaru;
    }

    infoKapal() {
        return `Kapal ${this._nama} merupakan jenis ${this._jenis} yang berukuran ${this._panjang}m x ${this._lebar}m.`;
    }
}

class KapalFerry extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this._kapasitasPenumpang = kapasitasPenumpang;
    }

    // Getter dan setter untuk kapasitasPenumpang
    get kapasitasPenumpang() {
        return this._kapasitasPenumpang;
    }

    set kapasitasPenumpang(kapasitasBaru) {
        this._kapasitasPenumpang = kapasitasBaru;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this._kapasitasPenumpang} orang.`;
    }
}

class KapalKargo extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasMuatan) {
        super(nama, jenis, panjang, lebar);
        this._kapasitasMuatan = kapasitasMuatan;
    }

    // Getter dan setter untuk kapasitasMuatan
    get kapasitasMuatan() {
        return this._kapasitasMuatan;
    }

    set kapasitasMuatan(kapasitasBaru) {
        this._kapasitasMuatan = kapasitasBaru;
    }

    hitungTotalMuatan(beratPerKontainer, jumlahKontainer) {
        return beratPerKontainer * jumlahKontainer;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat membawa muatan hingga ${this._kapasitasMuatan} ton.`;
    }
}

class KapalTempur extends Kapal {
    constructor(nama, jenis, panjang, lebar, persenjataan) {
        super(nama, jenis, panjang, lebar);
        this._persenjataan = persenjataan;
    }

    // Getter dan setter untuk persenjataan
    get persenjataan() {
        return this._persenjataan;
    }

    set persenjataan(senjataBaru) {
        this._persenjataan = senjataBaru;
    }

    jumlahSenjata() {
        return `Kapal ini dilengkapi dengan ${this._persenjataan.length} jenis senjata: ${this._persenjataan.join(', ')}.`;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dipersenjatai dengan senjata: ${this._persenjataan.join(', ')}.`;
    }
}

// Contoh penggunaan
const kapalFerry = new KapalFerry("Budiono Siregar", "Ferry", 200, 100, 600);
console.log(kapalFerry.infoKapal());
kapalFerry.kapasitasPenumpang = 700;  // Mengubah kapasitas penumpang menggunakan setter
console.log(kapalFerry.infoKapal());

const kapalKargo = new KapalKargo("Logistik Nusantara", "Kargo", 300, 50, 5000);
console.log(kapalKargo.infoKapal());
console.log(`Total muatan: ${kapalKargo.hitungTotalMuatan(20, 100)} ton`);

const kapalTempur = new KapalTempur("Armada Garuda", "Tempur", 150, 30, ["Rudal", "Meriam", "Torpedo"]);
console.log(kapalTempur.infoKapal());
console.log(kapalTempur.jumlahSenjata());
kapalTempur.persenjataan = ["Rudal", "Meriam"];  // Mengubah senjata menggunakan setter
console.log(kapalTempur.jumlahSenjata());
