import React from 'react';

const DatasetRow = (props) => {
    let aList = props.attributes.antecedants.split("{")
    let antecedant = aList[1].split("}")
    let cList = props.attributes.consequents.split("{")
    let consequent = cList[1].split("}")
    return (
        <div className={props.bg + " row p-1"}>
            <div className="col">{antecedant[0]}</div>
            <div className="col">{consequent[0]}</div>
            <div className="col">{props.attributes.support}</div>
            <div className="col">{props.attributes.confidence}</div>
        </div>
      
    )
}

export default DatasetRow;