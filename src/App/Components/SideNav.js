import React from 'react';

import ButtonGroup from '@react/react-spectrum/ButtonGroup';
import Button from '@react/react-spectrum/Button';
import CheckmarkCircle from '@react/react-spectrum/Icon/CheckmarkCircle';
import Add from '@react/react-spectrum/Icon/Add';
import Delete from '@react/react-spectrum/Icon/Delete';
import Bell from '@react/react-spectrum/Icon/Bell';
import Camera from '@react/react-spectrum/Icon/Camera';
import Undo from '@react/react-spectrum/Icon/Undo';
import Remove from '@react/react-spectrum/Icon/Remove';

export default class ProtoSideNav extends React.Component {
    render(){
      return (
        <ButtonGroup
          style={{textAlign: 'left', maxWidth:50, float: "left", padding:"12px"}}
          aria-label="ButtonGroup"
          // onChange={change}
          orientation="vertical"
        >
          <Button value="react" variant="secondary" icon={<CheckmarkCircle />} />
          <Button value="add" variant="secondary" icon={<Add />} />
          <Button value="delete" variant="secondary" icon={<Delete />} />
          <Button value="bell" variant="secondary" icon={<Bell />} />
          <Button value="remove" variant="secondary" icon={<Remove />} />
          <Button value="camera" variant="secondary" icon={<Camera />} />
          <Button value="undo" variant="secondary" icon={<Undo />} />
        </ButtonGroup>
      )
    }
  }
