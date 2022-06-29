
const submitComment = async (event) => {
    event.preventDefault();

    console.log("HERLLRO");
    
    const comment = document.querySelector('#comment').value.trim();
    const postId = document.querySelector('#post_id').getAttribute('data-postId');
    console.log(postId);
    console.log("COMMENT: ", comment);
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