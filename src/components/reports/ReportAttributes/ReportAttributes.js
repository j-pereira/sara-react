import React, { Component } from 'react';
import Calendar from '../../../hoc/Calendar/Calendar'
import moment from 'moment';

class ReportAttributes extends Component {

    render () {
        return (
            <form className="container"> 
                <div className="row">
                    <div class="card col-sm-12 col-md-4 col-lg-4 border-right-0">
                        <div class="card-body">
                            <div className="col form-group">
                                <label className="container" >Attributes</label>
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
                    
                    <div class="card col col-sm-12 col-md-4 col-lg-4 border-right-0">
                        <div class="card-body">
                            <div className="col form-group">
                                <label className="container">Period</label>
                                
                                <div className="row pt-2">
                                    <div className="col col-lg-4 pr-0">
                                        <label for="start">Start</label>
                                    </div>
                                    <div className="col col-lg-4 pl-0">
                                        <Calendar date={moment("1997-01-01 00:00:00")} minDate={moment("1997-01-01 00:00:00")}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-lg-4 pr-0">
                                        <label for="end">End</label>
                                    </div>
                                    <div className="col col-lg-6 pl-0">
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



                    <div class="card col col-sm-12 col-md-4 col-lg-4">
                        <div class="card-body">
                            <div className="col form-group">
                                <label className="container">Association Rules</label>
                                <div className="row pt-2">
                                    <div className="col col-lg-6 pr-0">
                                        <label for="support">Support</label>
                                    </div>
                                    <div className="col col-lg-6 pl-0">
                                        <input type="text" className="form-control" id="support" placeholder="" style={{ height:'30px' }}/>
                                    </div>
                                </div>
                                <div className="row pt-2">
                                    <div className="col col-lg-6 pr-0">
                                        <label for="support">Confidence</label>
                                    </div>
                                    <div className="col col-lg-6 pl-0">
                                        <input type="text" className="form-control" id="confidence" placeholder="" style={{ height:'30px' }}/>
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