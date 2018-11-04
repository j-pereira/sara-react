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
        
        if (this.props.datasetLastDate.updated) {
            datasetStatus = 'Atualizada';
            statusClass = 'text-success border-success';
            update = '';
        } else {
            datasetStatus = 'Desatualizada';
            statusClass = 'text-warning border-warning';
            update = !this.state.loading ? 
                <div className="float-right">  
                    <button 
                        type="submit" 
                        className="btn btn-link btn-sm p-0"
                        onClick={(event) => {
                            this.setState({ loading: true })
                            this.props.updateDataset(event)
                        }} > Atualizar  
                    </button>
                </div>
                : <div className="d-inline float-right"> <Loading/> </div>
        }

        return (
            <div className="container">
                <div className="alert alert-light border" role="alert">
                    <div className="d-inline"> 
                        Informações da base de dados: Ultimo dia na base de dados {this.props.datasetLastDate.data}
                        <small className={statusClass + " border rounded p-1 ml-3 mr-3"}>{datasetStatus}</small>
                    </div>
                    {update}      
                </div>
            </div>
        )
    }
    
}

export default DatasetInfo;