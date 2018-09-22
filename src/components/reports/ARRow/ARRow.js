import React from 'react';

const ARRow = (props) => {

    let area = '';
    let sNumber = '';
    let magClassification = '';
    let xray = '';
    let radio = '';

    
    if (props.renderAttributes.area) {
        area = <div className="col">{props.attributes.area}</div>
    }
    if (props.renderAttributes.dataset === 'original' && props.renderAttributes.sNumber) {
        sNumber = <div className="col">{props.attributes.sNumber}</div>
    }
    if (props.renderAttributes.magClassification) {
        magClassification = <div className="col">{props.attributes.magClassification}</div>
    }
    if (props.renderAttributes.xray) {
        xray = <div className="col">{props.attributes.xray}</div>
    }
    if (props.renderAttributes.radio) {
        radio = <div className="col">{props.attributes.radio}</div>
    }
    
    


    //let l = Object.keys(props.attributes).map(i => {
    //    return ( props.renderAttributes.area != 'none' ? <div className="col">{props.attributes[i]}</div> : '')   
    //});

    return (
        <div className={props.bg + " row p-1"}>
            <div className="col">{props.attributes.year}</div>
            <div className="col">{props.attributes.month}</div>
            <div className="col">{props.attributes.day}</div>
            <div className="col">{props.attributes.region}</div>
            {area}
            {sNumber}
            {magClassification}
            {xray}
            {radio}
        </div>
      
    )
}

export default ARRow;