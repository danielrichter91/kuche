import React, { Component } from 'react';
import { getImage } from '../../services/mixin';

class RelatedRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
    return (
        <div className='related-recipes'>
            <h2 className='related-recipes-title'>Related recipes</h2>
            <ul className='related-recipes-list'>
                {this.props.data.recipes.map((x, i) => {
                    var linkUrl = '/recipes/' + x.id;
                    return (
                        <li key={i} className='related-recipes-item'>                        
                            <a href={linkUrl}>
                                <h5>{x.title}</h5>
                                <div className='related-recipes-img'>
                                    <img src={getImage(x.image)} alt='related' />
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
  }
}

export default RelatedRecipes;
