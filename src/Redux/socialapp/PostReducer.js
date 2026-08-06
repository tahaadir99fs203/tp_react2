const initialState = {
    posts: [{
        id: '1',
        texte: 'post texte1',
        likes: 0,
        comments: [{ id: '1', texte: 'comment 1' }]
    },
    {
        id: '2',
        texte: 'post texte2',
        likes: 0,
        comments: [{ id: '1', texte: 'comment 1 post2' }]
    }],
};

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add_Post':
            return { ...state, posts: [...state.posts, action.payload] };
        case 'like_post':
            return {
                ...state,
                posts: state.posts.map((p) => {
                    if (p.id == action.payload) {p.likes++}
                    return p;
                })
            }
        case 'dislike_post':
            return {
                ...state,
                posts: state.posts.map((p) => {
                    if (p.id == action.payload) {p.likes--}
                    return p;
                })
            }
        case 'add_comment':
            return {
                ...state,
                posts: state.posts.map((p) => {
                    if (p.id == action.payload.idPost) {
                        p.comments.push(action.payload.comment)
                    }
                    return p;
                })
            }
        case 'deletepost':
            return {
                ...state,
                posts: state.posts.filter((p) => p.id != action.payload)
            }
        case 'supprimer_Comment':
            return {
                ...state,
                posts: state.posts.map((p) => {
                    if (p.id == action.payload.idPost)
                    {
                        p.comments = p.comments.filter((com) => com.id != action.payload.idComment)
                    }
                    return p;
                })
            }
        default:
            return state;
    }
};

export default PostReducer;