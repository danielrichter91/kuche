import React, { Component } from 'react';
import Header from './Header';
import imageOne from '../img/pexels-photo-376464-min.jpeg';
import RecipeData from '../data/data';
import { getImage } from '../services/mixin';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
    return (
    <div>
        <Header headerColor='dark' />
        <div className='container'>
            <div className='content'>
                <h1 className='recipe-title'>Recipes</h1>
                <ul className='recipe-list'>
                    {RecipeData.recipes.map((x, i) => {
                        var linkUrl = '/recipes/' + x.id;
                        return (
                            <li key={i} className='recipe-item'>
                                <a href={linkUrl} className='flex align-items'>
                                    <div className='recipe-thumbnail'>
                                        <img src={getImage(x.image)} alt='thumbnail' />
                                    </div>
                                    <p>{x.title}</p>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
    );
  }
}

export default Recipes;
