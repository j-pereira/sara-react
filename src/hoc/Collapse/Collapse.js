import React, { Component } from 'react';

class Collapse extends Component {

    constructor (props) {
        super(props)
        this.state = {
            buttonText: 'Esconder'
        }
    }

    changeButtonText = () => {
        if (this.state.buttonText === 'Esconder') {
            this.setState({ buttonText: 'Mostrar' })
        } else if (this.state.buttonText === 'Mostrar') {
            this.setState({ buttonText: 'Esconder' })
        }
    } 
    
    render () {
        return (
            <div id="accordion">
                <div className="card border-0">
                    <div id="collapseOne" className="collapse show border-top border-left border-right" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            {this.props.children}
                        </div>
                    </div>
                    <div className="container border" id="headingOne">
                        <h5 className="mb-0 mt-0 text-center">
                            <div className="btn btn-link" 
                                data-toggle="collapse" 
                                data-target="#collapseOne" 
                                aria-expanded="true" 
                                aria-controls="collapseOne"
                                onClick={this.changeButtonText}>
                                <small>{this.state.buttonText}</small>
                            </div>
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Collapse;