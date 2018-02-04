import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="is-active"><a href='#'>Recipes</a></li>
                    </ul>
                </nav>
                <h1 className='recipe-title'>Recipes</h1>
                <ul className='recipe-list'>
                    {RecipeData.recipes.map((x, i) => {
                        var linkUrl = '/recipes/' + x.id;
                        return (
                            <li key={i} className='recipe-item'>
                                <Link className='flex align-items' to={linkUrl}>
                                    <div className='recipe-thumbnail'>
                                        <img src={getImage(x.image)} alt='thumbnail' />
                                    </div>
                                    <p>{x.title}</p>
                                </Link>
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
