const logoutHandler = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'content-type': 'application/json'}
    });

    console.log("LOGGING OUT HANDLER")

    if(response.ok){
        document.location.replace('/login');
    } else {
        alert("FAILED LOGGING OUT");
    }
}

document.querySelector('#logout').addEventListener('click', logoutHandler);