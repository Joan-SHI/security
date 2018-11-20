import React from 'react'
import Header './Header'
import Listing from './Listing'
import beersData from '../../data/beers'
import BeerList from './BeerList';
// This might need to be turned into a stateful (class-based) component
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      beers: beersData.beers
  }
  }

  render() {
    return (
      <div className='app'>
      <Header/>
        Ready to rock and roll
        <BeerList beers={this.state.beers} />
        {/* <BeerListItem/> */}
      </div>
    )
  }

}

export default App
