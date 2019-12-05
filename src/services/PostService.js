import Post from "../entities/Post"

const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(apiPosts => apiPosts.map(apiPost => new Post(apiPost)))
}

export { fetchPosts };