import React, { Component } from 'react';
import ARRow from '../ARRow/ARRow';

class ARTable extends Component {
    
    render () {
        let render;
        let table;
        let bgColor = 'bg-light';

        if (this.props.hasResults) {
            let rows = this.props.data.map(row => {
                bgColor = bgColor === 'bg-light' ? 'bg-white' : 'bg-light';
                return (
                    <ARRow
                        bg={bgColor}
                        year={row.year}    
                        month={row.month}
                        day={row.day}
                        region={row.region}
                        area={row.area}
                        magClassification={row.magClassification}
                        xray={row.xray}
                        radio={row.radio}
                    />
                )
            })

            table = <div className="container border">
                        <div className="container mt-3 mb-3">
                            <div className="row bg-light font-weight-bold">
                                <div className="col align-middle">Year</div>
                                <div className="col">Month</div>
                                <div className="col">Day</div>
                                <div className="col">Region</div>
                                <div className="col">Area</div>
                                <div className="col">Sunspot Magnetic Classification</div>
                                <div className="col">X-Ray Flares</div>
                                <div className="col">Radio Flux</div>
                            </div>
                            {rows} 
                       </div>
                    </div>
            render = <div className="mt-3 mb-">
                        <div class="d-flex flex-row-reverse">
                            <div class="p-2">Filter</div>
                            <div class="p-2">Choose</div>
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