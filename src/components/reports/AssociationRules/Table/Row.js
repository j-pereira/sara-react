import React from 'react'


const row = (props) => {
    return (
        <div class="row">
            <div class="col-sm">
                {props.rule}
            </div>
            <div class="col-sm">
                {props.support}
            </div>
            <div class="col-sm">
                {props.confidence}
            </div>
        </div>
    )
}

export default row;