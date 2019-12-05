import React from 'react'
import { Link } from 'react-router-dom'
import { Author } from '../../entities/Author'

import AuthorInfo from './AuthorInfo'
import AuthorAddress from './AuthorAddress'
import AuthorCompany from './AuthorCompany'
import { fetchAuthors, fetchSingleAuthor } from '../../services/AuthorService';

class SingleAuthorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: null
        };
    }

    componentDidMount() {
        const id = this.props.match.params.authorId
        console.log(id);

        fetchSingleAuthor(id)
            .then(author => this.setState({ author: author }))

    }

    render() {

        /*pisemo if posto kada se pozove klasa SingleAuthorPage ona pozove null (mozemo
        da napisemo i []) i onda krene da renderuje stranicu i npr nalepi adresu sa null i 
        to kolapsuje, zato pisemo IF, ako je null false onda ide loading i zato stavljamo ! negaciju 
        jer prvi uslov if-a po default-u true (dok je gore u author-u null ili [] ide loading,
            a kada se null ili [] promeni krece return) */

        if (!this.state.author) {
            return <p>Loading...</p>
        }

        return (
            <div class="single-author">
                <h2>{this.state.author.name}{this.state.author.surname}</h2>
                <AuthorInfo author={this.state.author} />
                {/* pri pozivanju saljem propse (address, adresslng, company) */}
                <AuthorAddress address={this.state.author.address} />
                <AuthorCompany company={this.state.author.company} />
                <br />

            </div>
        )
    }
}


export default SingleAuthorPage;