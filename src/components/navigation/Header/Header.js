import React from 'react';
import { Link } from 'react-router-dom';

const header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                {/* <img className="ml-2" src={logo} style={{ width:'65px', height:'28px' }}/> */}
                <div className="ml-3 font-weight-light"> SARA </div>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-3" id="navbarNavAltMarkup">
                <div className="navbar-nav mr-10">
                    <Link className="nav-item nav-link" to="/reports">Reports</Link>
                </div>
            </div>

            <a className="nav-item nav-link text-white"><i className="fas fa-sign-out-alt"></i></a>
        </nav>
    )
};

export default header;
