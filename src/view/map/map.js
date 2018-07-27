import React, { Component } from 'react';

class Map extends Component {

  componentWillMount() {
    console.log(this.props.restaurants);
  }

  componentDidMount () {
    const centerPosition = new window.daum.maps.LatLng(37.545486, 127.051632);// 패스트 파이브 성수점 좌표
    const container = document.getElementById('map');
    let options = {
      center: centerPosition,
      level: 3
    };

    this.map = new window.daum.maps.Map(container, options);

    const centerMarker = new window.daum.maps.Marker({position: centerPosition});
    centerMarker.setMap(this.map);
  }

  render() {
    return (
      <div className="col s9" style={{backgroundColor: "yellow"}}>
        <div id="map" style={{width: 1000, height: 1000}} />
      </div>
    )
  }
}

export default Map;