import React, { Component } from 'react';
import Collapse from '../../../hoc/Collapse/Collapse';
import DatasetInfo from'../../info/DatasetInfo/DatasetInfo';
import ARAttributes from '../ARAttributes/ARAttributes';
import ARTable from'../ARTable/ARTable';
import BlockUI from '../../../hoc/BlockUI/BlockUI';
import axios from 'axios';

class ARules extends Component {

    constructor (props) {
        super(props)
        this.state = {
            resultTable: false,
            rules: [],
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

    renderRules = (attributes) => {
        console.log(attributes);
        axios.get('/associationrules')
            .then( response => {
                this.setState({ 
                    resultTable: true, 
                    rules: response.data,
                    attr: attributes
                });
                console.log(this.state.rules);
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
                    <DatasetInfo updateDataset={this.updateDatasetFile} datasetLastDate={this.state.lastdate} />
                    <ARAttributes getRules={this.renderRules} />
                </Collapse>
                <ARTable hasResults={this.state.resultTable} data={this.state.rules} chosenAttributes={this.state.attr}/>
            </div>

        )
    }
}

export default ARules;