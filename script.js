function checkPassword() {
    const pass = document.getElementById('passwordInput').value.toLowerCase();
    if(pass === 'elisa' || pass === 'lu') { // Ganti sesuai keinginan
        nextPage(2);
    } else {
        alert('SALAH! Masa lu minder? 🚩');
    }
}

function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + pageNumber).classList.add('active');
}
function confettiEffect() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
}