import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route,  Switch, Link } from "react-router-dom";
import App from './App/Home';
import Users from './Pages/users/users';
import Contact from './Pages/contact/contact';
import Notfound from './Pages/notfound/notfound';
import Proto1 from './Prototypes/TableClickAffordance/Proto1/Proto1';
import Proto2 from './Prototypes/TableClickAffordance/Proto2/Proto2';
import Proto3 from './Prototypes/TableClickAffordance/Proto3/Proto3';
import oldProto from './archivedLearningSpectrum/index_testPrototype1';
import './App/App.css';
import Provider from '@react/react-spectrum/Provider';



const routing = (
  <BrowserRouter>
    <Provider theme='light' style={{ "backgroundColor": "rgb(245, 245, 245)", "height": "calc=(100vh - 52px)" }}> 
      <Switch>
        <Route path="/" component={App} />
        <Route path="/proto1" component={Proto1} />
        <Route path="/proto2" component={Proto2} />
        <Route path="/proto3" component={Proto3} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route path="/oldproto" component={oldProto} />
        <Route component={Notfound} />
      </Switch>
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'))
