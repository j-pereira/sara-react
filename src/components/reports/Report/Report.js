import React, { Component } from 'react'
import Collapse from '../../../hoc/Collapse/Collapse';
import ReportAttributes from '../ReportAttributes/ReportAttributes';
import ARTable from '../ARTable/ARTable';
import axios from 'axios';

class Report extends Component {

    constructor (props) {
        super(props)
        this.state = {
            resultTable: false,
            dataset: []
        }
    }


    renderRules = (event) => {
        event.preventDefault();

        axios.get('dataset')
            .then( response => {
                this.setState(
                    { 
                        resultTable: true, 
                        dataset: response.data 
                    }
                );
                console.log(response.data);
            })
            .catch( error => {
                console.error(error);
            });
    }
    

    render() {

        return (
            <div>
                <Collapse>
                    <ReportAttributes generateRules={this.renderRules} />
                </Collapse>
                <ARTable hasResults={this.state.resultTable} data={this.setState.dataset} />
            </div>

        )
    }
}

export default Report;