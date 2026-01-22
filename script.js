function menuBurguer() {
    const itens = document.getElementById('menu');
    if (window.innerWidth <= 600) {
        itens.style.display =
        itens.style.display === 'block' ? 'none' : 'block';
    }
}
window.addEventListener('resize', () => {
const itens = document.getElementById('menu');
    if (window.innerWidth > 600) {
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    }
});