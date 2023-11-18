document.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem('username');
    document.getElementById('username').textContent = username;
});