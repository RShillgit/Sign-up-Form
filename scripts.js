const password = document.getElementById('password');
const confPassword = document.getElementById('confPassword');
const pErrorMsg = document.getElementById('pErrorMsg');
const confErrorMsg = document.getElementById('confErrorMsg');
const submitBtn = document.querySelector('.submitBtn');

function passwordCheck() {
    if (password.value !== confPassword.value) {
        // Change borders to red
        password.style.border = '1px solid red';
        confPassword.style.border = '1px solid red';
        confErrorMsg.innerHTML = '* Passwords do not match!';
        pErrorMsg.innerHTML = '* Passwords do not match!';

    }
    else return submitBtn.type = 'submit';
};

submitBtn.addEventListener('click', passwordCheck);

