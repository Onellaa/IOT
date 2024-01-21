function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    // You can add your authentication logic here
    // For simplicity, let's just show an alert for now
    alert('Login successful! Welcome, ' + username + '!');
    window.location.href = 'next_page.html'; 
   // window.location.reload();
}
