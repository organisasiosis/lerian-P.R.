function formatRupiah(input) {
    let value = input.value.replace(/\D/g, ""); // hanya angka
    let formatted = new Intl.NumberFormat("id-ID").format(value);
    input.value = formatted;
}

function getNumber(value) {
    return parseInt(value.replace(/\./g, "")) || 0;
}

function hitungKeuangan() {
    let pendapatan = getNumber(document.getElementById("pendapatan").value);
    let pengeluaran = getNumber(document.getElementById("pengeluaran").value);
    let target = getNumber(document.getElementById("target").value);

    if (pendapatan <= 0 || pengeluaran <= 0 || target <= 0) {
        alert("Masukkan semua data dengan benar!");
        return;
    }

    let sisa = pendapatan - pengeluaran;
    if (sisa <= 0) {
        alert("Pengeluaran lebih besar dari pendapatan!");
        return;
    }

    let bulan = (target / sisa).toFixed(1);

    document.getElementById("sisa").innerHTML = `Rp ${new Intl.NumberFormat("id-ID").format(sisa)}`;
    document.getElementById("waktu").innerHTML = `${bulan} bulan`;
        }
