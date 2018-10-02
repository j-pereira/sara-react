import React, { Component } from 'react';
import ARRow from '../ARRow/ARRow';
import '../ARTable/ARTable.css'

class ARTable extends Component {
    
    render () {
        let render;
        let table;
        let bgColor = 'bg-light';

        if (this.props.hasResults) {
            let rules = [];
            let antecedants = this.props.data.antecedants;
            let consequents = this.props.data.consequents
            let support = this.props.data.support
            let confidence = this.props.data.confidence

            for (let i=0; i< Object.keys(antecedants).length; i++) {
                rules[i] = {
                    'antecedants': antecedants[i.toString()],
                    'consequents': consequents[i.toString()],
                    'support': support[i.toString()],
                    'confidence': confidence[i.toString()]
                }
            }

            let rows = rules.map(row => {
                bgColor = bgColor === 'bg-light' ? 'bg-muted' : 'bg-light';
            
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
                            <div className="row bg-light font-weight-bold p-2">
                                <div className="col">Antecedent</div>
                                <div className="col">Consequent</div>
                                <div className="col">Support</div>
                                <div className="col">Confidence</div>
                            </div>
                            {rows} 
                       </div>
                    </div>
            render = <div className="mt-3">
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