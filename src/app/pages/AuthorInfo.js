import React from 'react';

import AuthorService from '../../services/AuthorService'
import Author from '../../entities/Author'




const AuthorInfo = (props) => {
    return (
        <div className="container">
            <div className="collection">
                <div className="collection-item row">
                    {/* <div className="col m3 offset-m1">
                        <i className=" large material-icons orange-text text-darken-3 ">account_circle</i>

                    </div> */}
                    <div className="col m6">
                        <h5>{props.author.name}</h5>
                        <p>username: <b>{props.author.username}</b> <br />
                            email: <b>{props.author.email}</b><br />
                            phone: <b>{props.author.phone}</b>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AuthorInfo;