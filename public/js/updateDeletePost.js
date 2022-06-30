// function to update a current users post by grabbing data from feilds to send to the update api call on a click event
const updatePost = async (event) => {
    event.preventDefault();
    
    const content = document.querySelector('#content').value.trim();
    const postId = document.querySelector('#post_id').getAttribute('data-postId');

    
    if(content && postId){
        const response = await fetch('/api/posts/update', {
            method: 'PUT',
            body: JSON.stringify({content, postId}),
            headers: {'content-type': 'application/json'}
        });

        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert("Failed to update post");
        }
    }

}

// function to delete a chosen post from the user dashboard by making a call to the delete endpoint of the api
const deletePost = async () => {
    const postId = document.querySelector('#post_id').getAttribute('data-postId');
    if(postId){
        const response = await fetch('/api/posts/delete', {
            method: 'DELETE',
            body: JSON.stringify({postId}),
            headers: {'content-type': 'application/json'}
        })

        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert("Failed to delete post");
        }
    }
}


document
        .querySelector('#update')
        .addEventListener('click', updatePost);

document
        .querySelector('#delete')
        .addEventListener('click', deletePost);