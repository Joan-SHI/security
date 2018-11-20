import React from 'react'

class BeerListItem extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        const beer = this.props.beer
        return (
            <div>
                <p>{beer.name}</p>
                <p>{beer.brewery}</p>
                <p>
                    <span className='country'>{beer.country}</span>
                    <span>{beer.abv}</span>
                </p>
            </div>
        )
    }
}

export default BeerListItem

{/* <div>
<ul>
    {
        beer.map((item, i) => {
            return (
                <li key={i}>{item.name}</li>
            )
        })
    }
</ul>
{console.log("beer props", beer)}
<p>Hello</p>
</div> */}