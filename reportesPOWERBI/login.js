const loginBtn = document.getElementById('login-btn');
const username = document.getElementById('username');
const password = document.getElementById('password');

// Credenciales de acceso (puedes cambiarlas)
const validUsername = 'admin';
const validPassword = 'ññ24.syn';

loginBtn.addEventListener('click', () => {
    if (username.value === validUsername && password.value === validPassword) {
        // Redirigir a la página principal
        window.location.href = 'index.html';
        localStorage.setItem('loggedIn', true);
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});