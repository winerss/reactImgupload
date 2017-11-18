import React, { Component } from 'react';
import '../css/Mheader.css'
import logo from '../img/logo.png'
class Mheader extends Component {
  render() {
    return (
      <div>
        <header className="mheader">
          <div className="container">
            <div className="logo">
                <img src={logo}/>
            </div>
            <p className="title">呈点网络数据处理系统</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Mheader;
