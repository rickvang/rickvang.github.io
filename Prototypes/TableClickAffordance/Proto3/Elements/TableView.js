import React from 'react';
import {TableView} from '@react/react-spectrum/TableView';
import ListDataSource from '@react/react-spectrum/ListDataSource';
import Switch from '@react/react-spectrum/Switch';




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
    // var tabIndex = rowFocused ? 0 : -1;
    return <span>Penguin</span>
      // <Switch
      //   defaultChecked={data[column.key] == null ? data : data[column.key]}
      //   onChange={() => {}}
      //   tabIndex={tabIndex}
      //   title={column.title}/>
    // );
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
// debugger
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




          const getEachRow = document.querySelectorAll('.spectrum-Table-cell[aria-colindex="1"], .spectrum-Table-cell[aria-colindex="2"],.spectrum-Table-cell[aria-colindex="4"], .spectrum-Table-cell[aria-colindex="3"]')

          Array.from(getEachRow).forEach(
            (el) => {
              el.onclick = () => {
                //Toggle Checkbox
                console.log('clickyclack')
                // if (('input').checked === false) {
                console.log(el);
                
                if (el.parentElement.classList.contains('is-selected')){
                  el.parentElement.classList.remove('is-selected');
                     document.querySelector('.Container-rRail').style = 'max-width:0;border:none;';
                  window.dispatchEvent(new Event('resize'));
                }else{
                  el.parentElement.classList.add('is-selected');
                  document.querySelector('.Container-rRail').style = 'max-width:300px;border-left:1px solid #c1c1c1;padding: 12px';
                  window.dispatchEvent(new Event('resize'));
                };
                
                // Event.stopPropagation();

                // el.parentElement
                //   document.querySelector('.Container-rRail').style = 'max-width:0;border:none;';
                //   window.dispatchEvent(new Event('resize'));
                // } else {
                //   document.querySelector('.Container-rRail').style = 'max-width:300px;border-left:1px solid #c1c1c1;padding: 12px';
                //   window.dispatchEvent(new Event('resize'));
                // }
              }
            }
          )

          const getNameElements = document.querySelectorAll('.spectrum-Table-cell .name');

          Array.from(getNameElements).forEach(
            (el) => {
              el.style.color = "rgb(20, 115, 230)";
              el.cursor = "pointer";
              el.onclick = () => {
                window.location.assign("/proto3");
                
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