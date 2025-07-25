const role = localStorage.getItem("userRole");
document.getElementById("userRole").textContent = "Role: " + (role || "Visitor");

if (role === "admin" || role === "panitia") {
  document.getElementById("formInput").style.display = "block";
}

fetch("data/anggaran.json")
  .then((res) => res.json())
  .then((data) => {
    const pemasukanList = document.getElementById("listPemasukan");
    const pengeluaranList = document.getElementById("listPengeluaran");
    let totalPemasukan = 0, totalPengeluaran = 0;

    data.pemasukan.forEach(item => {
      pemasukanList.innerHTML += `<li>${item.keterangan}: Rp ${item.jumlah.toLocaleString()}</li>`;
      totalPemasukan += item.jumlah;
    });
    data.pengeluaran.forEach(item => {
      pengeluaranList.innerHTML += `<li>${item.keterangan}: Rp ${item.jumlah.toLocaleString()}</li>`;
      totalPengeluaran += item.jumlah;
    });

    document.getElementById("totalPemasukan").textContent = "Rp " + totalPemasukan.toLocaleString();
    document.getElementById("totalPengeluaran").textContent = "Rp " + totalPengeluaran.toLocaleString();
  });

function tambahData() {
  if (role !== "admin" && role !== "panitia") {
    alert("Anda tidak punya izin untuk menambahkan data.");
    return;
  }

  const ket = document.getElementById("keterangan").value;
  const jumlah = parseInt(document.getElementById("jumlah").value);
  const jenis = document.getElementById("jenis").value;

  alert(`(SIMULASI) Data ${jenis} berhasil ditambahkan:\n${ket} - Rp${jumlah.toLocaleString()}\n*Data ini belum disimpan permanen!`);
}

function logout() {
  localStorage.removeItem("userRole");
  window.location.href = "index.html";
}