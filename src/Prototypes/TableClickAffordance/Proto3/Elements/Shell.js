import React from 'react';


import Shell from '@react/react-spectrum/Shell/js/Shell';
import ShellHeader from '@react/react-spectrum/Shell/js/ShellHeader';
import ShellHelp from '@react/react-spectrum/Shell/js/ShellHelp';
import ShellUserProfile from '@react/react-spectrum/Shell/js/ShellUserProfile';
import ShellActions from '@react/react-spectrum/Shell/js/ShellActions';
import ShellMenu from '@react/react-spectrum/Shell/js/ShellMenu';
import ShellSolution from '@react/react-spectrum/Shell/js/ShellSolution';
import ShellWorkspace from '@react/react-spectrum/Shell/js/ShellWorkspace';
import ProtoScrubber from '../../../PrototypingTools/ProtoScrubber';
import AdobeSocial from '@react/react-spectrum/Icon/AdobeSocial';

export default class ProtoShell extends React.Component {
  render() {
    return (
      <div>
        <Shell>

          <ShellHeader
            homeTitle={"Prototype"}
            homeIcon={<AdobeSocial />}
          >
            <ShellSolution></ShellSolution>
            <ProtoScrubber></ProtoScrubber>
            <ShellActions>
              <ShellHelp></ShellHelp>
              <ShellUserProfile
                avatarUrl={"https://www.w3schools.com/howto/img_avatar.png"}
                name={"frank"}
                heading={"superboss"}
                subheading={"Person"}
              >
              </ShellUserProfile>


            </ShellActions>

          </ShellHeader>

        </Shell>
      </div>
    )
  }


  
}
