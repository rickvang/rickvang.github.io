import React from 'react';
import ReactDOM from 'react-dom';
import Provider from '@react/react-spectrum/Provider';
import {TableView} from '@react/react-spectrum/TableView';
import ListDataSource from '@react/react-spectrum/ListDataSource';
import Switch from '@react/react-spectrum/Switch';
var tableData = [
    {'id': 1, 'name': 'Python, carpet', 'enabled': true, 'createdBy': 'Alexandro Hindrich'},
    {'id': 2, 'name': 'Cormorant, flightless', 'enabled': false, 'createdBy': 'Felicity McRinn'},
    {'id': 3, 'name': 'Cape cobra', 'enabled': false, 'createdBy': 'Emalee Worsfield'},
    {'id': 4, 'name': 'Red lava crab', 'enabled': true, 'createdBy': 'Cedric Henriet'},
    {'id': 5, 'name': 'Tiger', 'enabled': true, 'createdBy': 'Roselin Burk'},
    {'id': 6, 'name': 'Blue-tongued skink', 'enabled': false, 'createdBy': 'Dru Kretschmer'},
    {'id': 7, 'name': 'Springbuck', 'enabled': false, 'createdBy': 'Brockie Eastham'},
    {'id': 8, 'name': 'Woodpecker, downy', 'enabled': true, 'createdBy': 'Lexis Bravey'},
    {'id': 9, 'name': 'Cape white-eye', 'enabled': true, 'createdBy': 'Vevay Wessel'},
    {'id': 10, 'name': 'African wild cat', 'enabled': false, 'createdBy': 'Melamie Klais'},
  ];

  let columns = [
    {
      title: 'Active',
      key: 'enabled',
      width: 100,
      announce: false
    },
    {
      title: 'Name',
      key: 'name',
      minWidth: 200,
      sortable: true,
      divider: true
    },
    {
      title: 'Created By',
      key: 'createdBy',
      width: 200,
      sortable: true
    }
  ];


  class TableDS extends ListDataSource {
    constructor(data = tableData) {
      super();
      this.data = data;
    }

    async load(sortDescriptor) {
      let data = this.data.slice();
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

  var ds = new TableDS();

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

class SourceList extends React.PureComponent {

    render() {
        return (<div style={{height: '442px'}}>
        <TableView
        columns={columns}
        dataSource={ds}
        renderCell={renderCell}
        allowsSelection={false}
            />
        </div>);
    }

    componentDidMount() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        },100);
    }
  }

ReactDOM.render(<Provider theme='light'><SourceList /></Provider>, document.getElementById('root'));
