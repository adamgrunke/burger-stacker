import React from 'react';

const IngredientList = props => {
    var showIngredients = props.toppings.map((ingredient, i) => {
        return(
            <div key={i}>
                {ingredient.name}
                <button 
                    value={[ingredient.name, ingredient.color]} 
                    onClick={props.onClick}>>
                </button>
            </div>
        )
    }) 

    return(
            <div>
                <div>
                    {showIngredients}
                </div> 
            </div>
    )
}
export default IngredientList;