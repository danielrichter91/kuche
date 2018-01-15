import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import imageOne from '../img/food-salad-healthy-lunch-min.jpg';
import imageTwo from '../img/pexels-photo-62097-min.jpeg';
import imageThree from '../img/salad-healthy-diet-spinach-min.jpg';
import imageFour from '../img/pexels-photo-376464-min.jpeg';
import imageFive from '../img/pexels-photo-566566-min.jpeg';
import imageSix from '../img/pexels-photo-704971-min.jpeg';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='feature-background'>
          <Header headerColor='' />
          <div className='main-text'>
              <h1>From our home, to yours</h1>
              <p>All your favourite recipes, right where you need them</p>
          </div>
      </div>
      <div className='recipe-list-wrapper'>
          <div className='container'>
              <div className="card card-1">
                  <img src={imageOne} alt='' />
              </div>
              <div className="card card-1">
                  <img src={imageTwo} alt='' />
              </div>
              <div className="card card-1">
                  <img src={imageThree} alt='' />
              </div>
              <div className="card card-1">
                  <img src={imageFour} alt='' />
              </div>
              <div className="card card-1">
                  <img src={imageFive} alt='' />
              </div>
              <div className="card card-1">
                  <img src={imageSix} alt='' />
              </div>
              <div className='flex justify-content-center'>
                  <Link className='button' to="/recipes">More Recipes</Link>
              </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Home;
