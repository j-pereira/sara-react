import React, { Component } from 'react'
import Row from './Row'

class Table extends Component {

    

    render() {

        let render = "";
        if (this.props.renderTable) {
            for (let i=0; i<10; i++) {
                render += <Row rule="Rule" support="Rule" confidence="Rule"/>
            }
        }

        return (
            <div class="container border mt-4 p-2">
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
                {render}
            </div>
        )
    }

}

export default Table;