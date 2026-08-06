export const addPost = (post) => ({
    type: 'Add_Post',
    payload: post
});

export const likePost = (idPost) => ({
    type: "like_post",
    payload: idPost
});

export const dislike = (idPost) => ({
    type: "dislike_post",
    payload: idPost
});

export const addComment = (idPost, comment) => ({
    type: "add_comment",
    payload: { idPost, comment }
});

export const deletePost = (idPost) => ({
    type: "deletepost",
    payload: idPost
});

export const deleteComment = (idPost, idComment) => ({
    type: "supprimer_Comment",
    payload: { idPost, idComment }
});