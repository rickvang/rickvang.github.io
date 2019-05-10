import React from 'react';
import {TableView} from '@react/react-spectrum/TableView';
import ListDataSource from '@react/react-spectrum/ListDataSource';
import Switch from '@react/react-spectrum/Switch';
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
  tableData = [
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
        title={column.title}/>
    );
  }

  return <span className={column.key}>{'' + (data[column.key] || data)}</span>;
}
  

export default class ProtoTableView extends React.Component {
  
  render(){
      return (
        <div style = {{height:"370px", width:"100%"}}>
        <TableView
        columns={columns}
        dataSource={new TableDS()}
        renderCell={renderCell}
        allowsSelection={false}
        allowsMultipleSelection={true}
        // canReorderItems={true}
    
        />
        </div>
      )
    }
    constructor(){
      super();
    }
    componentDidMount() {
      // refresh to get content
      let resizeTable = new Promise ((resolve, reject) => {
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
          resolve (console.log('promRes'))
        }, 100);
      })
      resizeTable.then(()=>{
        setTimeout(() => {
          //call a hidden button created by ProtoScrubber.js to clear the page
          document.getElementById('PrototypeScrubber').click();

          //Add Custom Functionality here----------------------------------------- 


          //apply select styles and click range
          const getCheckboxes = document.querySelectorAll('.spectrum-Table-checkboxCell, .spectrum-Table-checkbox');

          Array.from(getCheckboxes).forEach(
            (el) => {
              el.onclick = () => {
                // console.log('selected');
                if (el.querySelector('input').checked === true) {
                  el.querySelector('input').checked = false;
                  el.parentElement.classList.remove('is-selected');
                  document.querySelector('.Container-rRail').style = 'max-width:0;border:none;';
                  window.dispatchEvent(new Event('resize'));
                } else {
                  el.querySelector('input').checked = true;
                  el.parentElement.classList.add('is-selected');
                  document.querySelector('.Container-rRail').style = 'max-width:300px;border-left:1px solid #c1c1c1;padding: 12px';
                  window.dispatchEvent(new Event('resize'));
                }
              }
            }
          )
          //apply select styles and click range
          document.querySelector('.spectrum--light .spectrum-Table-body').firstChild.style.width = '100%';
       
          // End Add Custom Functionality----------------------------------------

        }, 200);
      })
  }
}