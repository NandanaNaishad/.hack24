document.addEventListener('DOMContentLoaded', () => {
    const loginBox = document.getElementById('login-box');
    setTimeout(() => {
        loginBox.style.opacity = 1;
    }, 2000); // Delay to match the logo animation duration
});

function handleLogin(type) {
    alert(`${type.charAt(0).toUpperCase() + type.slice(1)} Login clicked`);
}
function handleLogin(userType) {
    if (userType === 'customer') {
        window.location.href = 'suggestnew.html'; // Redirect to HTML file No. 2
    } else if (userType === 'user') {
        // You can handle the user login redirection here
        // For example: window.location.href = 'user_dashboard.html';
    }
}
