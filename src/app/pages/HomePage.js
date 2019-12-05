import React from 'react'
import { fetchPosts } from '../../services/PostService'


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetchPosts()
            .then(posts => this.setState({ posts: posts }))
    }

    render() {
        const arrayOfPosts = this.state.posts.map(post => (
            <div>
                <h3 class="post-title">{post.title}</h3>
                <p>{post.lead}</p>
                <hr />
            </div>
        ))

        return (
            <div>
                <h2 class="main-posts"> <b> POSTS</b></h2>


                {arrayOfPosts}


            </div>
        )
    }
}

export default HomePage;