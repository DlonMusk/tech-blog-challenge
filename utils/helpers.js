const getUserName = () => {
    const username = document.querySelector('#username');
    
    username.innerHTML();
}


module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    }
}