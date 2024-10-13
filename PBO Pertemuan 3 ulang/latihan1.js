class kapal {
   constructor(nama, jenis, tujuan, jumlah) {
     this.nama = nama;
     this.jenis = jenis;
     this.jumlah = jumlah;
     this.tujuan = tujuan;
     this._status = 'tersedia';
   }
 
   getstatus() {
     return this._status;
   }
 
   setstatustidaktersedia() {
     this._status = 'tidak tersedia';
     return `${this._status}`;
   }
 
   infokapal() {
     return `kapal ${this.nama} berjenis kapal ${this.jenis} tujuan ${this.tujuan}`;
   }
 }
 
 class kodekapal extends kapal {
   constructor(nama, jenis, tujuan, kodekapal, jumlah) {
     super(nama, jenis, tujuan, jumlah);
     this.kodekapal = kodekapal;
   }
 
   kodekapalInfo() {
     return `dengan kode kapal ${this.kodekapal}`;
   }
 }
 
 class kapaltanker extends kapal {
   constructor(nama, jenis, tujuan, jumlah, kapasitastanker) {
     super(nama, jenis, tujuan, jumlah);
     this.kapasitastanker = kapasitastanker;
   }
 
   info() {
     console.log(
       `kapal ${this.nama} berjenis kapal ${this.jenis} tujuan ${this.tujuan} berjumlah ${this.jumlah} dengan kapasitas ${this.kapasitastanker} MT`
     );
   }
 }
 
 class kapalpenumpang extends kodekapal {
   constructor(nama, jenis, tujuan, kodekapal, kapasitaspenumpang) {
     super(nama, jenis, tujuan, kodekapal);
     this.kapasitaspenumpang = kapasitaspenumpang;
   }
 
   info() {
     console.log(
       this.infokapal() +
         ' ' +
         this.kodekapalInfo() +
         ` berkapasitas ${this.kapasitaspenumpang} orang`
     );
   }
 }
 
 class kapalnelayan extends kodekapal {
   constructor(nama, jenis, tujuan, kodekapal, kapasitasmuatan) {
     super(nama, jenis, tujuan, kodekapal);
     this.kapasitasmuatan = kapasitasmuatan;
   }
 
   info() {
     console.log(
       `kapal ${this.nama} berjenis kapal ${this.jenis} bermuatan ${this.kapasitasmuatan} TON`
     );
   }
 }
 
 class kapalcargo extends kodekapal {
   constructor(nama, jenis, tujuan, kodekapal, kapasitascargo) {
     super(nama, jenis, tujuan, kodekapal);
     this.kapasitascargo = kapasitascargo;
   }
 
   info() {
     console.log(
       `kapal ${this.nama} berjenis kapal ${this.jenis} tujuan ${this.tujuan} ` +
         this.kodekapalInfo() +
         ` berkapasitas ${this.kapasitascargo} TEU ` +
         this.getstatus()
     );
   }
 }
 
 class kapalcontainer extends kodekapal {
   constructor(nama, jenis, tujuan, kodekapal, kapasitascontainer) {
     super(nama, jenis, tujuan, kodekapal);
     this.kapasitascontainer = kapasitascontainer;
   }
 
   info() {
     console.log(
       `kapal ${this.nama} berjenis kapal ${this.jenis} tujuan ${this.tujuan} ` +
         this.kodekapalInfo() +
         ` berkapasitas ${this.kapasitascontainer} FEU ` +
         this.getstatus()
     );
   }
 }
 
 class kapalselam extends kodekapal {
   constructor(nama, jenis, tujuan, kodekapal, bahanbakar) {
     super(nama, jenis, tujuan, kodekapal);
     this.bahanbakar = bahanbakar;
   }
 
   info() {
     console.log(
       `kapal ${this.nama} berjenis kapal ${this.jenis} tujuan ${this.tujuan} ` +
         this.kodekapalInfo() +
         ` bahanbakar ${this.bahanbakar} ` +
         this.getstatus()
     );
   }
 }
 
 // Contoh Objek
 let kapal1 = new kapaltanker('pertamina', 'tanker', 'serang', 20, 2000);
 let kapal2 = new kapalpenumpang('bali', 'penumpang', 'semarang', 815, 568);
 let kapal3 = new kapalnelayan('bali', 'nelayan', 'bali', 303, 500);
 let kapal4 = new kapalcargo('evergreen', 'cargo', 'japan', 404, 1000);
 let kapal5 = new kapalcontainer('socialkontrol', 'container', 'hawai', 402, 10000);
 let kapal6 = new kapalselam('kopaska', 'selam', 'selatsunda', 406, 'nuklir');x  
 
 // Menjalankan Info
 kapal1.info();
 kapal2.info();
 kapal3.info();
 kapal4.info();
 kapal5.info();
 kapal6.info();
 