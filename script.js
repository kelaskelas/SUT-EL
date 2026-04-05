// 1. SETTING TANGGAL ULTAH (14 April 2026)
const targetDate = new Date("April 14, 2026 00:00:00").getTime();

const countdownFunc = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Hitung Hari, Jam, Menit, Detik
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Update elemen di HTML
    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;

    // Jika waktu habis (sudah hari-H)
    if (distance < 0) {
        clearInterval(countdownFunc);
        showPage('page-lock');
    }
}, 1000);

// 2. FUNGSI NAVIGASI HALAMAN
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

// 3. VERIFIKASI PASSWORD
function verifikasi() {
    const input = document.getElementById('passInput').value.toLowerCase();
    
    // GANTI "nama lu" JADI NAMA PANGGILAN LU SENDIRI
    const passBenar = "elisa"; 

    if(input === passBenar || input === "elisa") {
        showPage('page-content');
    } else {
        alert('SALAH! Masa Minder? Coba lagi! 🚩');
    }
}

// 4. EFEK KONFETI
function selebrasi() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f472b6', '#fbbf24', '#3b82f6']
    });
}
