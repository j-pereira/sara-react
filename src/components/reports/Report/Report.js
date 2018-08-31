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
            dataset: [],
            lastdate: {}
        }
    }

    componentDidMount() {
        axios.get('dataset/lastdate')
            .then( response => {
                this.setState({ lastdate: response.data });
                console.log(this.state.lastdate);
            })
            .catch( error => {
                console.error(error);
            });
    }


    updateDatasetFile = (event) => {
        event.preventDefault();
        axios.get('dataset/update')
            .then( response => {
                this.setState({ lastdate: response.data });
                console.log(this.state.lastdate);
            })
            .catch( error => {
                console.error(error);
            });

    }


    renderRules = (event) => {
        event.preventDefault();
        axios.get('dataset')
            .then( response => {
                this.setState({ 
                    resultTable: true, 
                    dataset: response.data 
                });
                console.log(this.state.dataset);
            })
            .catch( error => {
                console.error(error);
            });
    }
    

    render() {  

        return (
            <div>
                <Collapse>
                    <ReportAttributes updateDataset={this.updateDatasetFile} datasetLastDate={this.state.lastdate} generateRules={this.renderRules} />
                </Collapse>
                <ARTable hasResults={this.state.resultTable} data={this.state.dataset} />
            </div>

        )
    }
}

export default Report;