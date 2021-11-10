let HitungBarang = (kualitasBarang, Qty) => {
  if (kualitasBarang === "A") {
    if (Qty >= 13) {
      var diskon = 0;
      for (let i = 13; i < Qty; i++) {
        diskon += 231;
      }
      let hargaBarang = Qty * 4550;
      let total = Math.floor(hargaBarang - diskon);

      console.log("Total harga barang", hargaBarang);
      console.log("Potongan", diskon);
      console.log("Total yang harus dibayar", Math.floor(total));
    } else {
      console.log("Total yang harus dibayar", Qty * 4550);
    }
  }
  if (kualitasBarang === "B") {
    if (Qty >= 7) {
      let hargaBarang = Qty * 5330;
      let total = Math.floor(hargaBarang * 0.23);

      console.log("Total harga barang", hargaBarang);
      console.log("Potongan", total);
      console.log("Total yang harus dibayar", Math.floor(hargaBarang - total));
    } else {
      console.log(Qty * 5330);
    }
  }
  if (kualitasBarang === "C") {
    console.log("Total yang harus dibayar", Qty * 8653);
  }
};

HitungBarang("B", 15);
