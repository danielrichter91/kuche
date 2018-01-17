import React, { Component } from 'react';

class IngredientsList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        var data = this.props.data ? this.props.data.ingredients : [];
    return (
        <div className='ingredients'>
            <h2>Ingredients</h2>
            <ul className='ingredients-list'>
                {data.map((x, i) => {
                    return (
                        <li key={i} className='ingredients-item'>{x}</li>
                    )
                })}
            </ul>
        </div>
    );
  }
}

export default IngredientsList;
