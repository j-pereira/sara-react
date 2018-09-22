import React, { Component } from 'react';
import ARRow from '../ARRow/ARRow';
import '../ARTable/ARTable.css'

class ARTable extends Component {
    
    render () {
        let render;
        let table;
        let bgColor = 'bg-light';

        if (this.props.hasResults) {
            let rows = this.props.data.map(row => {
                bgColor = bgColor === 'bg-light' ? 'bg-muted' : 'bg-light';
            
                return (
                    <ARRow 
                        bg={bgColor}
                        attributes={row}
                        renderAttributes = {this.props.chosenAttributes}
                    />
                    
                )
            })

            let area = '';
            let sNumber = '';
            let magClassification = '';
            let xray = '';
            let radio = '';

            
            if (this.props.chosenAttributes.area) {
                area = <div className="col">Area</div>
            }
            if ((this.props.chosenAttributes.dataset === 'original' && this.props.chosenAttributes.sNumber)) {
                sNumber = <div className="col">Sunspot Number</div>
            }
            if (this.props.chosenAttributes.magClassification) {
                magClassification = <div className="col">Sunspot Magnetic Classification</div>
            }
            if (this.props.chosenAttributes.xray) {
                xray = <div className="col">X-Ray Flares</div>
            }
            if (this.props.chosenAttributes.radio) {
                radio = <div className="col">Radio Flux</div>
            }

            table = <div className="container border">
                        <div className="container mt-3 mb-3">
                            <div className="row bg-light font-weight-bold">
                                <div className="col">Year</div>
                                <div className="col"><span>Month</span></div>
                                <div className="col">Day</div>
                                <div className="col">Region</div>
                                {area}
                                {sNumber}
                                {magClassification}
                                {xray}
                                {radio}
                            </div>
                            {rows} 
                       </div>
                    </div>
            render = <div className="mt-3 mb-">
                        <div className="d-flex flex-row-reverse">
                            <div className="p-2">Filter</div>
                            <div className="p-2">Choose</div>
                        </div>
                        <div>
                            {table}
                        </div>
                    </div>

        } else {
            render = ''
        }

        return ( 
            <div className="mb-3">
                {render}
            </div>
        )
    }
    
}

export default ARTable;