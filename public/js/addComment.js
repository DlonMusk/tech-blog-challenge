// function to grab user inputs and call the comment endpoint to create a new comment
const submitComment = async (event) => {
    event.preventDefault();

    
    const comment = document.querySelector('#comment').value.trim();
    const postId = document.querySelector('#post_id').getAttribute('data-postId');

    if(comment && postId){
        const response = await fetch('/api/posts/comment', {
            method: 'POST',
            body: JSON.stringify({comment, postId}),
            headers: {'content-type': 'application/json'}
        });
    
        if(response.ok){
            document.location.replace('/')
        } else {
            alert("Failed to submit comment")
        }
    }
    
}

document
        .querySelector('.new-comment-form')
        .addEventListener('submit', submitComment);