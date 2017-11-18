import React, { Component } from 'react';
import Pheader from './compontents/Pheader'
import Pcontent from './compontents/Pcontent'
import Mcontent from './compontents/Mcontent'
import Mheader from './compontents/Mheader'
import MediaQuery from 'react-responsive';
class App extends Component {
  render() {
    return (
      <div className="APP">
        <MediaQuery minDeviceWidth={769}>
          <Pheader />
          <Pcontent />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={768}>
          <Mheader />
          <Mcontent />
        </MediaQuery>
      </div>
    );
  }
}

export default App;
