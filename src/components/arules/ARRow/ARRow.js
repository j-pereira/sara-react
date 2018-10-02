import React from 'react';

const DatasetRow = (props) => {

    return (
        <div className={props.bg + " row p-1"}>
            <div className="col">{props.attributes.antecedants}</div>
            <div className="col">{props.attributes.consequents}</div>
            <div className="col">{props.attributes.support}</div>
            <div className="col">{props.attributes.confidence}</div>
        </div>
      
    )
}

export default DatasetRow;