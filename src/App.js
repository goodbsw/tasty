import React, { Component } from 'react';
import Nav from './view/nav/nav.js';
import Map from './view/map/map.js';
import List from'./view/list/list';

class App extends Component {

  componentWillMount () {
    this.state = {
      restaurants : [
        {
          name: "이북집",
          latitude: 37.544714,
          longitude: 127.049489
        },
        {
          name: "순남시래기",
          latitude: 37.542930,
          longitude: 127.056849
        }
      ]
    }
  }

  render() {

    return (
      <div className="App row">
        <Nav/>
        <Map restaurants={this.state.restaurants}/>
        <List/>
      </div>
    );
  }
}

export default App;
