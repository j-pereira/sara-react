import React, { Component } from 'react'
import Collapse from '../../../hoc/Collapse/Collapse';
import ReportAttributes from '../ReportAttributes/ReportAttributes';
import Table from '../AssociationRules/Table/Table';

class Report extends Component {

    constructor (props) {
        super(props)
        this.state = {
            resultTable: false
        }
    }


    renderRules = () => {
        this.setState({
            resultTable: true
        })
    }
    

    render() {

        return (
            <div>
                <Collapse>
                    <ReportAttributes generateRules={this.renderRules} />
                </Collapse>
                <Table renderTable={this.state.resultTable}/>
            </div>

        )
    }
}

export default Report;