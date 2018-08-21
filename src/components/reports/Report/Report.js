import React, { Component } from 'react'
import Collapse from '../../../hoc/Collapse/Collapse';
import ReportAttributes from '../ReportAttributes/ReportAttributes';
import ARTable from '../ARTable/ARTable';

class Report extends Component {

    constructor (props) {
        super(props)
        this.state = {
            resultTable: ''
        }
    }


    renderRules = () => {
        this.setState({
            resultTable: <ARTable />
        })
    }
    

    render() {

        return (
            <div>
                <Collapse>
                    <ReportAttributes generateRules={this.renderRules} />
                </Collapse>
                {this.state.resultTable}
            </div>

        )
    }
}

export default Report;