
document.addEventListener("DOMContentLoaded", function () {

    // Mengambil tombol dan kotak pesan
    const tombolPesan = document.getElementById("tombolPesan");
    const pesan = document.getElementById("pesan");

    // Fungsi untuk menampilkan dan menyembunyikan pesan
    tombolPesan.addEventListener("click", function () {

        if (pesan.hidden) {
            pesan.hidden = false;
            tombolPesan.textContent = "Sembunyikan Pesan";
        } else {
            pesan.hidden = true;
            tombolPesan.textContent = "Tampilkan Pesan";
        }

    });

    // Mengatur menu navigasi
    const menuNavigasi = document.querySelectorAll("nav a");

    menuNavigasi.forEach(function (menu) {

        menu.addEventListener("click", function () {

            menuNavigasi.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

});
