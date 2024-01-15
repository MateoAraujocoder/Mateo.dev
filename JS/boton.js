// JavaScript para manejar el clic en el botón de hamburguesa
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav').style.display = 'flex';
    document.querySelector('#overlay').style.display = 'block';
});

// JavaScript para manejar el clic en el botón de cerrar
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.nav').style.display = 'none';
    document.querySelector('#overlay').style.display = 'none';
});
