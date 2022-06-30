// function to submit a new blog post by grabing user data and calling the api endpoint to addPost through a click event on form submit
const submitBlogPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const content = document.querySelector("#content").value.trim();

    if(title && content){
        const response = await fetch('/api/posts/addPost', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {'content-type': 'application/json'}
        });

        if(response.ok){
            document.location.replace('/dashboard')
        } else {
            alert("Failed to create a new post")
        }
    }
}

document
        .querySelector('.new-post-form')
        .addEventListener('submit', submitBlogPost);