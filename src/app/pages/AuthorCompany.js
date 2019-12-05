import React from 'react'
import { Author } from '../../entities/Author'

const AuthorCompany = (props) => {
    return (
        <div class="third-section">

            <h3>Company</h3>
            <p>{props.company.name}</p>
            <p>{props.company.slogan}</p>

        </div>
    )
}

export default AuthorCompany;