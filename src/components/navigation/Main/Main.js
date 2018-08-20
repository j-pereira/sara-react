import React from 'react';

const main = (props) => {
    return (
        <div className="container pt-3">
            {props.children}
        </div>
    )
}

export default main;