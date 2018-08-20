import React, { Component } from 'react'
import Collapse from '../../../hoc/Collapse/Collapse';
import ReportAttributes from '../ReportAttributes/ReportAttributes';

class Report extends Component {

    render() {
        
        return (
            <div>
                <Collapse buttonText="Hide">
                    <ReportAttributes />
                </Collapse>
            </div>
        )
    }
}

export default Report;