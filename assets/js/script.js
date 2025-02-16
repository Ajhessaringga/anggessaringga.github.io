document.addEventListener("DOMContentLoaded", function () {
    // === SMOOTH SCROLLING UNTUK NAVBAR ===
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href").substring(1); // Ambil ID target
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                event.preventDefault(); // Mencegah aksi default
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Offset agar tidak tertutup navbar
                    behavior: "smooth" // Efek smooth scrolling
                });

                // Mengubah active class pada navbar
                navLinks.forEach(nav => nav.classList.remove("active"));
                this.classList.add("active");
            }
        });
    });

    // === MODAL POPUP UNTUK LIHAT PROYEK ===
    const projectModal = document.getElementById("projectModal");
    const viewProjectBtn = document.getElementById("viewProjectBtn");
    const closeModal = document.getElementById("closeModal");
    const closeBtn = document.querySelector(".close");

    // Tampilkan modal saat tombol "Lihat Proyek" diklik
    if (viewProjectBtn) {
        viewProjectBtn.addEventListener("click", function (event) {
            event.preventDefault();
            projectModal.style.display = "flex";
        });
    }

    // Tutup modal dengan tombol "Tutup"
    if (closeModal) {
        closeModal.addEventListener("click", function () {
            projectModal.style.display = "none";
        });
    }

    // Tutup modal dengan tombol "X"
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            projectModal.style.display = "none";
        });
    }

    // Tutup modal jika klik di luar area modal
    window.addEventListener("click", function (event) {
        if (event.target === projectModal) {
            projectModal.style.display = "none";
        }
    });

    // === EFEK HOVER PADA ITEM PORTOFOLIO ===
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        item.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // === SCROLLING DALAM MODAL (AGAR DAPAT DI-SCROLL) ===
    const modalContent = document.querySelector(".modal-content");
    if (modalContent) {
        modalContent.style.overflowY = "auto"; // Aktifkan scroll dalam modal
        modalContent.style.maxHeight = "80vh"; // Batasi tinggi agar tidak terlalu besar
    }

    // === PROYEK PKL - MODAL DETAIL ===
    const projectDetailModal = document.getElementById("projectDetailModal");
    const openDetailBtn = document.querySelector(".btn-detail"); // Pastikan ada class ini di tombol lihat detail
    const closeDetailBtn = document.querySelector(".close-detail");

    if (openDetailBtn) {
        openDetailBtn.addEventListener("click", function () {
            projectDetailModal.style.display = "flex";
        });
    }

    if (closeDetailBtn) {
        closeDetailBtn.addEventListener("click", function () {
            projectDetailModal.style.display = "none";
        });
    }

    // Tutup modal proyek PKL jika klik di luar modal
    window.addEventListener("click", function (event) {
        if (event.target === projectDetailModal) {
            projectDetailModal.style.display = "none";
        }
    });
});