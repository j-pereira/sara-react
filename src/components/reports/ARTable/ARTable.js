import React, { Component } from 'react'

class ARTable extends Component {
    
    render () {
        let table;
        if (this.props.hasResults) {
            table = <div class="container border mt-4 p-2">
                        <div class="row">
                            <div class="col-sm">
                                Rule
                            </div>
                            <div class="col-sm">
                                Support
                            </div>
                            <div class="col-sm">
                                Confidence
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm">
                                {this.props.data}
                            </div>
                            <div class="col-sm">
                                Support 1
                            </div>
                            <div class="col-sm">
                                Confidence 1
                            </div>
                        </div>
                        
                    </div>
        } else {
            table = ''
        }

        return ( 
            <div>
                {table}
            </div>
        )
    }
    
}

export default ARTable;