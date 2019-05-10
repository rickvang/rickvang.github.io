import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import ProtoShell from './Elements/Shell';
import ProtoNav from './Elements/SideNav';
import ProtoTableView from './Elements/TableView';
import ProtoHeader from './Elements/Breadcrumb';

import { StateContext } from './p1State';

import "./Proto1.scss";
// import Switch from '@react/react-spectrum/Switch/js/Switch';


class Proto1 extends Component {
    static contextType = StateContext;
    // debugger;
    render() {
        return (
            <div id="proto1">
                <ProtoShell></ProtoShell>
                <div className="Container">
                    <div className="Container-body">
                        <div className="Container-content">
                            <h1>Proto1</h1>
                            <ProtoHeader></ProtoHeader>
                                <ProtoTableView></ProtoTableView>
                        </div>
                        <nav className="Container-nav"><ProtoNav></ProtoNav></nav>
                        <div className="Container-rRail">adsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsads</div>
                    </div>
                </div>
            </div>
        )
    }

    constructor() {
        super();
    }

}
export default Proto1;
