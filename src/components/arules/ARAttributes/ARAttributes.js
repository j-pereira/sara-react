import React, { Component } from 'react';
import Calendar from '../../../hoc/Calendar/Calendar'
import moment from 'moment';
import Loading from '../../../hoc/Loading/Loading'


class ARAttributes extends Component {

    constructor (props) {
        super(props)
        this.state = { 
            arParam: {
                holeBase: true,
                startYear: "1997",
                startMonth: "01",
                startDay: "01",
                endYear: moment().format('YYYY'),
                endMonth: moment().format('MM'),
                endDay: moment().format('DD'),
                area: true,
                magClassification: true,
                xray: true,
                radio: true,
                support: "",
                confidence: ""
            },
            loading: false
        }
    }

    changeSuppConfHandler = (attributeName, value) => {
        let param = this.state.arParam;
        param[attributeName] = value;
        this.setState({ arParam: param });
        console.log(this.state.arParam);
    }
    
    changeValueHandler = (attributeName) => {
        let param = this.state.arParam;
        param[attributeName] = !param[attributeName];
        this.setState({ arParam: param });
        console.log(this.state.arParam);
    }

    changeDateHandler = (attributeName, value) => {
        let param = this.state.datasetParam;
        let date = value.split("-");
        param[attributeName + "Year"] = date[0];
        param[attributeName + "Month"] = date[1];
        param[attributeName + "Day"] = date[2];
        this.setState({ datasetParam: param });
        console.log(this.state.datasetParam);
    }

    requestHandler = (event) => {
        event.preventDefault();
        let attributes = {
            ...this.state.arParam
        };
        this.props.getRules(attributes);
    }

   
    render () {

        return (
            <form className="container"> 
                <div className="row">
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className="card" style={{height:270}}>
                            <div className="card-body">
                                <label className="ml-5">Attributes</label>
                                <div className="form-group form-check ">
                                    <input 
                                        id="area" 
                                        type="checkbox"
                                        onChange={() => {this.changeValueHandler('area')}}
                                        className="form-check-input"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="area">Area</label>
                                </div>
                                <div className="form-group form-check ">
                                    <input 
                                        id="magClassification" 
                                        type="checkbox" 
                                        onChange={() => {this.changeValueHandler('magClassification')}}
                                        className="form-check-input"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="magClassification">Sunspot Magnetic Classifiction</label>
                                </div>
                                <div className="form-group form-check ">
                                    <input 
                                        id="xray" 
                                        type="checkbox" 
                                        onChange={() => {this.changeValueHandler('xray')}}
                                        className="form-check-input"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="xray">X-ray Flares</label>
                                </div>
                                <div className="form-group form-check ">
                                    <input 
                                        id="radio" 
                                        type="checkbox" 
                                        onChange={() => {this.changeValueHandler('radio')}}
                                        className="form-check-input"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="radio">Radio flux</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className="card" style={{height:270}}>
                            <div className="card-body">
                                <div className="form-group row">
                                    <div className="form-group col">
                                        <label htmlFor="support" className="ml-5">Support</label>
                                        <div className="">
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                value="0.1" 
                                                id="support" 
                                                onChange={(event) => {this.changeSuppConfHandler('support', event.target.value)}} /> 
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="form-group col">
                                        <label htmlFor="confidence" className="ml-5">Confidence</label>
                                        <div className="">
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                value="0.1" 
                                                id="confidence"
                                                onChange={(event) => {this.changeSuppConfHandler('confidence', event.target.value)}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className="card" style={{height:270}}>
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
                                            <input type="date" 
                                                className="form-control"
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
                                            <input type="date" 
                                                className="form-control"
                                                onChange={(event) => {this.changeDateHandler('end', event.target.value)}}/>
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

export default ARAttributes;