import React, { Component } from 'react';
import Calendar from '../../../hoc/Calendar/Calendar'
import moment from 'moment';
import Loading from '../../../hoc/Loading/Loading'

class ReportAttributes extends Component {

    constructor (props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    render () {
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
                <div>
                    <div className="row mt-4">
                        <div className="col col-sm-12">
                            <label>Do you want to update?</label>
                            <button 
                                type="submit" 
                                className="btn btn-link"
                                onClick={(event) => {
                                    this.setState({ loading: true })
                                    this.props.updateDataset(event)
                                }}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                    {loading}
                </div>
        }

        return (
            <form className="container"> 
                <div className="row">
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className="card" style={{height: 256}}>
                            <div class="card-body">
                                <div className="col form-group">
                                    <div className="row pt-2">
                                        <div className="col col-sm-12 col-md-6 col-lg-6">
                                            <label className="pl-3">Dataset info</label>
                                        </div>
                                        <div className="col col-sm-12 col-md-6 col-lg-6">
                                            <small className={statusClass + " border rounded p-2"}>{datasetStatus}</small>
                                        </div>
                                    </div>
                                    <div className="row pt-2">
                                        <div className="col col-sm-12">
                                            <label for="lastDate">Last date in dataset</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col col-sm-12">
                                            <label>{this.props.datasetLastDate.data}</label>
                                        </div>
                                    </div>
                                    {update}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className="card" style={{height: 256}}>
                            <div class="card-body">
                                <div className="col form-group">
                                    <label className="pl-3">Attributes</label>
                                    <div className="form-group form-check pt-2">
                                        <input id="area" type="checkbox" className="form-check-input"/>
                                        <label className="form-check-label" for="area">Area</label>
                                    </div>
                                    <div className="form-group form-check">
                                        <input id="mag" type="checkbox" className="form-check-input"/>
                                        <label className="form-check-label" for="mag">Magnetic classifiction</label>
                                    </div>
                                    <div className="form-group form-check">
                                        <input id="xray" type="checkbox" className="form-check-input"/>
                                        <label className="form-check-label" for="xray">X-ray flux</label>
                                    </div>
                                    <div className="form-group form-check">
                                        <input id="radio" type="checkbox" className="form-check-input"/>
                                        <label className="form-check-label" for="radio">Radio flux</label>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className="card" style={{height: 256}}>
                            <div class="card-body">
                                <div className="col">
                                    <label className="pl-3">Period</label>
                                    
                                    <div className="row pt-2">
                                        <div className="col col-sm-12">
                                            <label for="start">Start</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col col-sm-12">
                                            <Calendar date={moment("1997-01-01 00:00:00")} minDate={moment("1997-01-01 00:00:00")}/>
                                        </div>
                                    </div>
                                    <div className="row pt-2">
                                        <div className="col col-sm-12">
                                            <label for="end">End</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col col-sm-12">
                                            <Calendar date={moment()} minDate={moment("1997-01-01 00:00:00")}/>
                                        </div>
                                    </div>
                                    <div className="row pt-2">
                                        <div className="col col-lg-10 pr-0">
                                            <div className="form-group form-check pt-2">
                                                <input id="dataset" type="checkbox" className="form-check-input"/>
                                                <label className="form-check-label " for="dataset">Use hole datase</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="container pt-3">
                        <button type="submit" 
                            className="btn btn-primary float-right"
                            onClick={(event) => {this.props.generateRules(event)}}>
                            Create
                        </button>
                    </div> 
                </div>         
            </form>
        )
    }
}

export default ReportAttributes;