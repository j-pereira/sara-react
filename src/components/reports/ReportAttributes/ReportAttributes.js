import React, { Component } from 'react';
import Calendar from '../../../hoc/Calendar/Calendar'
import moment from 'moment';
import Loading from '../../../hoc/Loading/Loading'


class ReportAttributes extends Component {

    constructor (props) {
        super(props)
        this.state = { 
            datasetParam: {
                dataset: 'original',
                holeBase: true,
                startYear: "1997",
                startMonth: "01",
                startDay: "01",
                endYear: moment().format('YYYY'),
                endMonth: moment().format('MM'),
                endDay: moment().format('DD'),
                area: true,
                sNumber: true,
                magClassification: true,
                xray: true,
                radio: true,
                sNDisabled: false
            },
            loading: false
        }
    }

    changeDatasetHandler = (attributeName, value) => {
        let param = this.state.datasetParam;
        param[attributeName] = value;
        if (value === 'classified') {
            param.sNDisabled = true;
        } else {
            param.sNDisabled = false;
        }
        this.setState({ datasetParam: param });
        console.log(this.state.datasetParam);
    }

    changeValueHandler = (attributeName) => {
        let param = this.state.datasetParam;
        param[attributeName] = !param[attributeName];
        this.setState({ datasetParam: param });
        console.log(this.state.datasetParam);
    }

    changeDateHandler = (attributeName, value) => {
        let param = this.state.datasetParam;
        param[attributeName + "Year"] = value.format('YYYY');
        param[attributeName + "Month"] = value.format('MM');
        param[attributeName + "Day"] = value.format('DD');
        this.setState({ datasetParam: param });
        console.log(this.state.datasetParam);
    }


    requestHandler = (event) => {
        event.preventDefault();
        let attributes = {
            ...this.state.datasetParam
        };
        this.props.getDataset(attributes);
    }

    checkDisabled = () => {
        return this.state.sNDisabled
    }

    /*componentWillUpdate(){
        if(this.props.datasetLastDate.data != undefined) {
            this.setState({
                date: moment(this.props.datasetLastDate.data + " 00:00:00")
            });
        }
    }*/

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
            <form className="container"> 
                <div className="alert alert-light border" role="alert">
                    <div className="d-inline"> 
                        Dataset info: Last date in dataset {this.props.datasetLastDate.data}
                        <small className={statusClass + " border rounded p-1 ml-3 mr-3"}>{datasetStatus}</small>
                    </div>
                    {update}      
                </div>
                <div className="row">
                    <div className="col col-sm-12 col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="container ml-5">
                                    <label className="ml-5">Dataset Type</label>
                                    <div className="row pt-1">
                                        <div className="form-check col">
                                            <input className="form-check-input" 
                                                type="radio" 
                                                name="dataset" 
                                                value='original'
                                                defaultChecked
                                                onChange={(event) => {this.changeDatasetHandler('dataset', event.target.value)}}/>
                                            <label className="form-check-label" htmlFor="original">
                                                Original
                                            </label>
                                        </div>
                                        <div className="form-check col">
                                            <input className="form-check-input" 
                                                type="radio" 
                                                name="dataset" 
                                                value='classified'
                                                
                                                onChange={(event) => {this.changeDatasetHandler('dataset', event.target.value)}}/>
                                            <label className="form-check-label" htmlFor="classified">
                                                Classified
                                            </label>
                                        </div>
                                    </div>


                                    <label className="ml-5 pt-3">Attributes</label>
                                    <div className="row">
                                        <div className="form-group form-check col">
                                            <input 
                                                id="area" 
                                                type="checkbox"
                                                onChange={() => {this.changeValueHandler('area')}}
                                                className="form-check-input"
                                                defaultChecked/>
                                            <label className="form-check-label" htmlFor="area">Area</label>
                                        </div>
                                        <div className="form-group form-check col">
                                            <input 
                                                id="xray" 
                                                type="checkbox" 
                                                onChange={() => {this.changeValueHandler('xray')}}
                                                className="form-check-input"
                                                defaultChecked/>
                                            <label className="form-check-label" htmlFor="xray">X-ray Flares</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group form-check col">
                                            <input 
                                                id="sNumber" 
                                                type="checkbox" 
                                                onChange={() => {this.changeValueHandler('sNumber')}}
                                                className="form-check-input"
                                                defaultChecked
                                                disabled={() => {this.checkDisabled()}}/>
                                            <label className="form-check-label" htmlFor="sNumber">Sunspot Number</label>
                                        </div>
                                        <div className="form-group form-check col">
                                            <input 
                                                id="radio" 
                                                type="checkbox" 
                                                onChange={() => {this.changeValueHandler('radio')}}
                                                className="form-check-input"
                                                defaultChecked/>
                                            <label className="form-check-label" htmlFor="radio">Radio flux</label>
                                        </div>  
                                    </div>
                                    <div className="row">
                                        <div className="form-group form-check col">
                                            <input 
                                                id="magClassification" 
                                                type="checkbox" 
                                                onChange={() => {this.changeValueHandler('magClassification')}}
                                                className="form-check-input"
                                                defaultChecked/>
                                            <label className="form-check-label" htmlFor="magClassification">Sunspot Magnetic Classifiction</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="col">
                                    <label className="pl-3">Period</label>
                                    
                                    <div className="row pt-2">
                                        <div className="col col-sm-12">
                                            <label htmlFor="start">Start</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col col-sm-12">
                                            <Calendar 
                                                date={moment("1997-01-01 00:00:00")} 
                                                minDate={moment("1997-01-01 00:00:00")}
                                                onChange={(event) => {this.changeDateHandler('start', event.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="row pt-2">
                                        <div className="col col-sm-12">
                                            <label htmlFor="end">End</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col col-sm-12">
                                            <Calendar 
                                                date={moment()} 
                                                minDate={moment("1997-01-01 00:00:00")}
                                                onChange={(event) => {this.changeDateHandler('start', event.target.value)}}/>
                                            
                                        </div>
                                    </div>
                                    <div className="row pt-2">
                                        <div className="col col-lg-10 pr-0">
                                            <div className="form-group form-check pt-2">
                                                <input id="dataset" 
                                                    type="checkbox" 
                                                    className="form-check-input"
                                                    onChange={() => {this.changeValueHandler('holeBase')}}
                                                    defaultChecked/>
                                                <label className="form-check-label" htmlFor="dataset">Use hole dataset</label>
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
                            onClick={(event) => {this.requestHandler(event)}}>
                            Search
                        </button>
                    </div> 
                </div>         
            </form>
        )
    }
}

export default ReportAttributes;