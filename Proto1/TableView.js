import React from 'react';

import {TableView} from '@react/react-spectrum/TableView';
import ListDataSource from '@react/react-spectrum/ListDataSource';
import Switch from '@react/react-spectrum/Switch';


let columns = [
  {
    title: 'Name',
    key: 'name',
    minWidth: 200,
    sortable: true,
    divider: true
  },
  {
    title: 'Active',
    key: 'enabled',
    width: 100,
    announce: false
  },
  {
    title: 'Habitat',
    key: 'createdBy',
    width: 200,
    sortable: true
  }
];

class TableDS extends ListDataSource {
  tableData = [
    {'id': 1, 'name': 'Jacob', 'enabled': true, 'Habitat': 'South Pole'},
    { 'id': 2, 'name': 'Ginger', 'enabled': false, 'Habitat': 'South Pole'},
    { 'id': 3, 'name': 'Skipper', 'enabled': false, 'Habitat': 'South Pole'},
    { 'id': 4, 'name': 'Ozzie', 'enabled': true, 'Habitat': 'South Pole'},
    { 'id': 5, 'name': 'Maryann', 'enabled': true, 'Habitat': 'South Pole'},
    { 'id': 6, 'name': 'Misty', 'enabled': false, 'Habitat': 'South Pole'},
    { 'id': 7, 'name': 'Fred', 'enabled': false, 'Habitat': 'South Pole'},
    { 'id': 8, 'name': 'Petal', 'enabled': true, 'Habitat': 'South Pole'},
    { 'id': 9, 'name': 'Happy', 'enabled': true, 'Habitat': 'South Pole'},
    { 'id': 10, 'name': 'African wild cat', 'enabled': false, 'Habitat': 'South Pole'},
  ]

  async load(sortDescriptor) {
    let data = this.tableData;
    if (sortDescriptor) {
      data.sort((a, b) => a[sortDescriptor.column.key] < b[sortDescriptor.column.key] ? -sortDescriptor.direction : sortDescriptor.direction);
    }
    return data;
  }

  async loadMore() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 2000);
    });
  }
}


function renderCell(column, data, rowFocused) {
  if (column.key === 'enabled') {
    // Determine how to set tabIndex of Switch based on focused state of row.
    var tabIndex = rowFocused ? 0 : -1;

    return (
      <Switch
        defaultChecked={data[column.key] == null ? data : data[column.key]}
        onChange={() => {}}
        tabIndex={tabIndex}
        title={column.title} />
    );
  }
  return <span>{'' + (data[column.key] || data)}</span>;
}
  
export default class ProtoTableView extends React.Component {
    render(){
      return (
        <TableView
          columns={columns}
          dataSource={new TableDS()}
          renderCell={renderCell} 
           allowsSelection = {
             true
           }
           allowsMultipleSelection = {
             true
           }
           canReorderItems = {
             true
           }
           />
      )
    }
    componentDidMount() {
      setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
          // document.getElementById('root').style.width = "200px";
      },800);
  }
  }
