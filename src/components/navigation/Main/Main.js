import React from 'react';
//import LeftMenu from '../LeftMenu/LeftMenu'

const main = (props) => {
    return (
        <div className="container mt-3">
           
            {props.children}
            
        </div>
    )
}   

export default main;