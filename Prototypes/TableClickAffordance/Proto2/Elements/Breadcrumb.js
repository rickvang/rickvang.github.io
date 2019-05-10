import React from 'react';


import Breadcrumbs from '@react/react-spectrum/Breadcrumbs/js/Breadcrumbs';
import Search from '@react/react-spectrum/Search/js/Search';
import TagList from '@react/react-spectrum/TagList/js/TagList';
import Tag from '@react/react-spectrum/TagList/js/Tag';

export default class ProtoBreadcrumbs extends React.Component {
    render(){
      return (
        <div>

          <Breadcrumbs items={[{label: 'Folder 1',href: '#Folder-1'},{label: 'Folder 2'},{label: 'Folder 3'}]} />
          <Search></Search>
          <div>
          <TagList>
              <Tag value="1" closable>
                  Tag 1
              </Tag>
              <Tag value="2" closable>
                  Tag 2
              </Tag>
              <Tag value="3" closable>
                  Tag 3
              </Tag> 
              <Tag value="4" closable>
                  Tag 4
              </Tag>
              <Tag value="5" closable>
                  Tag 5
              </Tag>
          </TagList>
      </div>

        </div>
      )
    }
  }
