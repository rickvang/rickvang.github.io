import React, { useState } from 'react';
import {TableView} from '@react/react-spectrum/TableView';
import ListDataSource from '@react/react-spectrum/ListDataSource';
import Switch from '@react/react-spectrum/Switch';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";


let columns = [
  {
    title: 'Name',
    key: 'name',
    maxWidth: 200,
    sortable: true,
    // divider: true
  },
  {
    title: 'Habitat',
    key: 'habitat',
    maxWidth: 200,
    sortable: true,
        divider: true

  },
   {
    title: 'Notes',
    key: 'notes',
    minWidth: 300,
    announce: false
  },
];

class TableDS extends ListDataSource {
  tableData = [
    { 'id': 1, 'name': 'Jacob', 'notes': "-", 'habitat': 'South Pole' },
    { 'id': 2, 'name': 'Ginger', 'notes': "-", 'habitat': 'South Pole' },
    { 'id': 3, 'name': 'Skipper', 'notes': "-", 'habitat': 'South Pole' },
    { 'id': 4, 'name': 'Ozzie', 'notes': "-", 'habitat': 'South Pole' },
    { 'id': 5, 'name': 'Maryann', 'notes': "-", 'habitat': 'South Pole' },
    { 'id': 6, 'name': 'Misty', 'notes': "-", 'habitat': 'South Pole' },
    { 'id': 7, 'name': 'Fred', 'notes': "-", 'habitat': 'South Pole' },
    { 'id': 8, 'name': 'Petal', 'notes': "-", 'habitat': 'South Pole' },
    { 'id': 9, 'name': 'Happy', 'notes': "-", 'habitat': 'South Pole' },
    { 'id': 10, 'name': 'African wild cat', 'notes': "-", 'habitat': 'South Pole' },
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
        allowsSelection={true}
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
// debugger
      // refresh to get content
      let resizeTable = new Promise ((resolve, reject) => {
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
          resolve (console.log('promRes'))
          sessionStorage.clear();
        }, 100);
      })
      resizeTable.then(()=>{
        setTimeout(() => {
          //call a hidden button created by ProtoScrubber.js to clear the page
          document.getElementById('PrototypeScrubber').click();

          //Add Custom Functionality here----------------------------------------- 

          
          sessionStorage.setItem('railFlag', 'false');
          sessionStorage.setItem('selectedCount', 0);
          sessionStorage.setItem('selectedItem', '');
          sessionStorage.setItem('newNote', '');
          
          let addCount = ()=>{
            let currentCount =parseInt( window.sessionStorage.getItem("selectedCount"));
            let newCount = currentCount+1;
            return newCount;
          }
          let removeCount = () => {
            let currentCount = parseInt(window.sessionStorage.getItem("selectedCount"));
            let newCount = currentCount - 1;
            return newCount;
          }

          // sessionStorage.setItem('selectedCount', removeCount())


          const getCheckboxes = document.querySelectorAll('.spectrum-Table-checkboxCell, .spectrum-Table-checkbox');
          
          Array.from(getCheckboxes).forEach(
            (el) => {
              el.onclick = () => {
                
                //apply select styles
                if (el.querySelector('input').checked === true) {
                  document.querySelector('.Container-rRail').style = 'max-width:0;border:none;';
                  window.dispatchEvent(new Event('resize'));
                  
                } else {
                  document.querySelector('.Container-rRail').style = 'max-width:300px;border-left:1px solid #c1c1c1;padding: 12px';
                  window.dispatchEvent(new Event('resize'));
                  
                }
                
                // Apply checkbox click range
                if (el.querySelector('input').checked === true) {
                  el.querySelector('input').checked = false;
                } else {
                  el.querySelector('input').checked = true;
                  el.parentElement.classList.add('is-selected');
                }

              }
            }
          )



          const getCol3and4 = document.querySelectorAll('.spectrum-Table-cell[aria-colindex="4"], .spectrum-Table-cell[aria-colindex="3"]')
          Array.from(getCol3and4).forEach(
            (el) => {
              el.onclick = () => {
                console.log(this)
                window.location.assign("/proto1");
              }
            }
          )


          //Makes the Table resize automatically
          document.querySelector('.spectrum--light .spectrum-Table-body').firstChild.style.width = '100%';
       
          // End Add Custom Functionality----------------------------------------

        }, 200);
      })
  }
}