import React from 'react';
import ReactDOM from 'react-dom';
import Provider from '@react/react-spectrum/Provider';
import ProtoShell from '../src/Components/Shell';
import ProtoSideNav from '../src/Components/SideNav';
import ProtoTableView from '../src/Components/TableView';
import ProtoBreadCrumbs from '../src/Components/Breadcrumb';




class SourceList extends React.PureComponent {

  render() {

    return (
      <div style={{"backgroundColor": "rgb(245, 245, 245)", "height":"100vh"}}>
        <Provider theme='light' style={{"paddingTop": "52px"}}>
          <ProtoShell></ProtoShell>
          <ProtoSideNav></ProtoSideNav>
          <ProtoBreadCrumbs></ProtoBreadCrumbs>
          <ProtoTableView></ProtoTableView>
        </Provider>
      </div>
    )
  }


}

ReactDOM.render(<SourceList />, document.getElementById('root'));