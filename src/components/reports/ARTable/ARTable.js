import React from 'react'

const ARTable = (props) => {

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
            <div class="row">
                <div class="col-sm">
                    Rule 1
                </div>
                <div class="col-sm">
                    Support 1
                </div>
                <div class="col-sm">
                    Confidence 1
                </div>
            </div>
        </div>
    )
}

export default ARTable;