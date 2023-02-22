"use strict"

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    const window = document.getElementById('wrapper');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup_title');
    const popupText = document.getElementById('popup_text');
    form.addEventListener('submit', formSend)
    //document.getElementById('submit').onclick = adresSend;
    async function formSend(e) {
        e.preventDefault();
        let error = adresValidate(form);
        let formData = new FormData(form);
        let answer = false;


        if (error === 0){
            window.classList.add("_sending");

            let response = await fetch ('sendmail.php',{
                method: 'POST',
                body: formData
            });
            if (response.ok){
                let result = await response.json();
                answer = true;
                form.reset();
                popupTitle.textContent = 'SUCCESS!';
                popupText.textContent = 'You have successfully subscribed to the email newsletter';
                popup.classList.add("_visible");
            } else {
                answer = false;
                popupTitle.textContent = 'FAIL!';
                popupText.textContent = 'Your attempt to subscribe to the newsletter was unsuccessful';
                popup.classList.add("_visible");
            }
        } else {
            alert('Заполните поле адреса электронной почты!');
        }
    }

    function adresValidate(form) {
        let error = 0;
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        const input = document.querySelector('input');
        function isEmailValid(value) {
            return EMAIL_REGEXP.test(value);
        }

        if (isEmailValid(input.value)){
            input.style.borderColor = 'green';
            input.style.boxShadow = '0 0 15px green';
            error = 0;
            
        } else {
            input.style.borderColor = 'red';
            input.style.boxShadow = '0 0 15px red';
            error = 1;
        }
        return error;
    }
});