const signupFormHandler = async (event) => {
    event.preventDefault();

    console.log("SIGN UP FORM");
    const name = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log(name, ' ', email, ' ', password);

    if(name && email && password){
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({name, email, password}),
            headers: {'content-type': 'application/json'}
        });

        if(response.ok){
            document.location.replace('/');
        } else {
            alert('Failed to sign up');
        }
    }

}

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);