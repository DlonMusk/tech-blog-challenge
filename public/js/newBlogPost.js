const submitBlogPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const content = document.querySelector("#content").value.trim();

    console.log(title, 'AAAAAAAAAAAA', content);
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