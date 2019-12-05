
class Post {
    constructor(apiPost) {
        this.title = apiPost.title;
        this.lead = apiPost.body;
        this.idPost = apiPost.id;
    }
}
export default Post;