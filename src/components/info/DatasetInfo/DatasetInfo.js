import React, { Component } from 'react';
import Loading from '../../../hoc/Loading/Loading'

class DatasetInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: false
        }
    }


    render() {
        let datasetStatus;
        let statusClass;
        let update;
        let loading;

        if (this.state.loading) {
            loading = <Loading/>;
        } else {
            loading = ''
        }

        if (this.props.datasetLastDate.updated) {
            datasetStatus = 'Updated';
            statusClass = 'text-success border-success';
            update = '';
        } else {
            datasetStatus = 'Outdated';
            statusClass = 'text-warning border-warning';
            update = 
                <div className="d-inline float-right">  
                    <button 
                        type="submit" 
                        className="btn btn-link btn-sm"
                        onClick={(event) => {
                            this.setState({ loading: true })
                            this.props.updateDataset(event)
                        }} >
                        Update  
                    </button>
                    {loading}
                </div>
        }

        return (
            <div className="container">
                <div className="alert alert-light border" role="alert">
                    <div className="d-inline"> 
                        Dataset info: Last date in dataset {this.props.datasetLastDate.data}
                        <small className={statusClass + " border rounded p-1 ml-3 mr-3"}>{datasetStatus}</small>
                    </div>
                    {update}      
                </div>
            </div>
        )
    }
    
}

export default DatasetInfo;