function hitungKeuangan() {
    let pendapatan = document.getElementById("pendapatan").value;
    let pengeluaran = document.getElementById("pengeluaran").value;
    let target = document.getElementById("target").value;

    if (pendapatan <= 0 || pengeluaran <= 0 || target <= 0) {
        document.getElementById("hasil").innerHTML = "Masukkan semua data dengan benar!";
        return;
    }

    let sisa = pendapatan - pengeluaran;

    if (sisa <= 0) {
        document.getElementById("hasil").innerHTML = 
            "Pengeluaran lebih besar dari pendapatan! Kurangi pengeluaran atau tambah pendapatan.";
        return;
    }

    let bulan = (target / sisa).toFixed(1);

    document.getElementById("hasil").innerHTML =
        `Sisa uang per bulan: Rp ${sisa} <br> 
         Perkiraan waktu untuk mencapai target: ${bulan} bulan`;
}
