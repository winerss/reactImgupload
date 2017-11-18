import React, { Component } from 'react';
import '../css/Pheader.css'
import logo from '../img/logo.png'
class Pheader extends Component {
  render() {
    return (
      <div>
        <header className="pheader">
          <div className="container">
            <img src={logo}/>
            <p className="title">呈点网络数据处理系统</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Pheader;
