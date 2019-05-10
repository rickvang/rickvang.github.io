import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends Component {

  render() {
    return (
      <div>
        <ul>
       
          <li>
            <button id="proto1" onClick={this.gotolink}>Proto1</button>
          </li>
          <li>
            <button id="proto2" onClick={this.gotolink}>Proto2</button>
          </li>
          <li>
            <button id="proto3" onClick={this.gotolink}>Proto3</button>
          </li>
        </ul>
      </div>
    );
  }  
  gotolink = (el)=>{
    console.log(el.target);debugger
    window.location.assign("/"+ el.target.id)
  }
}

export default Home;
