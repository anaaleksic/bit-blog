import React from 'react'
import { Link } from 'react-router-dom'

class SinglePostPage extends React.Component {
    render() {
        return (
            <div>
                <h2></h2>
                <Link to="/single-author-page">Single Author Page</Link>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p >
                <hr />
                <h4></h4>
                {/* 3 more post from the same author*/}
            </div>
        )




    }
}

export default SinglePostPage