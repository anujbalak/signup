const submitButton = document.querySelector('button');
const confirmDialog = document.querySelector('p[id=confirm]');
const passwordDialog = document.querySelector('p[id=pwd]');
const pwd = document.querySelector('input[name=password]');
const pwdconfirm = document.querySelector('input[name=confirm]');

submitButton.addEventListener('click', (event) => {
    checkPassword();
    if (pwd.value == pwdconfirm.value) {
        confirmDialog.textContent = '';
    } else {
        confirmDialog.textContent = '• Password is mismatch!';
        event.preventDefault();
    }
});

function checkPassword() {
    if (pwd.value.length < 8 && pwd.value.length > 0) {
        return passwordDialog.textContent = "• Enter atLeast 8 digit long password";
    } else {
        return passwordDialog.textContent = '';
    }
};