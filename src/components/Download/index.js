import React, {Component} from 'react';
import PDF from "../PDF/channaResume.pdf";


class Download extends Component {
    
    render() {
        return <div>

        <a href = {PDF} target= "blank"> Click here to view my resume</a>

        </div>
    }
}

export default Download