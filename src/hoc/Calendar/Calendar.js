import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';
 
class CalendarDatePicker extends Component {
    constructor (props) {
        super(props)
        this.state = {
            date: props.date,
            minDate: props.minDate
        };
        this.handleChange = this.handleChange.bind(this);
    }
 
    handleChange(newDate) {
        this.setState({
            date: newDate
        });
    }
 
    render() {
        return ( 
            <DatePicker
                selected={this.state.date}
                onChange={this.handleChange}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                minDate={this.state.minDate}
                maxDate={moment()}
                showDisabledMonthNavigation
                todayButton={"Today"}
            />
            
        );
    }
}
export default CalendarDatePicker;