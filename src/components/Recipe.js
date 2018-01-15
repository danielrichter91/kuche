import React, { Component } from 'react';
import Header from './Header';
import imageOne from '../img/pexels-photo-376464-min.jpeg';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageId: undefined
        };
    }
    componentDidMount = () => {
        this.setState({
            pageId: this.props.match.params.id
        })
    }
    render() {
    return (
    <div>
        <Header headerColor='dark' />
        <div className='container'>
            <div className='content'>
                <h1 className='recipe-title'>Buckwheat pancakes with maple syrup</h1>
                <div className='recipe-img'>
                    <img src={imageOne} alt='main-photo' />
                </div>
                <div className='main-content'>
                    <div className='ingredients'>
                        <h2>Ingredients</h2>
                        <ul className='ingredients-list'>
                            <li className='ingredients-item'>3/4 cup buckwheat flour</li>
                            <li className='ingredients-item'>3/4 cup white spelt flour</li>
                            <li className='ingredients-item'>3 teaspoons baking powder</li>
                            <li className='ingredients-item checked'>1 teaspoon ground cinnamon</li>
                            <li className='ingredients-item'>3/4 cup mashed banana</li>
                            <li className='ingredients-item'>1 egg</li>
                            <li className='ingredients-item checked'>1/4 cup maple syrup, plus extra to serve</li>
                            <li className='ingredients-item'>3/4 cup milk</li>
                            <li className='ingredients-item'>unsalted butter, to grease the pan</li>
                            <li className='ingredients-item'>store-bought vanilla bean yoghurt, to serve</li>
                            <li className='ingredients-item'>extra banana, sliced, to serve</li>
                        </ul>
                    </div>
                    <div className='method'>
                        <h2>Method</h2>
                        <div className='method-step'>
                            <h5>Step 1</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eius molestias earum animi, ea exercitationem! Suscipit doloremque, facilis, dolorem recusandae corporis aut temporibus fugit, delectus vero fuga quis ut commodi!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati fugit cumque dignissimos eligendi velit. Sunt, quas necessitatibus! Architecto excepturi tempore laborum quod explicabo eos nisi placeat ea amet hic.</p>
                        </div>
                        <div className='method-step'>
                            <h5>Step 2</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eius molestias earum animi, ea exercitationem! Suscipit doloremque, facilis, dolorem recusandae corporis aut temporibus fugit, delectus vero fuga quis ut commodi!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati fugit cumque dignissimos eligendi velit. Sunt, quas necessitatibus! Architecto excepturi tempore laborum quod explicabo eos nisi placeat ea amet hic.</p>
                        </div>
                        <div className='method-step'>
                            <h5>Step 3</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eius molestias earum animi, ea exercitationem! Suscipit doloremque, facilis, dolorem recusandae corporis aut temporibus fugit, delectus vero fuga quis ut commodi!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati fugit cumque dignissimos eligendi velit. Sunt, quas necessitatibus! Architecto excepturi tempore laborum quod explicabo eos nisi placeat ea amet hic.</p>
                        </div>
                        
                    </div>
                </div>
                <div className='related-recipes'>
                    <h2 className='related-recipes-title'>Related recipes</h2>
                    <ul className='related-recipes-list'>
                        <li className='related-recipes-item'>
                            <a href='#'>
                                <h5>Buckwheat pancakes with maple syrup</h5>
                                <div className='related-recipes-img'>
                                    <img src={imageOne} alt='related-photo' />
                                </div>
                            </a>
                        </li>
                        <li className='related-recipes-item'>
                            <a href='#'>
                                <h5>Buckwheat pancakes with maple syrup</h5>
                                <div className='related-recipes-img'>
                                    <img src={imageOne} alt='related-photo' />
                                </div>
                            </a>
                        </li>
                        <li className='related-recipes-item'>
                            <a href='#'>
                                <h5>Buckwheat pancakes with maple syrup</h5>
                                <div className='related-recipes-img'>
                                    <img src={imageOne} alt='related-photo' />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Recipe;
