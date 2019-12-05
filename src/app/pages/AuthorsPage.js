import React from "react"
import { Link } from 'react-router-dom'
import { fetchAuthors } from '../../services/AuthorService'



class AuthorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authors: []
        };
    }
    componentDidMount() {
        fetchAuthors()
            .then(authors => this.setState({ authors: authors }))
    }



    render() {

        const arrayOfAuthors = this.state.authors.map(author => (
            <div>

                <Link to={`/single-author-page/${author.id}`}>

                    <h3>{author.name}{author.surname}</h3>
                </Link>
                <hr />

            </div>
        ))



        return (
            <div className="container1">

                <h2>Authors {arrayOfAuthors.length}</h2>
                <br />
                {arrayOfAuthors}


            </div>

        )
    }
}
export default AuthorPage;