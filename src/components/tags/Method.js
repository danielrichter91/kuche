import React, { Component } from 'react';

class Method extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var data = this.props.data ? this.props.data.method : [];
    return (
        <div className='method'>
            <h2>Method</h2>
            {data.map((x, i) => {
                return (
                    <div key={i} className='method-step'>
                        <h5>Step {x.step}</h5>
                        <p>{x.description}</p>
                    </div>
                )
            })}
        </div>
    );
  }
}

export default Method;
