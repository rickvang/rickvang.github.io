import React, { Component } from 'react';
import ProtoShell from './Shell';
import ProtoNav from './SideNav';
import ProtoTableView from './TableView';
import ProtoHeader from './Breadcrumb';

import "./Proto1.css";

class Proto1 extends Component {
    render() {
        return (
            <div>
                <ProtoShell></ProtoShell>
                <div className="Container">
                    <div className="Container-body">
                        <div className="Container-content">
                            <h1>Proto1</h1>
                            <ProtoHeader></ProtoHeader>
                            <ProtoTableView></ProtoTableView>
                        </div>
                        <nav className="Container-nav"><ProtoNav></ProtoNav></nav>
                        <aside className="Container-rRail">adsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsads</aside>
                    </div>
                </div>
            </div>
        );
    }
}

export default Proto1;
