import React from 'react'

class Listing extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const beer = this.props.beers
        return (
            <div>
                <ul>
                    {
                        beer.map((item, i) => {
                            return (
                                <li key={i}>{item.name}</li>
                            )
                        })
                    }
                </ul>
                {console.log(beer)}
                <p>Hello</p>
            </div>
        )
    }
}

export default Listing