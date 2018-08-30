import React from 'react';

const ARRow = (props) => {
    return (
        <div className={props.bg + " row p-1"}>
            <div className="col">{props.year}</div>
            <div className="col">{props.month}</div>
            <div className="col">{props.day}</div>
            <div className="col">{props.region}</div>
            <div className="col">{props.area}</div>
            <div className="col">{props.magClassification}</div>
            <div className="col">{props.xray}</div>
            <div className="col">{props.radio}</div>
        </div>
      
    )
}

export default ARRow;