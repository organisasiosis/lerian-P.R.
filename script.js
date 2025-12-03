function formatRupiah(input) {
    let angka = input.value.replace(/\D/g, "");
    input.value = new Intl.NumberFormat("id-ID").format(angka);
}

function convertNumber(value) {
    return parseInt(value.replace(/\./g, "")) || 0;
}

function hitungKeuangan() {
    let pendapatan = convertNumber(document.getElementById("pendapatan").value);
    let pengeluaran = convertNumber(document.getElementById("pengeluaran").value);
    let target = convertNumber(document.getElementById("target").value);

    if (pendapatan <= 0 || pengeluaran <= 0 || target <= 0) {
        alert("Harap isi semua data dengan benar!");
        return;
    }

    let sisa = pendapatan - pengeluaran;
    if (sisa <= 0) {
        alert("Pengeluaran lebih besar dari pendapatan!");
        return;
    }

    let bulan = (target / sisa).toFixed(1);
    let tahun = Math.floor(bulan / 12);
    let sisaBulan = Math.round(bulan % 12);
    let persen = Math.min((sisa / target) * 100, 100).toFixed(1);

    document.getElementById("sisa").innerHTML = `Rp ${new Intl.NumberFormat("id-ID").format(sisa)}`;
    document.getElementById("waktu").innerHTML = `${bulan} bulan (${tahun} tahun ${sisaBulan} bulan)`;
    document.getElementById("persen").innerHTML = `${persen}%`;

    document.getElementById("progress").style.width = `${persen}%`;
    document.getElementById("hasil").classList.remove("hidden");
}
