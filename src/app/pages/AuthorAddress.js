import React from 'react'

class AuthorAddress extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {

        // console.log(this.props.address);
        return (
            <div class="second-section">

                <h3>Address</h3>
                <p>{this.props.address.street}</p>
                <p>{this.props.address.city}</p>
                <p>{this.props.address.zipcode}</p>

                <iframe
                    width="100%"
                    height="100%"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"

                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://maps.google.com/maps?q=${this.props.address.iframeGeo},${this.props.address.iframeLng}&z=15&output=embed`} />

            </div>
        )
    }
}

export default AuthorAddress;