import React from 'react';


// I typically put this inside the shell component and is an invisible button that allows you to use spectrum components without the functionality in case you want to prototype some different use cases.

export default class ProtoScrubber extends React.Component {
    
    render() {
        return (
            <button style={{visibility:'hidden'}} id="PrototypeScrubber"onClick={this.ScrubPage}>clicky</button>
        )
    }

    ScrubPage = () => {
        //Clears all event listeners
        let getErrthang = document.getElementById('proto1');
        let gotit = getErrthang.cloneNode(true);
        let theBody = document.getElementById('proto1');
        theBody.parentNode.replaceChild(gotit, theBody);
        //Clears all link functionality and applies specific functionality to links
        let getAllLinks = document.getElementsByTagName('a');
        Array.from(getAllLinks).forEach(
            (el) => {
                //this clears all a hrefs links
                el.onclick = () => { return false };
            }
        )
        
        console.log('page has been scrubbed')
    }
}


// Example of how to Call after page load from a component
//------------------------------------------------------------------
// componentDidMount() {
//     // refresh to get content
//     let resizeTable = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             window.dispatchEvent(new Event('resize'));
//             resolve(console.log('prom'))
//         }, 100);
//     })
//     resizeTable.then(() => {
//         setTimeout(() => {
//             //call a hidden button created by ProtoScrubber.js to clear the page
//             document.getElementById('PrototypeScrubber').click();
                //Add Custom Functionality here
                // let getCheckboxes = document.querySelectorAll('.spectrum-Table-checkboxCell');
                // Array.from(getCheckboxes).forEach(
                //     (el) => {
                //         el.onclick = () => {
                //             console.log('selected');
                //         }
                //     }
                // )
                //End Add Custom Functionality
//         }, 200);
//     })
// }