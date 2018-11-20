import React from 'react'
import beersData from '../../data/beers'

import BeerListItem from './BeerListItem'

class BeerList extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        // console.log(this.props.beers)
        return (
            <div>
                 <p className='welcome'>Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>

                {this.props.beers.map(beer => {
                    console.log(beer)
                    return (
                        <BeerListItem key={beer.id} beer={beer} />
                    )
                })}
            </div>
        )
    }
}

export default BeerList