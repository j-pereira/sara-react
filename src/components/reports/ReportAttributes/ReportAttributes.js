import React, { Component } from 'react';
import Calendar from '../../../hoc/Calendar/Calendar'

class ReportAttributes extends Component {


    getInitialState = () => {
        var value = new Date().toISOString();
        return {
          value: value
        }
    }
    
    handleChange = (value, formattedValue) => {
        this.setState({
          value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
          formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
        });
    }

    componentDidUpdate(){
        // Access ISO String and formatted values from the DOM.
        var hiddenInputElement = document.getElementById("example-datepicker");
        console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
        console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
    }



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
                                    <small className="form-check-label " for="area">Area</small>
                                </div>
                                <div className="form-group form-check">
                                    <input id="mag" type="checkbox" className="form-check-input"/>
                                    <small className="form-check-label " for="mag">Magnetic classifiction</small>
                                </div>
                                <div className="form-group form-check">
                                    <input id="xray" type="checkbox" className="form-check-input"/>
                                    <small className="form-check-label " for="xray">X-ray flux</small>
                                </div>
                                <div className="form-group form-check">
                                    <input id="radio" type="checkbox" className="form-check-input"/>
                                    <small className="form-check-label " for="radio">Radio flux</small>
                                </div>  
                            </div>
                        </div>
                    </div>
                    
                    <div class="card col col-sm-12 col-md-4 col-lg-4 border-right-0">
                        <div class="card-body">
                            <div className="col form-group">
                                <label className="container">Period</label>
                                
                                <div className="form-group row"> 
                                    <small for="start" className="pl-3 pt-1 mr-3">Start</small>
                                    <Calendar/>
                                </div>
                                <div className="form-group row"> 
                                    <small for="end" className="pl-3 pt-1 mr-3">End</small>
                                    <Calendar/>
                                </div>

                                <div className="form-group form-check pt-2">
                                    <input id="area" type="checkbox" className="form-check-input"/>
                                    <small className="form-check-label " for="area">Use hole datase</small>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="card col col-sm-12 col-md-4 col-lg-4">
                        <div class="card-body">
                            <div className="col form-group">
                                <label className="container">Association Rules</label>
                                <div className="form-group row pt-2">
                                    <small for="support" className="pl-3 pt-1">Support</small>
                                    <div className="col-sm-4 pl-2">
                                        <input type="text" className="form-control" id="support" placeholder="" style={{ height:'30px' }}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <small for="confidence" className="pl-3 pt-1">Confidence</small>
                                    <div className="col-sm-4 pl-2">
                                        <input type="text" className="form-control" id="confidence" placeholder="" style={{ height:'30px' }}/>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    
                    <div className="container">
                        <button type="submit" className="btn btn-primary float-right">Create</button>
                    </div> 
                </div>         
            </form>
        )
    }
}

export default ReportAttributes;