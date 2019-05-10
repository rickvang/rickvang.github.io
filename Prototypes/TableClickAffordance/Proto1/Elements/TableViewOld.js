import React from 'react';
import {TableView} from '@react/react-spectrum/TableView';
import ListDataSource from '@react/react-spectrum/ListDataSource';
import Switch from '@react/react-spectrum/Switch';
import BrowserRouter from 'react-router-dom';
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
        <div style = {{height:"370px"}}>
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
      // refresh to get content
      setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
      },100);
      
      //Apply Events
      
        //looks for specific parent on click
        
        // function lookFor(element, classname) {
        //   if (element.className){
        //     if(element.className.split(' ').indexOf(classname) >= 0) {
        //       return true;
        //     }
        //   }
        //   if (element.parentNode) {
            // return element.parentNode && lookFor(element.parentNode, classname);
        //   }
        //   return false
        // }
        // function findAncestor(element, classname) {
        //   if (element.className) {
        //     if (element.className.split(' ').indexOf(classname) >= 0) {
        //       return element;
        //     }
        //   }
        //   return "no" + element.textContent;
        // }
        // var getSiblings = function (elem) {
        //   var siblings = [];
        //   var sibling = elem.parentNode.firstChild;
        //   var skipMe = elem;
        //   for (; sibling; sibling = sibling.nextSibling)
        //     if (sibling.nodeType == 1 && sibling != elem)
        //       siblings.push(sibling);
        //   return siblings;
        // }
  
        //grabs all the table cells and let me modify the interaction
        
        
      
        
        
        // Array.from(getCells).forEach(
        //   (el) => {
        //     el.addEventListener("click", (event) => {
        //       var el = event.target;
        //       //removed default behavior
        //       if (el.classList.contains('spectrum-Table-cell')){
        //         if (el.closest('.spectrum-Table-row').classList.contains('is-selected')) {
        //           el.closest('.spectrum-Table-row').classList.remove('is-selected');
        //         }
        //         if (el.closest('.spectrum-Table-row').classList.contains('is-focused')) {
        //           el.closest('.spectrum-Table-row').classList.remove('is-focused');
        //         }
        //         // fuggit we're hacking this sheet
                
        //         //get siblings
        //         let a = getSiblings(el);
        //         const iterator = a.values()
        //         for (const value of iterator){
        //           if (value.classList.contains('react-spectrum-TableView-checkboxCell')){
        //             value.firstChild.firstChild.checked = false;
        //           }
        //         }
        //         return;
        //       }
              

        //       }
              
        // )
        // })
        // var cloneHead =  document.querySelector('spectrum-Table-head').cloneNode(true);
        // document.querySelector('spectrum-Table-head').parentNode.replaceChild(cloneHead, ('spectrum-Table-head')) 
        // var getCells = document.getElementsByClassName('spectrum-Table-cell');
        // ------------------------------------------------------------------------------------------------
      // setTimeout(() => {
      //   var getRows = document.querySelectorAll('.item');
      //   Array.from(getRows).forEach(
      //     (el) => {
      //       var elClone = el.cloneNode(true);

      //       el.parentNode.replaceChild(elClone, el);

      //       elClone.addEventListener('click', (ev) => {
      //         // console.log(elClone)
      //         //only selects on checkbox select

      //         if (
      //           ev.target.classList.contains('name') ||
      //           ev.target.classList.contains('enabled') ||
      //           ev.target.classList.contains('createdBy') ||
      //           ev.target.classList.contains('spectrum-Table-cell')
      //         ) {
      //           // console.log(ev.target);
      //           // window.location.href="../../Proto2";
      //           console.log(this.props);

      //           alert('you have navigated to another page');
      //         }
      //         if (elClone.querySelector('input').checked == true) {
      //           elClone.querySelector('input').setAttribute('aria-checked', true);
      //           elClone.firstChild.classList += ' is-selected';

      //           document.querySelector('.Container-rRail').innerHTML = `you have selected  ${elClone.querySelector('.name').textContent} `;
      //           document.querySelector('.Container-rRail').classList += ` open`;
      //           window.dispatchEvent(new Event('resize'));
      //         }

      //         if (elClone.querySelector('input').checked != true) {
      //           elClone.querySelector('input').setAttribute('aria-checked', false);
      //           elClone.firstChild.classList.remove('is-selected');

      //           document.querySelector('.Container-rRail').classList.remove(`open`);
      //           window.dispatchEvent(new Event('resize'));
      //         }

      //         if (document.querySelector('input[title="Select All"]')) {
      //           if (
      //             document.querySelector('input[title="Select All"]').getAttribute('aria-checked') == "mixed" ||
      //             document.querySelector('input[title="Select All"]').getAttribute('aria-checked') == "true"
      //           ) {
      //             console.log('yey');
      //           } else {
      //             console.log('boo');
      //           }

      //           if (document.querySelector('input[title="Select"]')) {
      //             // console.log(document.querySelectorAll('input[title="Select"]'))
      //           }
      //         }



      //         return;

      //         //  el.classList.remove('focused');
      //         //  el.firstChild.classList.remove('is-focused')
      //         //   el.classList.remove('selected')
      //         //  el.firstChild.classList.remove('is-selected')
      //       })
      //     }
      //   )

      // }, 200);
    }
// ------------------------------------------------------------------------------------------------
  }


