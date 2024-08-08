function showLogin(role) {

    document.getElementById('home').classList.add('hidden');

    document.getElementById('login').classList.remove('hidden');

    document.getElementById('login-title').textContent = `Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`;

}

function showRegister() {

    document.getElementById('home').classList.add('hidden');

    document.getElementById('register').classList.remove('hidden');

}

function showForgotPin() {

    document.getElementById('login').classList.add('hidden');

    document.getElementById('forgot-pin').classList.remove('hidden');

}

function goBack() {

    const sections = document.querySelectorAll('.center');

    sections.forEach(section => section.classList.add('hidden'));

    document.getElementById('home').classList.remove('hidden');

}

function showAdminSection(section) {

    // Add code to show specific admin section

}

function showWorkerSection(section) {

    // Add code to show specific worker section

}

document.getElementById('login-form').addEventListener('submit', function(e) {

    e.preventDefault();

    // Add login logic here

});

document.getElementById('register-form').addEventListener('submit', function(e) {

    e.preventDefault();

    // Add registration logic here

});

document.getElementById('forgot-pin-form').addEventListener('submit', function(e) {

    e.preventDefault();

    // Add forgot pin logic here

});