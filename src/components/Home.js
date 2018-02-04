import React, { Component } from 'react';
import Header from './Header';
import List from './tags/List';
import Form from './tags/Form';
// import imageOne from '../img/food-salad-healthy-lunch-min.jpg';
// import imageTwo from '../img/pexels-photo-62097-min.jpeg';
// import imageThree from '../img/salad-healthy-diet-spinach-min.jpg';
// import imageFour from '../img/pexels-photo-376464-min.jpeg';
// import imageFive from '../img/pexels-photo-566566-min.jpeg';
// import imageSix from '../img/pexels-photo-704971-min.jpeg';

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
            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
                <List />
                </div>
                <div className="col-md-4 offset-md-1">
                <h2>Add a new article</h2>
                <Form />
                </div>
            </div>
                <ul className='home-recipe-list'>
                    <li><a href="">Buckwheat pancakes with maple syrup</a></li>
                    <li><a href="">Wheat pancakes with chocolate syrup</a></li>
                    <li><a href="">Wheat pancakes with fresh fruit</a></li>
                    <li><a href="">Automotive Trades and Services</a></li>
                    <li><a href="">Aviation and Maritime</a></li>
                    <li><a href="">Building, Construction and Property</a></li>
                    <li><a href="">Business and Finance</a></li>
                    <li><a href="">Community Services</a></li>
                    <li><a href="">Engineering and Electrotechnology</a></li>
                    <li><a href="">Hairdressing and Beauty</a></li>
                    <li><a href="">Health and Fitness</a></li>
                    <li><a href="">Information and Communication Technology</a></li>
                    <li><a href="">Library and Information Services</a></li>
                    <li><a href="">Logistics and Warehousing</a></li>
                    <li><a href="">Preparation for Work, Further Study and Pathways</a></li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
}

export default Home;
