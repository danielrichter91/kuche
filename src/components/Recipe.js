import React, { Component } from 'react';
import Header from './Header';
import IngredientsList from './tags/IngredientsList';
import Method from './tags/Method';
import RelatedRecipes from './tags/RelatedRecipes';
import RecipeData from '../data/data';
import { getImage } from '../services/mixin';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageId: undefined,
            pageData: undefined
        };
    }
    
    componentDidMount = () => {
        this.setState({
            pageId: this.props.match.params.id
        })
        RecipeData.recipes.map((x, i) => {
            if (x.id === this.props.match.params.id) {
                this.setState({ pageData: x });
            }
        })
    }

    render() {
        var title = this.state.pageData ? this.state.pageData.title : undefined;
        var image = this.state.pageData ? getImage(this.state.pageData.image) : undefined;
    return (
    <div>
        <Header headerColor='dark' />
        <div className='container'>
            <div className='content'>
                <h1 className='recipe-title'>{title}</h1>
                <div className='recipe-img'>
                    <img src={image} alt='main' />
                </div>
                <div className='main-content'>
                    <IngredientsList data={this.state.pageData} />
                    <Method data={this.state.pageData} />
                </div>
                <RelatedRecipes image={image} />
            </div>
        </div>
    </div>
    );
  }
}

export default Recipe;
