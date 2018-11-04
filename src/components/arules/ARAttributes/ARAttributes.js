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
                endYear: "",
                endMonth: "",
                endDay: "",
                area: true,
                sNumber: "none",
                magClassification: true,
                xray: true,
                radio: true,
                support: 0.01,
                confidence: 0.01,
                periodDisabled: true,
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
        let param = this.state.arParam;
        let date = value.split("-");
        param[attributeName + "Year"] = date[0];
        param[attributeName + "Month"] = date[1];
        param[attributeName + "Day"] = date[2];
        this.setState({ arParam: param });
        console.log(this.state.arParam);
    }

    changeHoleBaseHandler = (attributeName) => {
        let param = this.state.arParam;
        param[attributeName] = !param[attributeName];
        if (param[attributeName]) {
            param.periodDisabled = true;
        } else {
            param.periodDisabled = false;
        }
        this.setState({ arParam: param });
        console.log(this.state.arParam);
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
                                <label className="ml-5">Atributos</label>
                                <div className="form-group form-check ">
                                    <input 
                                        id="area" 
                                        type="checkbox"
                                        onChange={() => {this.changeValueHandler('area')}}
                                        className="form-check-input"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="area">Área</label>
                                </div>
                                <div className="form-group form-check ">
                                    <input 
                                        id="magClassification" 
                                        type="checkbox" 
                                        onChange={() => {this.changeValueHandler('magClassification')}}
                                        className="form-check-input"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="magClassification">Classificação magnética da mancha</label>
                                </div>
                                <div className="form-group form-check ">
                                    <input 
                                        id="xray" 
                                        type="checkbox" 
                                        onChange={() => {this.changeValueHandler('xray')}}
                                        className="form-check-input"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="xray">Explosões por Raio-X</label>
                                </div>
                                <div className="form-group form-check ">
                                    <input 
                                        id="radio" 
                                        type="checkbox" 
                                        onChange={() => {this.changeValueHandler('radio')}}
                                        className="form-check-input"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="radio">Fluxo de rádio</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6 col-lg-4">
                        <div className="card" style={{height:270}}>
                            <div className="card-body">
                                <div className="form-group row">
                                    <div className="form-group col">
                                        <label htmlFor="support" className="ml-5">Suporte</label>
                                        <div className="">
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                value={this.state.arParam.support}
                                                id="support" 
                                                onChange={(event) => {this.changeSuppConfHandler('support', event.target.value)}} /> 
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="form-group col">
                                        <label htmlFor="confidence" className="ml-5">Confiança</label>
                                        <div className="">
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                value={this.state.arParam.confidence}
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
                                    <label className="pl-3">Período</label>
                                    
                                    <div className="row pt-2">
                                        <div className="col col-sm-12">
                                            <label htmlFor="start">Começo</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col col-sm-12">
                                            <input type="date" 
                                                id="start" 
                                                name="start"
                                                value={this.state.arParam.startYear +"-"+ this.state.arParam.startMonth +"-"+ this.state.arParam.startDay}
                                                className="form-control"
                                                min="1997-01-01" max={this.props.datasetLastDate.data}
                                                className="form-control"
                                                onChange={(event) => {this.changeDateHandler('start', event.target.value)}}
                                                disabled={this.state.arParam.periodDisabled}/>
                                        </div>
                                    </div>
                                    <div className="row pt-2">
                                        <div className="col col-sm-12">
                                            <label htmlFor="end">Fim</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col col-sm-12">
                                            <input type="date" 
                                                id="end" 
                                                name="end"
                                                value={this.state.arParam.endYear +"-"+ this.state.arParam.endMonth +"-"+ this.state.arParam.endDay}
                                                className="form-control"
                                                min="1997-01-01" max={this.props.datasetLastDate.data}
                                                onChange={(event) => {this.changeDateHandler('end', event.target.value)}}
                                                disabled={this.state.arParam.periodDisabled}/>
                                        </div>
                                    </div>
                                    <div className="row pt-2">
                                        <div className="col col-lg-10 pr-0">
                                            <div className="form-group form-check pt-2">
                                                <input id="dataset" 
                                                    type="checkbox" 
                                                    className="form-check-input"
                                                    onChange={() => {this.changeHoleBaseHandler('holeBase')}}
                                                    defaultChecked/>
                                                <label className="form-check-label" htmlFor="dataset">Use toda a base de dados</label>
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
                            Gerar
                        </button>
                    </div> 
                </div>         
            </form>
        )
    }
}

export default ARAttributes;