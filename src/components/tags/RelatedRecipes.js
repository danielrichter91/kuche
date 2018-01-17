import React, { Component } from 'react';

class RelatedRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var data = this.props.data ? this.props.data.method : [];
    return (
        <div className='related-recipes'>
            <h2 className='related-recipes-title'>Related recipes</h2>
            <ul className='related-recipes-list'>
                <li className='related-recipes-item'>
                    <a href='/'>
                        <h5>Buckwheat pancakes with maple syrup</h5>
                        <div className='related-recipes-img'>
                            <img src={this.props.image} alt='related' />
                        </div>
                    </a>
                </li>
                <li className='related-recipes-item'>
                    <a href='/'>
                        <h5>Buckwheat pancakes with maple syrup</h5>
                        <div className='related-recipes-img'>
                            <img src={this.props.image} alt='related' />
                        </div>
                    </a>
                </li>
                <li className='related-recipes-item'>
                    <a href='/'>
                        <h5>Buckwheat pancakes with maple syrup</h5>
                        <div className='related-recipes-img'>
                            <img src={this.props.image} alt='related' />
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
  }
}

export default RelatedRecipes;
