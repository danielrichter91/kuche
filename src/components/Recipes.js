import React, { Component } from 'react';
import Header from './Header';
import imageOne from '../img/pexels-photo-376464-min.jpeg';
import imageTwo from '../img/pexels-photo-376464-min.jpeg';
import imageThree from '../img/pexels-photo-376464-min.jpeg';

class Recipes extends Component {
  render() {
    return (
    <div>
        <Header headerColor='dark' />
        <div className='container'>
            <div className='content'>
                <h1 className='recipe-title'>Recipes</h1>
                <ul className='recipe-list'>
                    <li className='recipe-item'>
                        <a href='content.html' className='flex align-items'>
                            <div className='recipe-thumbnail'>
                                <img src={imageOne} alt='#' />
                            </div>
                            <p>Buckwheat pancakes with maple syrup</p>
                        </a>
                    </li>
                    <li className='recipe-item'>
                        <a href='#' className='flex align-items'>
                            <div className='recipe-thumbnail'>
                                <img src={imageTwo} alt='#' />
                            </div>
                            <p>Buckwheat pancakes with maple syrup</p>
                        </a>
                    </li>
                    <li className='recipe-item'>
                        <a href='#' className='flex align-items'>
                            <div className='recipe-thumbnail'>
                                <img src={imageThree} alt='#' />
                            </div>
                            <p>Buckwheat pancakes with maple syrup</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
}

export default Recipes;
