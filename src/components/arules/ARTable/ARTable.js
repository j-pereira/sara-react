import React, { Component } from 'react';
import ARRow from '../ARRow/ARRow';
import '../ARTable/ARTable.css'

class ARTable extends Component {
    
    convertArrayOfObjectsToCSV(arTable) {
        let result, ctr, keys, columnDelimiter, lineDelimiter, data;
        data = arTable || null;
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
        let arTable = this.convertDataIntoRules(this.props.data);
        let csv = this.convertArrayOfObjectsToCSV(arTable);
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
    

    convertDataIntoRules(data){
        let rules = [];
        let antecedants = data.antecedants;
        let consequents = data.consequents
        let support = data.support
        let confidence = data.confidence

        for (let i=0; i< Object.keys(antecedants).length; i++) {
            rules[i] = {
                'antecedants': antecedants[i.toString()],
                'consequents': consequents[i.toString()],
                'support': support[i.toString()],
                'confidence': confidence[i.toString()]
            }
        }
        return rules;
    }




    render () {
        let render;
        let table;
        let bgColor = 'bg-dark-table';

        if (this.props.hasResults) {
            let rules = this.convertDataIntoRules(this.props.data);

            let rows = rules.map(row => {
                bgColor = bgColor === 'bg-dark-table' ? '' : 'bg-dark-table';
            
                return (
                    <ARRow 
                        bg={bgColor}
                        attributes={row}
                        renderAttributes = {this.props.chosenAttributes}
                    />
                    
                )
            })
            
            table = <div className="container border">
                        <div className="container mt-3 mb-3">
                            <div className="row bg-dark-table font-weight-bold p-2">
                                <div className="col">Antecedent</div>
                                <div className="col">Consequent</div>
                                <div className="col">Support</div>
                                <div className="col">Confidence</div>
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

export default ARTable;