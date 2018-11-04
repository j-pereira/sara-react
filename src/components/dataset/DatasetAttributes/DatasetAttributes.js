import React, { Component } from 'react';
import Calendar from '../../../hoc/Calendar/Calendar'
import moment from 'moment';
import Loading from '../../../hoc/Loading/Loading'


class DatasetAttributes extends Component {

    constructor (props) {
        super(props)
        this.state = { 
            datasetParam: {
                dataset: 'original',
                holeBase: true,
                startYear: "1997",
                startMonth: "01",
                startDay: "01",
                endYear: "",
                endMonth: "",
                endDay: "",
                area: true,
                sNumber: true,
                magClassification: true,
                xray: true,
                radio: true,
                sNDisabled: false,
                periodDisabled: true,
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
        let date = value.split("-");
        param[attributeName + "Year"] = date[0];
        param[attributeName + "Month"] = date[1];
        param[attributeName + "Day"] = date[2];
        this.setState({ datasetParam: param });
        console.log(this.state.datasetParam);
    }

    changeHoleBaseHandler = (attributeName) => {
        let param = this.state.datasetParam;
        param[attributeName] = !param[attributeName];
        if (param[attributeName]) {
            param.periodDisabled = true;
        } else {
            param.periodDisabled = false;
        }
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

    render () {

        return (
            <form className="container"> 
               <div className="row">
                    <div className="col col-sm-12 col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="container ml-5">
                                    <label className="ml-5">Tipo de Base de dados</label>
                                    <div className="row pt-2">
                                        <div className="form-check col">
                                            <input className="form-check-input" 
                                                id="original"
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
                                                id="classified"
                                                type="radio" 
                                                name="dataset" 
                                                value='classified'
                                                onChange={(event) => {this.changeDatasetHandler('dataset', event.target.value)}}/>
                                            <label className="form-check-label" htmlFor="classified">
                                                Classificada
                                            </label>
                                        </div>
                                    </div>


                                    <label className="ml-5 pt-4">Atributos</label>
                                    <div className="row pt-2">
                                        <div className="form-group form-check col">
                                            <input 
                                                id="area" 
                                                type="checkbox"
                                                onChange={() => {this.changeValueHandler('area')}}
                                                className="form-check-input"
                                                defaultChecked/>
                                            <label className="form-check-label" htmlFor="area">Área</label>
                                        </div>
                                        <div className="form-group form-check col">
                                            <input 
                                                id="xray" 
                                                type="checkbox" 
                                                onChange={() => {this.changeValueHandler('xray')}}
                                                className="form-check-input"
                                                defaultChecked/>
                                            <label className="form-check-label" htmlFor="xray">Explosões por Raio-X</label>
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
                                                disabled={this.state.datasetParam.sNDisabled}/>
                                            <label className="form-check-label" htmlFor="sNumber">Número de manchas solares</label>
                                        </div>
                                        <div className="form-group form-check col">
                                            <input 
                                                id="radio" 
                                                type="checkbox" 
                                                onChange={() => {this.changeValueHandler('radio')}}
                                                className="form-check-input"
                                                defaultChecked/>
                                            <label className="form-check-label" htmlFor="radio">Fluxo de rádio</label>
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
                                            <label className="form-check-label" htmlFor="magClassification">Classificação magnética da mancha</label>
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
                                                value={this.state.datasetParam.startYear +"-"+ this.state.datasetParam.startMonth +"-"+ this.state.datasetParam.startDay}
                                                className="form-control"
                                                min="1997-01-01" max={this.props.datasetLastDate.data}
                                                className="form-control"
                                                onChange={(event) => {this.changeDateHandler('start', event.target.value)}}
                                                disabled={this.state.datasetParam.periodDisabled}/>
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
                                                value={this.state.datasetParam.endYear +"-"+ this.state.datasetParam.endMonth +"-"+ this.state.datasetParam.endDay}
                                                className="form-control"
                                                min="1997-01-01" max={this.props.datasetLastDate.data}
                                                onChange={(event) => {this.changeDateHandler('end', event.target.value)}}
                                                disabled={this.state.datasetParam.periodDisabled}/>
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
                            Pesquisar
                        </button>
                    </div> 
                </div>         
            </form>
        )
    }
}

export default DatasetAttributes;