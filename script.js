function formatRupiah(input) {
    let value = input.value.replace(/\D/g, "");
    let formatted = new Intl.NumberFormat("id-ID").format(value);
    input.value = formatted;
}

function toNumber(value) {
    return parseInt(value.replace(/\./g, "")) || 0;
}

function hitungKeuangan() {
    let pendapatan = toNumber(document.getElementById("pendapatan").value);
    let pengeluaran = toNumber(document.getElementById("pengeluaran").value);
    let target = toNumber(document.getElementById("target").value);

    if (!pendapatan || !pengeluaran || !target) {
        alert("Harap masukkan semua data!");
        return;
    }

    let sisa = pendapatan - pengeluaran;
    if (sisa <= 0) {
        alert("Sisa uang tidak cukup untuk menabung!");
        return;
    }

    let bulan = (target / sisa).toFixed(1);
    let progressPercent = ((sisa / target) * 100).toFixed(1);

    // simpan ke localStorage
    localStorage.setItem("progress", progressPercent);
    localStorage.setItem("sisa", sisa);
    localStorage.setItem("bulan", bulan);

    tampilkanHasil();
}

function tampilkanHasil() {
    let sisa = localStorage.getItem("sisa");
    let bulan = localStorage.getItem("bulan");
    let progress = localStorage.getItem("progress");

    if (!sisa) return;

    document.getElementById("hasil").innerHTML = `
        <b>Sisa Uang per Bulan</b><br>Rp ${new Intl.NumberFormat("id-ID").format(sisa)}<br><br>
        <b>Perkiraan Waktu Mencapai Target</b><br>${bulan} Bulan
    `;

    document.getElementById("progressSection").style.display = "block";
    document.getElementById("progressFill").style.width = progress + "%";
    document.getElementById("progressText").innerText = `Progress: ${progress}% tercapai`;
}

// tampilkan data langsung saat halaman dibuka
window.onload = tampilkanHasil;
