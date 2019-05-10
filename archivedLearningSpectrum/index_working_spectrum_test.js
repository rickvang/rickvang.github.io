import React from 'react';
import ReactDOM from 'react-dom';
import Provider from '@react/react-spectrum/Provider';
import {TableView} from '@react/react-spectrum/TableView';
import ListDataSource from '@react/react-spectrum/ListDataSource';
import Switch from '@react/react-spectrum/Switch';
import {TagList} from '@react/react-spectrum/TagList';
import Search from '@react/react-spectrum/Search';
import Button from '@react/react-spectrum/Button';



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


// var ds = new TableDS();

class MyDataSource extends ListDataSource {
  

  async load(sortDescriptor) {
    // load some data here
    const getTestJson = await fetch('http://127.0.0.1:8887/testapi.json');
    const testJson = await getTestJson.json();
    // If sortDescriptor is provided, then sort the data accordingly.
    return await testJson;
  }
  
  async loadMore() {
    // load more data
    return ;
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
  return <span>{data[column.key]}</span>;
}

class SourceList extends React.PureComponent {

  render() {
    let ds = new MyDataSource();
    
    function slideUpDown(el) {
      var elem = document.getElementsByClassName('spectrum-Tags')[0];
      var elemTransition = "all .2s ease-in-out";
      var elemHeight = "32px";

      if (elem.style.height === elemHeight){
        elem.style.transition = elemTransition;
        elem.style.height = "0px";
      }else{  
        elem.style.transition = elemTransition;
        elem.style.height = elemHeight;
      }
    }

      return (
      <div style={{height: '442px', padding: '16px'}}>
        <div>
        <Search placeholder="Enter text" style={{display:"block"}} onSubmit={slideUpDown}/>
        
        <TagList readOnly onClose={e => console.log(e)} style={{overflow:"hidden", display:"block", height:"0"}}  values={["Leonardo", "Donatello", "Michelangelo", "Raphael"]} onClick={e=>{console.log(e.target.innerHTML)}} />
        </div>
        <div>
          {/* <Button variant="tool"></Button> */}
        </div>

        <hr></hr>
        <TableView
          columns={columns}
          dataSource={ds}
          renderCell={renderCell}
          style={{display:"block"}} 
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