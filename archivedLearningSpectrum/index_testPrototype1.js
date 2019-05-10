import React from 'react';
import ReactDOM from 'react-dom';
import Provider from '@react/react-spectrum/Provider';
import ProtoShell from '../Components/Shell';
import ProtoSideNav from '../Components/SideNav';
import ProtoTableView from '../Components/TableView';
import ProtoBreadCrumbs from '../Components/Breadcrumb';




class oldProto extends React.PureComponent {

  render() {

    return (
      <Provider theme='light' style={{"paddingTop": "52px","backgroundColor": "rgb(245, 245, 245)", "height":"calc=(100vh - 52px)"}}>
          <ProtoShell></ProtoShell>
          <ProtoSideNav></ProtoSideNav>
          <ProtoBreadCrumbs></ProtoBreadCrumbs>
          <ProtoTableView></ProtoTableView>
        </Provider>
     
    )
  }


}

export default oldProto;