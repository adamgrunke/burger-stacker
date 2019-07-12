import React from 'react';

class IngredientList extends React.Component {
    
    
    render() {
        return(
            <>


                {this.props.toppings.map((ingredient, i) => <div key={i}>{ingredient.name}
                
                <button value={ingredient.name} onClick={this.props.onClick}>></button>

                </div> )}
                
                
            </>
        );
    }
}










export default IngredientList;