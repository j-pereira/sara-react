import React, { Component } from 'react';
import DatasetRow from '../DatasetRow/DatasetRow';
import '../DatasetTable/DatasetTable.css'

class DatasetTable extends Component {

    convertArrayOfObjectsToCSV(dataset) {
        let result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = dataset || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = ',';
        lineDelimiter = '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(item => {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    downloadCSV(fileName) {
        let data, filename, link;

        let csv = this.convertArrayOfObjectsToCSV(this.props.data);
        if (csv == null) return;

        filename = filename || 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    }
    
    render () {
        let render;
        let table;
        let bgColor = 'bg-dark-table';

        if (this.props.hasResults) {
            let rows = this.props.data.map(row => {
                bgColor = bgColor === 'bg-dark-table' ? '' : 'bg-dark-table';
            
                return (
                    <DatasetRow 
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
                            <div className="row bg-dark-table font-weight-bold pt-2 pb-2">
                                <div className="col">Year</div>
                                <div className="col">Month</div>
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
            render = <div className="mt-3">
                        <div className="row mt-3 mb-3">
                            <div className="col">
                                <div className="ml-3">
                                    <h6><a href='#' className="badge badge-primary p-2" onClick={() => { this.downloadCSV("region-data.csv") }}>Download CSV</a></h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {table}
                            </div>
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

export default DatasetTable;