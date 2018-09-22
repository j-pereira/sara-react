import React, { Component } from 'react'
import Collapse from '../../../hoc/Collapse/Collapse';
import ReportAttributes from '../ReportAttributes/ReportAttributes';
import ARTable from '../ARTable/ARTable';
import BlockUI from '../../../hoc/BlockUI/BlockUI';
import axios from 'axios';

class Report extends Component {

    constructor (props) {
        super(props)
        this.state = {
            resultTable: false,
            dataset: [],
            lastdate: {},
            attributes: {},
            loading: ''
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
        this.setState({ loading: 'fademe' });
        axios.get('dataset/update')
            .then( response => {
                this.setState({ lastdate: response.data });
                console.log(this.state.lastdate);
            })
            .catch( error => {
                console.error(error);
            });
        this.setState({ loading: '' });

    }


    renderDataset = (attributes) => {
        let endpoint = attributes.dataset;
        if (attributes.dataset === 'classified') {
            attributes.sNumber = 'none'
        }
        console.log(attributes);
        axios.post('dataset/' + endpoint, attributes)
            .then( response => {
                this.setState({ 
                    resultTable: true, 
                    dataset: response.data,
                    attr: attributes
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
                <BlockUI fade={this.state.loading}/>
                <Collapse>
                    <ReportAttributes updateDataset={this.updateDatasetFile} datasetLastDate={this.state.lastdate} getDataset={this.renderDataset} />
                </Collapse>
                <ARTable hasResults={this.state.resultTable} data={this.state.dataset} chosenAttributes={this.state.attr}/>
            </div>

        )
    }
}

export default Report;