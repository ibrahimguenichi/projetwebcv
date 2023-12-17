document.addEventListener('DOMContentLoaded', function () {
    let contactForm = document.forms['contact'];

    function validateName() {
        let fNameInput = document.getElementById('fname');
        let fNameError = document.getElementById('nomEr');
        let letters = /^[A-Za-z]+$/;

        if (fNameInput.value.length < 3 || !fNameInput.value.match(letters)) {
            fNameError.innerHTML = "Le nom doit compter au minimum 3 caractères et ne contenir que des lettres.";
            return false;
        }

        fNameError.innerHTML = "<p style='color:green'>Correct</p>";
        return true;
    }

    contactForm.addEventListener('submit', function (event) {
        let errors = false;
        let inputFields = contactForm.elements;
        document.getElementById('erreur').innerHTML = '';
        document.getElementById('nomEr').innerHTML = '';

        errors = !validateName();

        for (let i = 0; i < inputFields.length; i++) {
            if (!inputFields[i].value) {
                errors = true;
                document.getElementById('erreur').innerHTML = 'Veuillez renseigner tous les champs.';
                break;
            }
        }

        if (errors) {
            event.preventDefault();
        } else {
            alert('Formulaire envoyé');
        }
    });
});